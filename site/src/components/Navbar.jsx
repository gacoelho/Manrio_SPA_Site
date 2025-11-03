import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [sistemasDropdownOpen, setSistemasDropdownOpen] = useState(false)
  const [maisDropdownOpen, setMaisDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const sistemasRef = useRef(null)
  const maisRef = useRef(null)
  const collapseRef = useRef(null)

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeNavbarCollapse = () => {
    if (typeof window === 'undefined') return
    const bootstrap = window.bootstrap
    if (collapseRef.current && bootstrap?.Collapse) {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseRef.current)
      collapseInstance.hide()
    }
  }

  const handleNavItemClick = () => {
    setSistemasDropdownOpen(false)
    setMaisDropdownOpen(false)
    closeNavbarCollapse()
  }

  const renderNavLink = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link manrio-nav-link ${isActive ? 'active' : ''}`}
      onClick={handleNavItemClick}
    >
      {label}
    </NavLink>
  )

  return (
    <nav className={`navbar navbar-expand-lg manrio-navbar sticky-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Manrio Engenharia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {renderNavLink('/', 'Home')}
            </li>

              {/* Dropdown SISTEMAS */}
              <li className={`nav-item dropdown ${sistemasDropdownOpen ? 'show' : ''}`} ref={sistemasRef}>
                <button
                  className="nav-link dropdown-toggle manrio-nav-link"
                  id="sistemasDropdown"
                  type="button"
                  onClick={() => {
                    setSistemasDropdownOpen(!sistemasDropdownOpen)
                    setMaisDropdownOpen(false)
                  }}
                  aria-expanded={sistemasDropdownOpen}
                  style={{ background: 'none', border: 'none' }}
                >
                  Sistemas
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-dark ${sistemasDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="sistemasDropdown"
                >
                  <li>
                    <NavLink
                      to="/seguranca"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Segurança
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/energia"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Energia
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/incendio"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Incêndio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/telecom"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Telecom
                    </NavLink>
                  </li>
                </ul>
              </li>

            <li className="nav-item">
              {renderNavLink('/projetos', 'Projetos')}
            </li>
            
            <li className="nav-item">
              {renderNavLink('/noticias', 'Notícias')}
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link manrio-nav-link"
                href="https://www.atendeportaria.com/riodejaneiro"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                Portaria Remota
              </a>
            </li>

              {/* Dropdown MAIS */}
              <li className={`nav-item dropdown ${maisDropdownOpen ? 'show' : ''}`} ref={maisRef}>
                <button
                  className="nav-link dropdown-toggle manrio-nav-link"
                  id="maisDropdown"
                  type="button"
                  onClick={() => {
                    setMaisDropdownOpen(!maisDropdownOpen)
                    setSistemasDropdownOpen(false)
                  }}
                  aria-expanded={maisDropdownOpen}
                  style={{ background: 'none', border: 'none' }}
                >
                  Mais
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-dark dropdown-menu-end ${maisDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="maisDropdown"
                >
                  <li>
                    <NavLink
                      to="/sobre"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Sobre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contato"
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={handleNavItemClick}
                    >
                      Contato
                    </NavLink>
                  </li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

