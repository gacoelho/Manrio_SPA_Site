export default function Incendio() {
  const servicos = [
    {
      id: 1,
      titulo: "Sistema de Detecção",
      descricao: "Detecção automática de incêndio com sensores inteligentes",
      icone: "fas fa-fire-detector",
      cor: "danger",
      recursos: [
        "Sensores de fumaça ópticos",
        "Sensores de temperatura",
        "Sensores de chama",
        "Painel de controle central",
        "Comunicação via rádio",
        "Integração com CFTV"
      ]
    },
    {
      id: 2,
      titulo: "Sistema de Alarme",
      descricao: "Sirenes e sinalizadores visuais para evacuação",
      icone: "fas fa-bell",
      cor: "warning",
      recursos: [
        "Sirenes eletrônicas",
        "Sinalizadores visuais LED",
        "Painéis de evacuação",
        "Comando manual",
        "Sincronização de áudio",
        "Teste automático"
      ]
    },
    {
      id: 3,
      titulo: "Sistema de Sprinklers",
      descricao: "Extinção automática por água pressurizada",
      icone: "fas fa-tint",
      cor: "info",
      recursos: [
        "Bicos automáticos",
        "Tubulação pressurizada",
        "Válvulas de controle",
        "Bomba de incêndio",
        "Reservatório de água",
        "Teste de vazão"
      ]
    },
    {
      id: 4,
      titulo: "Sistema de Hidrantes",
      descricao: "Rede de hidrantes para combate manual",
      icone: "fas fa-fire-hydrant",
      cor: "danger",
      recursos: [
        "Hidrantes de coluna",
        "Mangueiras de incêndio",
        "Esguichos reguláveis",
        "Rede de distribuição",
        "Válvulas de controle",
        "Sinalização adequada"
      ]
    },
    {
      id: 5,
      titulo: "Sistema de Gás",
      descricao: "Extinção por agentes limpos (FM-200, CO2)",
      icone: "fas fa-wind",
      cor: "secondary",
      recursos: [
        "Cilindros pressurizados",
        "Bicos de descarga",
        "Painel de controle",
        "Detecção dupla",
        "Evacuação automática",
        "Reset manual"
      ]
    },
    {
      id: 6,
      titulo: "Sistema de Espuma",
      descricao: "Extinção por espuma para líquidos inflamáveis",
      icone: "fas fa-bubbles",
      cor: "warning",
      recursos: [
        "Gerador de espuma",
        "Bicos de aplicação",
        "Tanque de concentrado",
        "Sistema de mistura",
        "Controle automático",
        "Limpeza automática"
      ]
    }
  ];

  const normas = [
    {
      codigo: "NBR 9441",
      titulo: "Sistema de detecção e alarme de incêndio",
      descricao: "Especifica requisitos para sistemas de detecção automática"
    },
    {
      codigo: "NBR 10897",
      titulo: "Sistema de chuveiros automáticos",
      descricao: "Define critérios para projeto e instalação de sprinklers"
    },
    {
      codigo: "NBR 13714",
      titulo: "Sistema de hidrantes para combate a incêndio",
      descricao: "Estabelece requisitos para rede de hidrantes"
    },
    {
      codigo: "NBR 11742",
      titulo: "Sistema de iluminação de emergência",
      descricao: "Especifica iluminação para evacuação em emergências"
    }
  ];

  const aplicacoes = [
    {
      categoria: "Industrial",
      exemplos: ["Fábricas", "Depósitos", "Refinarias", "Usinas"],
      icone: "fas fa-industry",
      risco: "Alto"
    },
    {
      categoria: "Comercial",
      exemplos: ["Shopping Centers", "Hotéis", "Hospitais", "Escritórios"],
      icone: "fas fa-store",
      risco: "Médio"
    },
    {
      categoria: "Residencial",
      exemplos: ["Condomínios", "Edifícios", "Residências", "Apartamentos"],
      icone: "fas fa-home",
      risco: "Baixo"
    },
    {
      categoria: "Especial",
      exemplos: ["Data Centers", "Museus", "Bibliotecas", "Arquivos"],
      icone: "fas fa-star",
      risco: "Crítico"
    }
  ];

  const etapasProjeto = [
    {
      etapa: 1,
      titulo: "Levantamento de Campo",
      descricao: "Análise detalhada da estrutura e riscos",
      icone: "fas fa-clipboard-list"
    },
    {
      etapa: 2,
      titulo: "Projeto Básico",
      descricao: "Definição da solução técnica e equipamentos",
      icone: "fas fa-drafting-compass"
    },
    {
      etapa: 3,
      titulo: "Projeto Executivo",
      descricao: "Detalhamento completo para instalação",
      icone: "fas fa-cogs"
    },
    {
      etapa: 4,
      titulo: "Aprovação CBMERJ",
      descricao: "Tramitação junto ao Corpo de Bombeiros",
      icone: "fas fa-stamp"
    },
    {
      etapa: 5,
      titulo: "Instalação",
      descricao: "Execução com equipe certificada",
      icone: "fas fa-tools"
    },
    {
      etapa: 6,
      titulo: "Testes e Homologação",
      descricao: "Verificação e aprovação final",
      icone: "fas fa-check-circle"
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
          <h1 className="display-4 text-danger fw-bold mb-4">
            <i className="fas fa-fire-extinguisher me-3"></i>
            Proteção contra Incêndio
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Sistemas completos de detecção, alarme e combate a incêndio para proteger vidas e patrimônios
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-danger fs-6 px-3 py-2">
              <i className="fas fa-shield-alt me-2"></i>
              Proteção Total
            </span>
            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <i className="fas fa-certificate me-2"></i>
              CBMERJ Aprovado
            </span>
          </div>
        </div>
      </div>

      {/* Serviços Principais */}
      <div className="container py-5">
        <h2 className="text-center text-danger mb-5">
          <i className="fas fa-cogs me-3"></i>
          Nossas Soluções em Proteção contra Incêndio
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicos.map((servico) => (
            <div key={servico.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card border-danger">
                <div className="card-body text-center">
                  <i className={`${servico.icone} fa-3x text-${servico.cor} mb-3`}></i>
                  <h4 className="card-title text-danger">{servico.titulo}</h4>
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
                  
                  <button className="btn btn-outline-danger mt-4">
                    <i className="fas fa-info-circle me-2"></i>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Normas e Certificações */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container">
          <h2 className="text-center text-warning mb-5">
            <i className="fas fa-certificate me-3"></i>
            Normas e Certificações
          </h2>
          
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {normas.map((norma, index) => (
              <div key={index} className="col">
                <div className="card bg-dark border-warning text-light h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-book fa-2x text-warning me-3"></i>
                      <div>
                        <h5 className="card-title text-warning mb-1">{norma.codigo}</h5>
                        <h6 className="text-light">{norma.titulo}</h6>
                      </div>
                    </div>
                    <p className="card-text">{norma.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aplicações por Segmento */}
      <div className="container py-5">
        <h2 className="text-center text-danger mb-5">
          <i className="fas fa-building me-3"></i>
          Aplicações por Segmento
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {aplicacoes.map((aplicacao, index) => (
            <div key={index} className="col">
              <div className="card bg-dark border-info text-light h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${aplicacao.icone} fa-2x text-info me-3`}></i>
                    <div>
                      <h4 className="card-title text-info mb-1">{aplicacao.categoria}</h4>
                      <span className={`badge ${
                        aplicacao.risco === 'Alto' ? 'bg-danger' :
                        aplicacao.risco === 'Médio' ? 'bg-warning' :
                        aplicacao.risco === 'Baixo' ? 'bg-success' :
                        'bg-danger'
                      }`}>
                        Risco: {aplicacao.risco}
                      </span>
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
          <h2 className="text-center text-danger mb-5">
            <i className="fas fa-tasks me-3"></i>
            Como Implementamos seu Projeto
          </h2>
          
          <div className="row">
            <div className="col-12">
              <div className="row g-4">
                {etapasProjeto.map((etapa) => (
                  <div key={etapa.etapa} className="col-md-6 col-lg-4">
                    <div className="card bg-dark border-danger text-light h-100">
                      <div className="card-body text-center">
                        <div className="badge bg-danger fs-4 mb-3">{etapa.etapa}</div>
                        <i className={`${etapa.icone} fa-2x text-danger mb-3`}></i>
                        <h5 className="card-title text-danger">{etapa.titulo}</h5>
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
            <div className="card bg-dark border-danger text-light">
              <div className="card-body">
                <i className="fas fa-fire-extinguisher fa-3x text-danger mb-3"></i>
                <h3 className="text-danger">200+</h3>
                <p className="mb-0">Sistemas Instalados</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-warning text-light">
              <div className="card-body">
                <i className="fas fa-certificate fa-3x text-warning mb-3"></i>
                <h3 className="text-warning">100%</h3>
                <p className="mb-0">CBMERJ Aprovados</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-success text-light">
              <div className="card-body">
                <i className="fas fa-users fa-3x text-success mb-3"></i>
                <h3 className="text-success">15+</h3>
                <p className="mb-0">Anos de Experiência</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-info text-light">
              <div className="card-body">
                <i className="fas fa-tools fa-3x text-info mb-3"></i>
                <h3 className="text-info">24/7</h3>
                <p className="mb-0">Suporte Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="card bg-dark border-danger text-light">
          <div className="card-body text-center">
            <h3 className="text-danger mb-4">
              <i className="fas fa-fire-extinguisher me-3"></i>
              Proteja vidas e patrimônios!
            </h3>
            <p className="mb-4">
              Entre em contato conosco para uma consultoria gratuita e descubra como podemos 
              proteger sua empresa com sistemas de proteção contra incêndio de última geração.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-danger btn-lg px-5">
                <i className="fas fa-phone me-2"></i>
                Solicitar Orçamento
              </button>
              <button className="btn btn-outline-danger btn-lg px-5">
                <i className="fas fa-calendar me-2"></i>
                Agendar Visita Técnica
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
