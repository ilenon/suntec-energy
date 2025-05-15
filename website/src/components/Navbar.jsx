import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">Suntec</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}