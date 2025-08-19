export default function Seguranca() {
  const servicos = [
    {
      id: 1,
      titulo: "Sistema de CFTV",
      descricao: "Circuito fechado de televisão com câmeras de alta definição",
      icone: "fas fa-video",
      cor: "success",
      recursos: [
        "Câmeras IP de alta resolução",
        "Gravador digital (DVR/NVR)",
        "Monitoramento remoto via smartphone",
        "Gravação contínua 24/7",
        "Detecção de movimento",
        "Visão noturna infravermelha"
      ]
    },
    {
      id: 2,
      titulo: "Controle de Acesso",
      descricao: "Sistemas para controle e registro de entrada e saída",
      icone: "fas fa-key",
      cor: "primary",
      recursos: [
        "Catracas eletrônicas",
        "Leitores de cartão/biometria",
        "Controle por senha",
        "Registro de horários",
        "Relatórios de acesso",
        "Integração com RH"
      ]
    },
    {
      id: 3,
      titulo: "Alarme de Intrusão",
      descricao: "Sistema de detecção e alarme para invasões",
      icone: "fas fa-shield-alt",
      cor: "danger",
      recursos: [
        "Sensores de movimento PIR",
        "Sensores magnéticos de porta/janela",
        "Painel de controle",
        "Comunicação via celular",
        "Sirene externa",
        "Integração com CFTV"
      ]
    },
    {
      id: 4,
      titulo: "Interfone e Portaria",
      descricao: "Sistemas de comunicação e controle de entrada",
      icone: "fas fa-phone",
      cor: "info",
      recursos: [
        "Interfones residenciais",
        "Portaria eletrônica",
        "Controle de portão",
        "Comunicação bidirecional",
        "Vídeo chamada",
        "Controle remoto"
      ]
    },
    {
      id: 5,
      titulo: "Cerca Elétrica",
      descricao: "Sistema de proteção perimetral",
      icone: "fas fa-bolt",
      cor: "warning",
      recursos: [
        "Fios condutores de alta tensão",
        "Postes isoladores",
        "Painel de controle",
        "Sinalização de alerta",
        "Detecção de corte",
        "Integração com alarme"
      ]
    },
    {
      id: 6,
      titulo: "Automação Residencial",
      descricao: "Controle inteligente de dispositivos",
      icone: "fas fa-home",
      cor: "secondary",
      recursos: [
        "Controle de iluminação",
        "Automação de portões",
        "Controle de ar condicionado",
        "Aplicativo mobile",
        "Integração com assistentes",
        "Cenas personalizadas"
      ]
    }
  ];

  const beneficios = [
    {
      titulo: "Segurança 24/7",
      descricao: "Monitoramento contínuo e proteção ininterrupta",
      icone: "fas fa-clock"
    },
    {
      titulo: "Redução de Custos",
      descricao: "Diminuição de furtos e danos patrimoniais",
      icone: "fas fa-dollar-sign"
    },
    {
      titulo: "Controle Total",
      descricao: "Acesso remoto e gestão centralizada",
      icone: "fas fa-cogs"
    },
    {
      titulo: "Conformidade",
      descricao: "Atende normas de segurança e seguros",
      icone: "fas fa-certificate"
    }
  ];

  const aplicacoes = [
    {
      categoria: "Residencial",
      exemplos: ["Casas", "Apartamentos", "Condomínios", "Chácaras"],
      icone: "fas fa-home"
    },
    {
      categoria: "Comercial",
      exemplos: ["Lojas", "Escritórios", "Shopping Centers", "Hotéis"],
      icone: "fas fa-store"
    },
    {
      categoria: "Industrial",
      exemplos: ["Fábricas", "Depósitos", "Galpões", "Refinarias"],
      icone: "fas fa-industry"
    },
    {
      categoria: "Institucional",
      exemplos: ["Escolas", "Hospitais", "Bancos", "Órgãos Públicos"],
      icone: "fas fa-university"
    }
  ];

  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/manrio_logo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            <i className="fas fa-shield-alt me-3"></i>
            Sistemas de Segurança
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Soluções completas em segurança eletrônica patrimonial para proteger o que é mais importante
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-success fs-6 px-3 py-2">
              <i className="fas fa-check-circle me-2"></i>
              Proteção 24/7
            </span>
            <span className="badge bg-info fs-6 px-3 py-2">
              <i className="fas fa-mobile-alt me-2"></i>
              Controle Remoto
            </span>
          </div>
        </div>
      </div>

      {/* Serviços Principais */}
      <div className="container py-5">
        <h2 className="text-center text-success mb-5">
          <i className="fas fa-cogs me-3"></i>
          Nossas Soluções em Segurança
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicos.map((servico) => (
            <div key={servico.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card border-success">
                <div className="card-body text-center">
                  <i className={`${servico.icone} fa-3x text-${servico.cor} mb-3`}></i>
                  <h4 className="card-title text-success">{servico.titulo}</h4>
                  <p className="card-text mb-4">{servico.descricao}</p>
                  
                  <h6 className="text-secondary mb-3">Recursos Principais:</h6>
                  <ul className="list-unstyled text-start">
                    {servico.recursos.map((recurso, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {recurso}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn btn-outline-success mt-4">
                    <i className="fas fa-info-circle me-2"></i>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefícios */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container">
          <h2 className="text-center text-success mb-5">
            <i className="fas fa-star me-3"></i>
            Por que escolher nossos sistemas?
          </h2>
          
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="col">
                <div className="card bg-dark border-info text-light h-100">
                  <div className="card-body text-center">
                    <i className={`${beneficio.icone} fa-3x text-info mb-3`}></i>
                    <h5 className="card-title text-info">{beneficio.titulo}</h5>
                    <p className="card-text">{beneficio.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aplicações */}
      <div className="container py-5">
        <h2 className="text-center text-success mb-5">
          <i className="fas fa-building me-3"></i>
          Aplicações e Segmentos
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {aplicacoes.map((aplicacao, index) => (
            <div key={index} className="col">
              <div className="card bg-dark border-warning text-light h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${aplicacao.icone} fa-2x text-warning me-3`}></i>
                    <h4 className="card-title text-warning mb-0">{aplicacao.categoria}</h4>
                  </div>
                  <p className="card-text">Exemplos de aplicação:</p>
                  <ul className="list-unstyled">
                    {aplicacao.exemplos.map((exemplo, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="fas fa-arrow-right text-success me-2"></i>
                        {exemplo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Processo de Implementação */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container">
          <h2 className="text-center text-success mb-5">
            <i className="fas fa-tasks me-3"></i>
            Como Implementamos
          </h2>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card bg-dark border-success text-light">
                      <div className="card-body text-center">
                        <div className="badge bg-success fs-4 mb-3">1</div>
                        <h5 className="text-success">Levantamento</h5>
                        <p className="small">Análise das necessidades e características do local</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-dark border-success text-light">
                      <div className="card-body text-center">
                        <div className="badge bg-success fs-4 mb-3">2</div>
                        <h5 className="text-success">Projeto</h5>
                        <p className="small">Desenvolvimento da solução técnica personalizada</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-dark border-success text-light">
                      <div className="card-body text-center">
                        <div className="badge bg-success fs-4 mb-3">3</div>
                        <h5 className="text-success">Instalação</h5>
                        <p className="small">Execução do projeto com equipe especializada</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-dark border-success text-light">
                      <div className="card-body text-center">
                        <div className="badge bg-success fs-4 mb-3">4</div>
                        <h5 className="text-success">Treinamento</h5>
                        <p className="small">Capacitação da equipe para operação do sistema</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="card bg-dark border-success text-light">
          <div className="card-body text-center">
            <h3 className="text-success mb-4">
              <i className="fas fa-shield-alt me-3"></i>
              Proteja o que é mais importante!
            </h3>
            <p className="mb-4">
              Entre em contato conosco para uma consultoria gratuita e descubra como podemos 
              proteger seu patrimônio com as melhores tecnologias do mercado.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success btn-lg px-5">
                <i className="fas fa-phone me-2"></i>
                Solicitar Orçamento
              </button>
              <button className="btn btn-outline-success btn-lg px-5">
                <i className="fas fa-calendar me-2"></i>
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
