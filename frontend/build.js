const fs = require('fs');
const path = require('path');
const util = require('util');
const ejs = require('ejs');

const renderFile = util.promisify(ejs.renderFile);

const root = __dirname;
const publicDir = path.join(root, 'public');
const viewsDir = path.join(root, 'views');
const distDir = path.join(root, 'dist');

function ensureDist() {
  fs.mkdirSync(distDir, { recursive: true });
}

// 1) Copia arquivos do public para dist (não copia .html)
function copyPublicFiles() {
  if (!fs.existsSync(publicDir)) return;
  copyDirRecursive(publicDir, distDir);
}

function copyDirRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const items = fs.readdirSync(srcDir);
  items.forEach((it) => {
    const s = path.join(srcDir, it);
    const d = path.join(destDir, it);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) {
      copyDirRecursive(s, d);
    } else {
      if (path.extname(s).toLowerCase() === '.html') {
        // never overwrite HTML from build/templates
        console.log('skipped html', path.relative(publicDir, s));
        return;
      }
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
      console.log('copied', path.relative(publicDir, s));
    }
  });
}

// helper para capitalizar nome para pageTitle padrão
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 2) Renderiza arquivos EJS de views para dist (index.ejs -> index.html)
async function renderViews() {
  if (!fs.existsSync(viewsDir)) {
    console.log('views directory not found, skipping render:', viewsDir);
    return;
  }
  const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.ejs'));
  for (const file of files) {
    const src = path.join(viewsDir, file);
    const name = path.basename(file, '.ejs') + '.html';
    const dest = path.join(distDir, name);

    // default context - evita variáveis não definidas nas views
    const baseName = path.basename(file, '.ejs');
    const defaultTitle = baseName === 'index' ? 'Home' : capitalize(baseName);

    try {
      // render passando context padrão com todas as variáveis necessárias
      const html = await renderFile(src, {
        pageTitle: defaultTitle,
        headerTitle: 'SoloForte',
        headerLogo: './logo.png',
        active: baseName === 'index' ? 'list' : baseName
      }, { root: viewsDir });
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, html, 'utf8');
      console.log('rendered', file, '->', path.relative(root, dest));
    } catch (err) {
      // loga erro mas não interrompe todo o processo
      console.error('failed to render', src, err);
    }
  }
}

// 3) Corrige links absolutos ("/...") em arquivos HTML quando o alvo existir em dist
function fixHtmlPaths() {
  const htmlFiles = findFilesRecursively(distDir).filter((f) => f.endsWith('.html'));
  htmlFiles.forEach((htmlPath) => {
    let content = fs.readFileSync(htmlPath, 'utf8');

    // captura href="/..." e src='/...' (ignora //, http:, data:, mailto:, tel:)
    content = content.replace(/(?:href|src)\s*=\s*(['"])(\/[^'"]+)\1/g, (full, quote, absPath) => {
      if (/^\/\//.test(absPath)) return full; // //cdn...
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(absPath)) return full; // protocol://

      const targetAbs = path.join(distDir, absPath.slice(1));
      const exists =
        fs.existsSync(targetAbs) ||
        fs.existsSync(targetAbs + '.html') ||
        fs.existsSync(path.join(targetAbs, 'index.html'));

      if (!exists) return full;

      const rel = toPosixPath(path.relative(path.dirname(htmlPath), targetAbs));
      const finalRel = rel.startsWith('.') ? rel : './' + rel;
      return full.replace(absPath, finalRel);
    });

    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log('processed', path.relative(distDir, htmlPath));
  });
}

function findFilesRecursively(dir) {
  if (!fs.existsSync(dir)) return [];
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(findFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

function toPosixPath(p) {
  return p.split(path.sep).join('/');
}

async function run() {
  ensureDist();
  copyPublicFiles();
  await renderViews();
  fixHtmlPaths();
  console.log('build post-process concluído.');
}

run().catch(err => {
  console.error('build failed', err);
  process.exit(1);
});
