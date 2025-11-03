import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [sistemasDropdownOpen, setSistemasDropdownOpen] = useState(false)
  const [maisDropdownOpen, setMaisDropdownOpen] = useState(false)
  const sistemasRef = useRef(null)
  const maisRef = useRef(null)

  // Fechar dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sistemasRef.current && !sistemasRef.current.contains(event.target)) {
        setSistemasDropdownOpen(false)
      }
      if (maisRef.current && !maisRef.current.contains(event.target)) {
        setMaisDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0f0f0f' }}>
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
            <li className={`nav-item dropdown ${sistemasDropdownOpen ? 'show' : ''}`} ref={sistemasRef}>
              <button
                className="nav-link dropdown-toggle text-light"
                id="sistemasDropdown"
                type="button"
                onClick={() => setSistemasDropdownOpen(!sistemasDropdownOpen)}
                aria-expanded={sistemasDropdownOpen}
                style={{ background: 'none', border: 'none', padding: '0.5rem 1rem' }}
              >
                Sistemas
              </button>
              <ul 
                className={`dropdown-menu dropdown-menu-dark ${sistemasDropdownOpen ? 'show' : ''}`}
                aria-labelledby="sistemasDropdown"
              >
                <li><Link className="dropdown-item" to="/seguranca" onClick={() => setSistemasDropdownOpen(false)}>Segurança</Link></li>
                <li><Link className="dropdown-item" to="/energia" onClick={() => setSistemasDropdownOpen(false)}>Energia</Link></li>
                <li><Link className="dropdown-item" to="/incendio" onClick={() => setSistemasDropdownOpen(false)}>Incêndio</Link></li>
                <li><Link className="dropdown-item" to="/telecom" onClick={() => setSistemasDropdownOpen(false)}>Telecom</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/projetos">Projetos</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="https://www.atendeportaria.com/riodejaneiro">Portaria Remota</Link>
            </li>

            {/* Dropdown MAIS */}
            <li className={`nav-item dropdown ${maisDropdownOpen ? 'show' : ''}`} ref={maisRef}>
              <button
                className="nav-link dropdown-toggle text-success"
                id="maisDropdown"
                type="button"
                onClick={() => setMaisDropdownOpen(!maisDropdownOpen)}
                aria-expanded={maisDropdownOpen}
                style={{ background: 'none', border: 'none', padding: '0.5rem 1rem' }}
              >
                Mais
              </button>
              <ul 
                className={`dropdown-menu dropdown-menu-dark dropdown-menu-end ${maisDropdownOpen ? 'show' : ''}`}
                aria-labelledby="maisDropdown"
              >
                <li><Link className="dropdown-item" to="/sobre" onClick={() => setMaisDropdownOpen(false)}>Sobre</Link></li>
                <li><Link className="dropdown-item" to="/contato" onClick={() => setMaisDropdownOpen(false)}>Contato</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

