export default function Contato() {
  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/manrio_logo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            Entre em Contato
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Estamos aqui para ajudar você. Entre em contato conosco!
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-5">
        <div className="row">
          {/* Informações de Contato */}
          <div className="col-lg-4 mb-5">
            <h2 className="text-success mb-4">
              <i className="fas fa-address-book me-3"></i>
              Informações de Contato
            </h2>
            
            <div className="card bg-dark border-success text-light mb-4">
              <div className="card-body">
                <h5 className="text-success mb-3">
                  <i className="fas fa-envelope me-2"></i>
                  Email
                </h5>
                <p className="mb-2">
                  <a href="mailto:manrio@manriorj.com" className="text-light text-decoration-none">
                    manrio@manriorj.com
                  </a>
                </p>
              </div>
            </div>

            <div className="card bg-dark border-info text-light mb-4">
              <div className="card-body">
                <h5 className="text-info mb-3">
                  <i className="fas fa-phone me-2"></i>
                  Telefones
                </h5>
                <p className="mb-2">
                  <a href="tel:+5521991135673" className="text-light text-decoration-none">
                    (21) 99113-5673
                  </a>
                </p>
                <p className="mb-0">
                  <a href="tel:+5522996225673" className="text-light text-decoration-none">
                    (22) 99622-5673
                  </a>
                </p>
              </div>
            </div>

            <div className="card bg-dark border-warning text-light mb-4">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Localização
                </h5>
                <p className="mb-0">
                  Rio de Janeiro, RJ<br />
                  Brasil
                </p>
              </div>
            </div>

            <div className="card bg-dark border-secondary text-light">
              <div className="card-body">
                <h5 className="text-secondary mb-3">
                  <i className="fas fa-clock me-2"></i>
                  Horário de Atendimento
                </h5>
                <p className="mb-0">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="col-lg-8">
            <div className="card bg-dark border-success text-light">
              <div className="card-body">
                <h2 className="text-success mb-4">
                  <i className="fas fa-paper-plane me-3"></i>
                  Envie sua Mensagem
                </h2>
                
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nome" className="form-label">Nome Completo *</label>
                      <input 
                        type="text" 
                        className="form-control bg-dark text-light border-secondary" 
                        id="nome" 
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input 
                        type="email" 
                        className="form-control bg-dark text-light border-secondary" 
                        id="email" 
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="telefone" className="form-label">Telefone</label>
                      <input 
                        type="tel" 
                        className="form-control bg-dark text-light border-secondary" 
                        id="telefone"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="empresa" className="form-label">Empresa</label>
                      <input 
                        type="text" 
                        className="form-control bg-dark text-light border-secondary" 
                        id="empresa"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="assunto" className="form-label">Assunto *</label>
                    <select 
                      className="form-select bg-dark text-light border-secondary" 
                      id="assunto" 
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="orcamento">Solicitar Orçamento</option>
                      <option value="seguranca">Sistemas de Segurança</option>
                      <option value="incendio">Proteção contra Incêndio</option>
                      <option value="energia">Sistemas Elétricos</option>
                      <option value="telecom">Telecomunicações</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem *</label>
                    <textarea 
                      className="form-control bg-dark text-light border-secondary" 
                      id="mensagem" 
                      rows="5" 
                      placeholder="Descreva sua necessidade ou solicitação..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Desejo receber novidades e atualizações por email
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg px-5">
                    <i className="fas fa-paper-plane me-2"></i>
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-dark border-secondary text-light">
              <div className="card-body text-center">
                <h3 className="text-secondary mb-4">
                  <i className="fas fa-share-alt me-3"></i>
                  Siga-nos nas Redes Sociais
                </h3>
                <p className="mb-4">Fique por dentro das nossas novidades e projetos</p>
                
                <div className="d-flex justify-content-center gap-4">
                  <a href="#" className="btn btn-outline-primary btn-lg">
                    <i className="fab fa-facebook-f me-2"></i>
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/manriorj/" className="btn btn-outline-danger btn-lg">
                    <i className="fab fa-instagram me-2"></i>
                    Instagram
                  </a>
                  <a href="#" className="btn btn-outline-info btn-lg">
                    <i className="fab fa-linkedin-in me-2"></i>
                    LinkedIn
                  </a>
                  <a href="#" className="btn btn-outline-success btn-lg">
                    <i className="fab fa-whatsapp me-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
