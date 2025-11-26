# SoloForte Frontend (EJS)

This workspace contains a small Express server that renders the frontend using EJS templates.

Quick start:

1. Install dependencies

```bash
cd c:/Users/Matheus/soloforte-frontend
npm install
```

2. Start the server

```bash
npm start
```

The app will be available at http://localhost:3000. The page fetches products from the API configured in `public/config.js` (default: `http://localhost:5000/api/products`).

Notes:
- The original `index.html` was converted to `views/index.ejs` and is rendered dynamically with variables (title, header, active nav).
- Static assets are served from the `public` directory (`styles.css`, `config.js`, `utils.js`).
- You can add more EJS views in `views/` and wire routes in `server.js`.
