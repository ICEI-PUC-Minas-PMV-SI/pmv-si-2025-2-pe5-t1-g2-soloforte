import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="SoloForte Logo" className="logo-img" />
          <span className="logo-text">SoloForte</span>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">📋 Listar</Link>
          <Link to="/create" className="nav-link">➕ Criar</Link>
        </nav>
      </div>
    </header>
  )
}
