export default function Home() {
  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/manrio_logo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            O que somos!
          </h1>
          <p className="lead mb-4" style={{ fontSize: '1.3rem' }}>
            Profissionais treinados e capacitados em sistemas de energia, telecomunicações e segurança eletrônica patrimonial,
            prevenção contra incêndio e pânico.
          </p>
          <h2 className="h3 text-success mb-4">
            Soluções ao seu alcance
          </h2>
          <p className="mb-4" style={{ fontSize: '1.1rem' }}>
            Contratar nunca foi tão simples
          </p>
          <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
            Solicite um orçamento
          </button>
        </div>
      </div>

      {/* Serviços Section */}
      <div className="container py-5">
        <h2 className="text-center text-success mb-5">O que podemos fazer!</h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          {/* Segurança */}
          <div className="col">
            <div className="card h-100 bg-dark border-success text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                <h3 className="card-title text-success">Segurança</h3>
                <p className="card-text">
                  A segurança eletrônica possibilita à sua empresa soluções para controle de acesso, registro de presença e muito mais,
                  com total confiabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Incêndio */}
          <div className="col">
            <div className="card h-100 bg-dark border-danger text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-fire-extinguisher fa-3x text-danger mb-3"></i>
                <h3 className="card-title text-danger">Incêndio</h3>
                <p className="card-text">
                  A proteção contra incêndio consiste em medidas e equipamentos que tornam o ambiente seguro e facilitam o acesso externo em emergências.
                </p>
              </div>
            </div>
          </div>

          {/* Energia */}
          <div className="col">
            <div className="card h-100 bg-dark border-warning text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-bolt fa-3x text-warning mb-3"></i>
                <h3 className="card-title text-warning">Energia</h3>
                <p className="card-text">
                  Instalação e manutenção elétrica com ferramentas modernas e equipe especializada para oferecer segurança e eficiência.
                </p>
              </div>
            </div>
          </div>

          {/* Telecom */}
          <div className="col">
            <div className="card h-100 bg-dark border-info text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-network-wired fa-3x text-info mb-3"></i>
                <h3 className="card-title text-info">Telecom</h3>
                <p className="card-text">
                  Projetos completos de redes e sistemas de telecomunicações — do planejamento à instalação e manutenção.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Áreas de Atuação */}
        <h2 className="text-center text-success mb-5">Onde podemos atuar!</h2>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Industrial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-industry fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Industrial</h4>
                <p className="card-text">
                  Desenvolvemos projetos nos setores industriais de energia, óleo & gás, química, inflamáveis, transporte, mineração, alimentícia dentre outros.
                </p>
              </div>
            </div>
          </div>

          {/* Comercial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-store fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Comercial</h4>
                <p className="card-text">
                  Atuamos nos setores de lojas comerciais, shoppings, prédios de escritório, hospitais, hotelaria, dentre outros.
                </p>
              </div>
            </div>
          </div>

          {/* Residencial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-home fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Residencial</h4>
                <p className="card-text">
                  Atuamos também nos setores residenciais multifamiliares e conjuntos habitacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container text-center">
          <h3 className="text-success mb-4">Faça parte da nossa lista de emails</h3>
          <p className="mb-4">Nunca perca uma atualização</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-dark text-light border-secondary" 
                  placeholder="Seu email"
                />
                <button className="btn btn-success">Assine Já</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
