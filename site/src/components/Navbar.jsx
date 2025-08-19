import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-success fw-bold" to="/" style={{ fontSize: '1.5rem' }}>
          Manrio Engenharia
        </Link>

        <button
          className="navbar-toggler bg-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>

            {/* Dropdown SISTEMAS */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="sistemasDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sistemas
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="sistemasDropdown">
                <li><Link className="dropdown-item" to="/seguranca">Segurança</Link></li>
                <li><Link className="dropdown-item" to="/energia">Energia</Link></li>
                <li><Link className="dropdown-item" to="/incendio">Incêndio</Link></li>
                <li><Link className="dropdown-item" to="/telecom">Telecom</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/projetos">Projetos</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="/noticias">Notícias</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="https://www.atendeportaria.com/riodejaneiro">Portaria Remota</Link>
            </li>

            {/* Dropdown MAIS */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-success"
                href="#"
                id="maisDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mais
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="maisDropdown">
                <li><Link className="dropdown-item" to="/sobre">Sobre</Link></li>
                <li><Link className="dropdown-item" to="/contato">Contato</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

