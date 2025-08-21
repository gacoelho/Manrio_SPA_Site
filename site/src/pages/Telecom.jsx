import { useNavigate } from 'react-router-dom'

export default function Telecom() {
  const navigate = useNavigate()
  const servicos = [
    {
      id: 1,
      titulo: "Redes de Fibra Óptica",
      descricao: "Projetos e instalação de redes de alta velocidade",
      icone: "fas fa-network-wired",
      cor: "info",
      recursos: [
        "Cabeamento estruturado",
        "Splicing e conectorização",
        "Testes de OTDR",
        "Certificação de links",
        "Documentação técnica",
        "Manutenção preventiva"
      ]
    },
    {
      id: 2,
      titulo: "Sistemas CFTV",
      descricao: "Circuito fechado de televisão com tecnologia IP",
      icone: "fas fa-video",
      cor: "success",
      recursos: [
        "Câmeras IP de alta resolução",
        "Gravadores NVR",
        "Monitoramento remoto",
        "Analytics inteligente",
        "Armazenamento em nuvem",
        "Integração com sistemas"
      ]
    },
    {
      id: 3,
      titulo: "Telefonia IP",
      descricao: "Sistemas de telefonia baseados em protocolo IP",
      icone: "fas fa-phone",
      cor: "primary",
      recursos: [
        "PABX IP",
        "Softphones",
        "Videoconferência",
        "Unificação de mensagens",
        "Relatórios de chamadas",
        "Integração com CRM"
      ]
    },
    {
      id: 4,
      titulo: "Redes Wi-Fi",
      descricao: "Infraestrutura wireless de alta performance",
      icone: "fas fa-wifi",
      cor: "warning",
      recursos: [
        "Access Points enterprise",
        "Controladores wireless",
        "Segurança WPA3",
        "QoS e bandwidth",
        "Heat mapping",
        "Monitoramento centralizado"
      ]
    },
    {
      id: 5,
      titulo: "Data Centers",
      descricao: "Infraestrutura para centros de processamento de dados",
      icone: "fas fa-server",
      cor: "secondary",
      recursos: [
        "Cabeamento estruturado",
        "Sistemas de refrigeração",
        "UPS e geradores",
        "Sistemas de segurança",
        "Monitoramento ambiental",
        "Redundância de energia"
      ]
    },
    {
      id: 6,
      titulo: "Automação Industrial",
      descricao: "Sistemas de comunicação para automação",
      icone: "fas fa-industry",
      cor: "danger",
      recursos: [
        "Protocolos industriais",
        "Gateways de comunicação",
        "Redes fieldbus",
        "SCADA systems",
        "IoT industrial",
        "Manutenção preditiva"
      ]
    }
  ];

  const tecnologias = [
    {
      nome: "Fibra Óptica",
      descricao: "Transmissão de dados em alta velocidade",
      icone: "fas fa-lightbulb",
      vantagens: ["Alta velocidade", "Baixa latência", "Imunidade a interferências"]
    },
    {
      nome: "5G",
      descricao: "Nova geração de redes móveis",
      icone: "fas fa-signal",
      vantagens: ["Ultra velocidade", "Baixa latência", "IoT massivo"]
    },
    {
      nome: "IoT",
      descricao: "Internet das Coisas para automação",
      icone: "fas fa-microchip",
      vantagens: ["Automação", "Monitoramento", "Eficiência"]
    },
    {
      nome: "Cloud Computing",
      descricao: "Computação em nuvem para escalabilidade",
      icone: "fas fa-cloud",
      vantagens: ["Escalabilidade", "Flexibilidade", "Custo-benefício"]
    }
  ];

  const aplicacoes = [
    {
      categoria: "Empresarial",
      exemplos: ["Escritórios", "Shopping Centers", "Hotéis", "Hospitais"],
      icone: "fas fa-building",
      foco: "Produtividade"
    },
    {
      categoria: "Industrial",
      exemplos: ["Fábricas", "Refinarias", "Usinas", "Mineração"],
      icone: "fas fa-industry",
      foco: "Automação"
    },
    {
      categoria: "Educacional",
      exemplos: ["Escolas", "Universidades", "Centros de Treinamento"],
      icone: "fas fa-graduation-cap",
      foco: "Conectividade"
    },
    {
      categoria: "Governamental",
      exemplos: ["Prefeituras", "Órgãos Públicos", "Forças Armadas"],
      icone: "fas fa-landmark",
      foco: "Segurança"
    }
  ];

  const etapasProjeto = [
    {
      etapa: 1,
      titulo: "Análise de Requisitos",
      descricao: "Levantamento das necessidades técnicas e de negócio",
      icone: "fas fa-clipboard-list"
    },
    {
      etapa: 2,
      titulo: "Projeto de Rede",
      descricao: "Desenvolvimento da arquitetura de rede",
      icone: "fas fa-project-diagram"
    },
    {
      etapa: 3,
      titulo: "Especificação Técnica",
      descricao: "Definição de equipamentos e materiais",
      icone: "fas fa-cogs"
    },
    {
      etapa: 4,
      titulo: "Instalação",
      descricao: "Execução do projeto com equipe especializada",
      icone: "fas fa-tools"
    },
    {
      etapa: 5,
      titulo: "Configuração",
      descricao: "Setup e configuração dos sistemas",
      icone: "fas fa-cog"
    },
    {
      etapa: 6,
      titulo: "Testes e Entrega",
      descricao: "Validação e entrega do sistema",
      icone: "fas fa-check-circle"
    }
  ];

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
          <h1 className="display-4 text-info fw-bold mb-4">
            <i className="fas fa-network-wired me-3"></i>
            Sistemas de Telecomunicações
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Soluções integradas em telecomunicações para conectar e otimizar sua infraestrutura digital
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-info fs-6 px-3 py-2">
              <i className="fas fa-bolt me-2"></i>
              Alta Velocidade
            </span>
            <span className="badge bg-success fs-6 px-3 py-2">
              <i className="fas fa-shield-alt me-2"></i>
              Segurança Total
            </span>
          </div>
        </div>
      </div>

      {/* Serviços Principais */}
      <div className="container py-5">
        <h2 className="text-center text-info mb-5">
          <i className="fas fa-cogs me-3"></i>
          Nossas Soluções em Telecomunicações
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicos.map((servico) => (
            <div key={servico.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card border-info">
                <div className="card-body text-center">
                  <i className={`${servico.icone} fa-3x text-${servico.cor} mb-3`}></i>
                  <h4 className="card-title text-info">{servico.titulo}</h4>
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
                  
                  <button className="btn btn-outline-info mt-4" onClick={() => navigate('/contato')}>
                    <i className="fas fa-info-circle me-2"></i>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologias */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container">
          <h2 className="text-center text-info mb-5">
            <i className="fas fa-microchip me-3"></i>
            Tecnologias de Ponta
          </h2>
          
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {tecnologias.map((tecnologia, index) => (
              <div key={index} className="col">
                <div className="card bg-dark border-success text-light h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className={`${tecnologia.icone} fa-2x text-success me-3`}></i>
                      <div>
                        <h5 className="card-title text-success mb-1">{tecnologia.nome}</h5>
                        <p className="card-text mb-2">{tecnologia.descricao}</p>
                      </div>
                    </div>
                    <h6 className="text-secondary mb-2">Vantagens:</h6>
                    <ul className="list-unstyled">
                      {tecnologia.vantagens.map((vantagem, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="fas fa-arrow-right text-success me-2"></i>
                          {vantagem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aplicações por Segmento */}
      <div className="container py-5">
        <h2 className="text-center text-info mb-5">
          <i className="fas fa-building me-3"></i>
          Aplicações por Segmento
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {aplicacoes.map((aplicacao, index) => (
            <div key={index} className="col">
              <div className="card bg-dark border-warning text-light h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${aplicacao.icone} fa-2x text-warning me-3`}></i>
                    <div>
                      <h4 className="card-title text-warning mb-1">{aplicacao.categoria}</h4>
                      <span className="badge bg-info">{aplicacao.foco}</span>
                    </div>
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
          <h2 className="text-center text-info mb-5">
            <i className="fas fa-tasks me-3"></i>
            Como Implementamos seu Projeto
          </h2>
          
          <div className="row">
            <div className="col-12">
              <div className="row g-4">
                {etapasProjeto.map((etapa) => (
                  <div key={etapa.etapa} className="col-md-6 col-lg-4">
                    <div className="card bg-dark border-info text-light h-100">
                      <div className="card-body text-center">
                        <div className="badge bg-info text-dark fs-4 mb-3">{etapa.etapa}</div>
                        <i className={`${etapa.icone} fa-2x text-info mb-3`}></i>
                        <h5 className="card-title text-info">{etapa.titulo}</h5>
                        <p className="card-text small">{etapa.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas e Números */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-info text-light">
              <div className="card-body">
                <i className="fas fa-network-wired fa-3x text-info mb-3"></i>
                <h3 className="text-info">300+</h3>
                <p className="mb-0">Redes Instaladas</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-success text-light">
              <div className="card-body">
                <i className="fas fa-bolt fa-3x text-success mb-3"></i>
                <h3 className="text-success">10Gbps+</h3>
                <p className="mb-0">Velocidade Máxima</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-warning text-light">
              <div className="card-body">
                <i className="fas fa-users fa-3x text-warning mb-3"></i>
                <h3 className="text-warning">20+</h3>
                <p className="mb-0">Anos de Experiência</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-danger text-light">
              <div className="card-body">
                <i className="fas fa-clock fa-3x text-danger mb-3"></i>
                <h3 className="text-danger">99.9%</h3>
                <p className="mb-0">Uptime Garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="card bg-dark border-info text-light">
          <div className="card-body text-center">
            <h3 className="text-info mb-4">
              <i className="fas fa-network-wired me-3"></i>
              Conecte-se ao futuro!
            </h3>
            <p className="mb-4">
              Entre em contato conosco para uma consultoria gratuita e descubra como podemos 
              transformar sua infraestrutura de telecomunicações com as melhores tecnologias do mercado.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-info btn-lg px-5 text-dark" onClick={() => navigate('/contato')}>
                <i className="fas fa-calculator me-2"></i>
                Simular Projeto
              </button>
              <button className="btn btn-outline-info btn-lg px-5" onClick={() => navigate('/contato')}>
                <i className="fas fa-phone me-2"></i>
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
