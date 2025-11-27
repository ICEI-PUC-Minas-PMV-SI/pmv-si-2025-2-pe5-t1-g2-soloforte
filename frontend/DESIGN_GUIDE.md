# 🎨 Guia de Design - SoloForte

## Identidade Visual

A SoloForte utiliza uma paleta de cores que reflete a essência do agronegócio, crescimento e confiabilidade.

---

## 📋 Paleta de Cores Oficial

### Cores Principais

| Cor | Código | Uso | Significado |
|-----|--------|-----|------------|
| **Verde Escuro** | `#2E462E` | Botões primários, header, links ativos | Lavouras, crescimento, vitalidade |
| **Marrom Terra** | `#6B4F4F` | Elementos secundários, texto | Solo fértil, solidez, tradição |
| **Bege/Areia** | `#F5EEDC` | Destaques, backgrounds, cards | Grãos, colheita, leveza, equilíbrio |

### Variações

| Elemento | Cor | Código | Uso |
|----------|-----|--------|-----|
| Verde muito escuro | - | `#1e2e1e` | Hover de botões verdes |
| Verde claro | - | `#3d573d` | Background subtle |
| Marrom escuro | - | `#4a3835` | Hover de elementos marrom |
| Marrom claro | - | `#8b6f6f` | Texto secundário |
| Bege hover | - | `#e8dcc8` | Hover de botões bege |
| Bege neutro | - | `#ddd5c8` | Bordas |
| Bege muito claro | - | `#faf8f4` | Background principal |

---

## 🎯 Uso das Cores

### Header
- **Fundo**: Gradiente Verde → Marrom (`linear-gradient(135deg, #2E462E 0%, #6B4F4F 100%)`)
- **Texto**: Branco
- **Links de navegação**: Branco com hover em Bege
- **Logo**: Branca com filtro invertido

### Botões

#### Botão Primário (CTA Principal)
```css
background: #2E462E (Verde Escuro)
color: white
hover: #1e2e1e (Verde mais escuro)
```

#### Botão Secundário (Ações Alternativas)
```css
background: #F5EEDC (Bege)
color: #2d1f1a (Texto escuro)
hover: #e8dcc8 (Bege mais escuro)
```

#### Botão Perigo (Deletar)
```css
background: #dc2626 (Vermelho)
color: white
hover: #b91c1c (Vermelho escuro)
```

### Cards
- **Borda esquerda**: 4px sólido Verde `#2E462E`
- **Borda inferior do título**: 2px sólido Bege `#F5EEDC`
- **Fundo**: Branco
- **Título**: Verde `#2E462E`

### Tabelas
- **Header**: Gradiente Verde → Marrom
- **Texto header**: Branco
- **Hover de linha**: Bege `#F5EEDC` com sombra sutil
- **Borda inferior header**: 2px sólido Bege

### Alertas
- **Sucesso**: Background verde com 10% opacidade + borda esquerda Verde
- **Erro**: Background vermelho com 10% opacidade + borda esquerda Vermelho

### Formulários
- **Background input**: `#fefdfb` (Bege muito claro)
- **Border padrão**: `#ddd5c8` (Bege neutro)
- **Border focus**: `#2E462E` (Verde) com sombra verde 10%
- **Label**: `#2d1f1a` (Texto escuro)

---

## 🔤 Tipografia

- **Font Family**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`)
- **Peso padrão**: 500
- **Peso forte**: 600-700 para títulos e botões

### Hierarquia de Tamanhos
- **h1**: 1.875rem (30px) - Branco em header
- **h2/Títulos de card**: 1.25rem (20px) - Verde
- **Labels**: 0.875rem (14px)
- **Texto do corpo**: 0.875rem (14px) - Marrom/Cinza

---

## 💫 Efeitos e Interações

### Sombras
- **Padrão**: `0 2px 8px rgba(46, 70, 46, 0.12)` (Verde com 12% opacidade)
- **Botão hover**: `0 4px 8px rgba(46, 70, 46, 0.25)` (Sombra maior)

### Transições
- **Padrão**: `all 0.2s ease`
- **Hover de botões**: Elevação (-1px) com sombra aumentada

### Animações
- **Loading spinner**: 
  - Border: 3px Bege `#F5EEDC`
  - Border-top: Verde `#2E462E`
  - Rotação: 0.8s infinita

---

## 📱 Aplicação no Frontend

### CSS Variables (`:root`)
```css
--green-dark: #2E462E
--brown-earth: #6B4F4F
--beige-light: #F5EEDC
--primary: #2E462E
--secondary: #6B4F4F
--accent: #F5EEDC
```

### Componentes React
Todos os componentes usam as variáveis CSS:
- `var(--primary)` para Verde
- `var(--secondary)` para Marrom
- `var(--accent)` para Bege

---

## 📐 Componentes Visuals

### Logo
- Localização: `/public/logo.png` e `/logo-removebg-preview.png`
- No header: 40px de altura
- Filtro CSS: `filter: brightness(0) invert(1)` (para aparecer branca)

### Favicon
- Localização: `/public/favicon.ico`
- Variações: `favicon-16x16.png`, `favicon-32x32.png`
- Cores: Verde e Marrom (da logo original)

### Icons
- Emojis usados: 📋, ➕, 🔍, ✏️, 🗑️

---

## ✅ Checklist de Design

- [x] Header com gradiente Verde → Marrom
- [x] Logo integrada no header
- [x] Botões com cores corretas e hover states
- [x] Cards com borda esquerda Verde
- [x] Tabelas com header estilizado
- [x] Formulários com inputs em Bege claro
- [x] Alertas com cores apropriadas
- [x] Loading spinner com cores da paleta
- [x] Responsividade mantida
- [x] Web manifest com cores corretas
- [x] Meta tags com tema Verde

---

## 🚀 Deploy

Todas as cores estão aplicadas no `src/index.css` via CSS variables.
O build gera um `dist/` com os estilos compilados e otimizados.

Para alterar cores globalmente, modifique as variáveis em `:root` no `src/index.css`.
