const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const viewsDir = path.join(__dirname, "views");
const publicDir = path.join(__dirname, "public");
const outputDir = path.join(__dirname, "dist");

// Criar pasta dist se não existir
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Copiar public/ para dist/
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log("Copiando public/ para dist/...");
copyDir(publicDir, outputDir);

// Dados para renderizar cada página
const pages = [
  { file: "index.ejs", output: "index.html", data: { pageTitle: "SoloForte - Produtos", headerTitle: "SoloForte - Gestão de Produtos", headerLogo: "/images/logo.png", active: "list" } },
  { file: "create.ejs", output: "create.html", data: { pageTitle: "SoloForte - Criar Produto", headerTitle: "SoloForte - Gestão de Produtos", headerLogo: "/images/logo.png", active: "create" } },
  { file: "view.ejs", output: "view.html", data: { pageTitle: "SoloForte - Visualizar Produto", headerTitle: "SoloForte - Gestão de Produtos", headerLogo: "/images/logo.png", active: "list" } },
  { file: "edit.ejs", output: "edit.html", data: { pageTitle: "SoloForte - Editar Produto", headerTitle: "SoloForte - Gestão de Produtos", headerLogo: "/images/logo.png", active: "list" } },
];

pages.forEach(({ file, output, data }) => {
  const templatePath = path.join(viewsDir, file);
  ejs.renderFile(templatePath, data, (err, html) => {
    if (err) {
      console.error(`Erro ao compilar ${file}:`, err);
      return;
    }
    fs.writeFileSync(path.join(outputDir, output), html);
    console.log(`✓ ${output} gerado`);
  });
});