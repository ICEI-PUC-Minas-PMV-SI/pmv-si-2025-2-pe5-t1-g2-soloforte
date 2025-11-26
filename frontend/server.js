const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static assets from /public
app.use(express.static(path.join(__dirname, "public")));

// Basic routes (render EJS views)
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "SoloForte - Produtos",
    headerTitle: "SoloForte - Gestão de Produtos",
    headerLogo: "/logo-removebg-preview.png",
    active: "list",
  });
});

app.get("/create", (req, res) => {
  res.render("create", {
    pageTitle: "SoloForte - Criar Produto",
    headerTitle: "SoloForte - Gestão de Produtos",
    headerLogo: "/logo-removebg-preview.png",
    active: "create",
  });
});

app.get("/view", (req, res) => {
  res.render("view", {
    pageTitle: "SoloForte - Visualizar Produto",
    headerTitle: "SoloForte - Gestão de Produtos",
    headerLogo: "/logo-removebg-preview.png",
    active: "list",
  });
});

app.get("/edit", (req, res) => {
  res.render("edit", {
    pageTitle: "SoloForte - Editar Produto",
    headerTitle: "SoloForte - Gestão de Produtos",
    headerLogo: "/logo-removebg-preview.png",
    active: "list",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
