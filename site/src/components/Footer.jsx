import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3 border-top border-secondary">
      <div className="container">
        <div className="row">
          {/* Informações da Empresa */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-success mb-3">Manrio Engenharia</h5>
            <p className="small text-muted">
              Profissionais treinados e capacitados em sistemas de energia, telecomunicações 
              e segurança eletrônica patrimonial, prevenção contra incêndio e pânico.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/manriorj/" className="text-light">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-success mb-3">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none">
                  <i className="fas fa-home me-2"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sobre" className="text-secondary text-decoration-none">
                  <i className="fas fa-info-circle me-2"></i>Sobre Nós
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/projetos" className="text-secondary text-decoration-none">
                  <i className="fas fa-project-diagram me-2"></i>Projetos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias" className="text-secondary text-decoration-none">
                  <i className="fas fa-newspaper me-2"></i>Notícias
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contato" className="text-secondary text-decoration-none">
                  <i className="fas fa-envelope me-2"></i>Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-success mb-3">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="mailto:manrio@manriorj.com" className="text-secondary text-decoration-none">
                  <i className="fas fa-envelope me-2"></i>manrio@manriorj.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+5521991135673" className="text-secondary text-decoration-none">
                  <i className="fas fa-phone me-2"></i>(21) 99113-5673
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+5522996225673" className="text-secondary text-decoration-none">
                  <i className="fas fa-phone me-2"></i>(22) 99622-5673
                </a>
              </li>
              <li className="mb-2">
                <span className="text-secondary">
                  <i className="fas fa-map-marker-alt me-2"></i>Rio de Janeiro, RJ
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de separação */}
        <hr className="border-secondary my-4" />

        {/* Copyright e Newsletter */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} <strong>MANRIO ENGENHARIA</strong> — Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input 
                type="email" 
                className="form-control form-control-sm bg-dark text-light border-secondary" 
                placeholder="Seu email para newsletter"
              />
              <button className="btn btn-success btn-sm">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}