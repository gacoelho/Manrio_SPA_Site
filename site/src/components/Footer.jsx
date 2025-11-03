import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-manrio mt-5">
      <div className="footer-overlay" aria-hidden="true" />
      <div className="container py-5">
        <div className="row gy-4">
          {/* Informações da Empresa */}
          <div className="col-md-6 col-lg-4 footer-column">
            <h5 className="footer-title">Manrio Engenharia</h5>
            <p className="footer-text">
              Profissionais treinados e capacitados em sistemas de energia, telecomunicações e segurança eletrônica
              patrimonial, prevenção contra incêndio e pânico.
            </p>
            <div className="footer-social d-flex flex-wrap align-items-center gap-3">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/manriorj/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-md-6 col-lg-4 footer-column">
            <h5 className="footer-title">Links Rápidos</h5>
            <ul className="list-unstyled footer-link-list">
              <li>
                <Link
                  to="/"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  <i className="fas fa-home me-2" aria-hidden="true"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="footer-link">
                  <i className="fas fa-info-circle me-2" aria-hidden="true"></i>Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="footer-link">
                  <i className="fas fa-project-diagram me-2" aria-hidden="true"></i>Projetos
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="footer-link">
                  <i className="fas fa-newspaper me-2" aria-hidden="true"></i>Notícias
                </Link>
              </li>
              <li>
                <Link to="/contato" className="footer-link">
                  <i className="fas fa-envelope me-2" aria-hidden="true"></i>Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-md-6 col-lg-4 footer-column">
            <h5 className="footer-title">Contato</h5>
            <ul className="list-unstyled footer-contact-list">
              <li>
                <a href="mailto:manrio@manriorj.com" className="footer-link">
                  <i className="fas fa-envelope me-2" aria-hidden="true"></i>manrio@manriorj.com
                </a>
              </li>
              <li>
                <a href="tel:+5521991135673" className="footer-link">
                  <i className="fas fa-phone me-2" aria-hidden="true"></i>(21) 99113-5673
                </a>
              </li>
              <li>
                <a href="tel:+5522996225673" className="footer-link">
                  <i className="fas fa-phone me-2" aria-hidden="true"></i>(22) 99622-5673
                </a>
              </li>
              <li>
                <span className="footer-link d-inline-flex align-items-center">
                  <i className="fas fa-map-marker-alt me-2" aria-hidden="true"></i>Rio de Janeiro, RJ
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <p className="mb-0 footer-copy">
            &copy; {new Date().getFullYear()} <strong>MANRIO ENGENHARIA</strong>. Todos os direitos reservados.
          </p>
          <span className="footer-tagline">Inovação em engenharia com foco em segurança e eficiência.</span>
        </div>
      </div>
    </footer>
  )
}