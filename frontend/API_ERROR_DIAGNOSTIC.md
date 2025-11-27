# 🔍 Diagnóstico: Erro "Unexpected token '<'"

## Problema Identificado

**Erro**: `Unexpected token '<', "<!doctype "... is not valid JSON`

**Causa**: A API está retornando **HTML em vez de JSON**

---

## 🎯 Passos para Resolver

### 1. Verificar a URL da API

Abra o **DevTools** (F12) → **Network** e veja qual URL está sendo chamada:

```
GET http://localhost:5000/api/products  ❌ ERRADO se retorna HTML
GET https://api.solo-forte.tech/api/products  ❌ ERRADO se retorna HTML
```

### 2. Testar a URL Diretamente

Abra no navegador ou Postman:

```bash
curl http://localhost:5000/api/products
# OU
curl https://api.solo-forte.tech/api/products
```

**Resultado esperado:**
```json
[
  {
    "id": 2,
    "name": "Produto Novo",
    "description": "Descrição do produto novo",
    "price": 120,
    "stock": 1
  }
]
```

**Resultado problemático (que está acontecendo):**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>404 Not Found</title>
  </head>
  ...
```

---

## 🚨 Causas Mais Comuns

### ❌ Problema 1: URL Incorreta
```
Esperado:  http://localhost:5000/api/products
Errado:    http://localhost:5000/  (raiz)
Errado:    http://localhost:3000/api/products  (porta errada)
```

**Solução**: Verificar `.env`:
```bash
# .env
VITE_API_URL=http://localhost:5000/api/products
```

### ❌ Problema 2: API Não Está Rodando
```bash
# Se a API não está rodando, o navegador retorna HTML de erro
# Erro típico: Cannot GET /api/products
```

**Solução**: Iniciar a API backend:
```bash
# No terminal backend
npm start
# ou
python app.py
```

### ❌ Problema 3: CORS Bloqueado
O servidor frontend pode estar chamando uma API sem CORS configurado.

**Solução no backend (Node.js/Express):**
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // Seu frontend
  credentials: true
}));
```

### ❌ Problema 4: Proxy Rewrite
Algumas configurações de servidor reescrevem tudo para HTML.

**Solução**: Verificar `.htaccess` ou configuração do servidor.

---

## 🔧 Como Debugar

### 1. Abrir DevTools (F12)

**Console:**
```javascript
// Cole isso no console e veja o output:
fetch('http://localhost:5000/api/products')
  .then(r => r.text())
  .then(t => console.log(t.substring(0, 200)))
```

Se retornar HTML, a URL está errada ou a API não está rodando.

### 2. Verificar Network

No DevTools → **Network** → Fazer uma requisição → Ver a resposta:

```
Status: 200 ✓
Content-Type: application/json ✓
Response: [...JSON válido...]
```

vs

```
Status: 404 ✗
Content-Type: text/html ✗
Response: <!DOCTYPE html>...
```

### 3. Logs do Frontend

O AppContext agora loga tudo no console:
```javascript
console.log('Fetching products from:', API_BASE_URL)
console.error('Erro ao buscar produtos:', err)
```

---

## ✅ Checklist de Resolução

- [ ] Verificar URL em `.env` (VITE_API_URL)
- [ ] Confirmar que backend está rodando
- [ ] Testar URL com curl/Postman
- [ ] Verificar CORS na API
- [ ] Ver DevTools → Network para confirmar Content-Type
- [ ] Limpar cache do navegador (Ctrl+Shift+R)
- [ ] Restartar dev server (`npm run dev`)

---

## 💡 Exemplo de URL Correta

### Ambiente Local
```bash
# .env
VITE_API_URL=http://localhost:5000/api/products
```

### Ambiente Produção (AWS EC2)
```bash
# .env.production
VITE_API_URL=https://api.solo-forte.tech/api/products
```

---

## 🎯 Solução Recomendada

1. **Verificar a URL base:**
   - Abra DevTools (F12)
   - Vá para Console
   - Digite: `console.log(import.meta.env.VITE_API_URL)`
   - Confirme que está correto

2. **Testar diretamente:**
   ```bash
   curl -s http://localhost:5000/api/products | head -20
   ```

3. **Se não funcionar:** Compartilhe
   - A URL completa
   - O erro exato do console
   - Se a API está rodando
   - Em qual porta a API está

---

## 📋 Template de Erro para Suporte

Se ainda não resolver, execute no console e compartilhe:

```javascript
// 1. Qual é a URL?
console.log('API_URL:', import.meta.env.VITE_API_URL)

// 2. Testar requisição
fetch(import.meta.env.VITE_API_URL)
  .then(r => ({
    status: r.status,
    contentType: r.headers.get('content-type'),
    text: r.text()
  }))
  .then(r => r.text.then(t => ({ ...r, text: t })))
  .then(r => console.log(JSON.stringify(r, null, 2)))
```

Compartilhe o output com toda informação.

---

**Seu frontend agora tem melhor tratamento de erros! Verifique o console para diagnósticos detalhados. 🎯**
