export default function Sobre() {
  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ 
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${import.meta.env.BASE_URL}manrio_logo.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            Quem Somos
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Conheça a história e valores da Manrio Engenharia
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Missão */}
            <div className="card bg-dark border-success text-light mb-5">
              <div className="card-body">
                <h2 className="text-success mb-4">
                  <i className="fas fa-bullseye me-3"></i>
                  Nossa Missão
                </h2>
                <p className="lead">
                  Fornecer soluções integradas e inovadoras em sistemas de engenharia, 
                  garantindo segurança, eficiência e qualidade em todos os nossos projetos.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="card bg-dark border-info text-light mb-5">
              <div className="card-body">
                <h2 className="text-info mb-4">
                  <i className="fas fa-eye me-3"></i>
                  Nossa Visão
                </h2>
                <p className="lead">
                  Ser referência nacional em soluções de engenharia para sistemas de segurança, 
                  energia e telecomunicações, reconhecida pela excelência técnica e inovação.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="card bg-dark border-warning text-light mb-5">
              <div className="card-body">
                <h2 className="text-warning mb-4">
                  <i className="fas fa-heart me-3"></i>
                  Nossos Valores
                </h2>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Excelência Técnica</strong>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Inovação</strong>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Segurança</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Confiabilidade</strong>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Compromisso</strong>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        <strong>Qualidade</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Especializações */}
            <div className="card bg-dark border-danger text-light mb-5">
              <div className="card-body">
                <h2 className="text-danger mb-4">
                  <i className="fas fa-cogs me-3"></i>
                  Nossas Especializações
                </h2>
                <p className="lead mb-4">
                  Somos especialistas em sistemas integrados de engenharia, oferecendo soluções completas para:
                </p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-shield-alt fa-2x text-success me-3"></i>
                      <div>
                        <h5 className="mb-1">Segurança Patrimonial</h5>
                        <p className="mb-0 small">Sistemas eletrônicos de segurança</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-fire-extinguisher fa-2x text-danger me-3"></i>
                      <div>
                        <h5 className="mb-1">Proteção contra Incêndio</h5>
                        <p className="mb-0 small">Sistemas de detecção e combate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-bolt fa-2x text-warning me-3"></i>
                      <div>
                        <h5 className="mb-1">Sistemas Elétricos</h5>
                        <p className="mb-0 small">Instalação e manutenção especializada</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-network-wired fa-2x text-info me-3"></i>
                      <div>
                        <h5 className="mb-1">Telecomunicações</h5>
                        <p className="mb-0 small">Redes e sistemas de comunicação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="card bg-dark border-secondary text-light">
              <div className="card-body">
                <h2 className="text-secondary mb-4">
                  <i className="fas fa-star me-3"></i>
                  Por que escolher a Manrio?
                </h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="fas fa-users fa-3x text-success mb-3"></i>
                      <h5>Equipe Qualificada</h5>
                      <p className="small">Profissionais treinados e certificados</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="fas fa-tools fa-3x text-info mb-3"></i>
                      <h5>Tecnologia Avançada</h5>
                      <p className="small">Ferramentas e equipamentos modernos</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="fas fa-clock fa-3x text-warning mb-3"></i>
                      <h5>Experiência</h5>
                      <p className="small">Anos de atuação no mercado</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="fas fa-handshake fa-3x text-success mb-3"></i>
                      <h5>Compromisso</h5>
                      <p className="small">Satisfação total do cliente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
