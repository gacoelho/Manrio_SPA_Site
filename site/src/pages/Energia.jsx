import { useNavigate } from 'react-router-dom'

export default function Energia() {
  const navigate = useNavigate()
  const servicos = [
    {
      id: 1,
      titulo: "Energia Solar",
      descricao: "Sistemas fotovoltaicos para geração de energia limpa e renovável",
      icone: "fas fa-solar-panel",
      cor: "warning",
      recursos: [
        "Painéis solares de alta eficiência",
        "Inversores de última geração",
        "Sistemas on-grid e off-grid",
        "Monitoramento remoto",
        "Manutenção preventiva",
        "Garantia estendida"
      ]
    },
    {
      id: 2,
      titulo: "Instalações Elétricas",
      descricao: "Projetos elétricos residenciais, comerciais e industriais",
      icone: "fas fa-bolt",
      cor: "warning",
      recursos: [
        "Quadros de distribuição",
        "Instalações de iluminação",
        "Tomadas e interruptores",
        "Aterramento elétrico",
        "Para-raios",
        "SPDA (Sistema de Proteção)"
      ]
    },
    {
      id: 3,
      titulo: "Subestações",
      descricao: "Projetos de subestações de média e alta tensão",
      icone: "fas fa-industry",
      cor: "danger",
      recursos: [
        "Transformadores de potência",
        "Quadros de comando",
        "Sistemas de proteção",
        "Automação e controle",
        "Manutenção preventiva",
        "Laudos técnicos"
      ]
    },
    {
      id: 4,
      titulo: "Grupos Geradores",
      descricao: "Sistemas de geração de energia de emergência",
      icone: "fas fa-power-off",
      cor: "info",
      recursos: [
        "Geradores diesel",
        "Painéis de transferência",
        "Sistemas de sincronização",
        "Controle automático",
        "Manutenção programada",
        "Suporte técnico 24/7"
      ]
    },
    {
      id: 5,
      titulo: "Eficiência Energética",
      descricao: "Auditorias e projetos para redução de consumo",
      icone: "fas fa-leaf",
      cor: "success",
      recursos: [
        "Auditoria energética",
        "Substituição de equipamentos",
        "Automação de sistemas",
        "Monitoramento de consumo",
        "Relatórios de eficiência",
        "Consultoria especializada"
      ]
    },
    {
      id: 6,
      titulo: "Iluminação LED",
      descricao: "Sistemas de iluminação eficiente e sustentável",
      icone: "fas fa-lightbulb",
      cor: "info",
      recursos: [
        "Lâmpadas LED de alta eficiência",
        "Sistemas de controle",
        "Iluminação inteligente",
        "Projetos de iluminação",
        "Manutenção preventiva",
        "Economia de energia"
      ]
    }
  ];

  const beneficiosEnergiaSolar = [
    {
      titulo: "Economia na Conta",
      descricao: "Redução de até 95% na conta de energia elétrica",
      icone: "fas fa-dollar-sign",
      cor: "success"
    },
    {
      titulo: "Energia Limpa",
      descricao: "Zero emissão de CO2 e impacto ambiental positivo",
      icone: "fas fa-leaf",
      cor: "success"
    },
    {
      titulo: "Valorização Imobiliária",
      descricao: "Aumento do valor da propriedade com sistema solar",
      icone: "fas fa-home",
      cor: "info"
    },
    {
      titulo: "Independência Energética",
      descricao: "Menor dependência da concessionária de energia",
      icone: "fas fa-shield-alt",
      cor: "warning"
    }
  ];

  const aplicacoes = [
    {
      categoria: "Residencial",
      exemplos: ["Casas", "Apartamentos", "Condomínios", "Chácaras"],
      icone: "fas fa-home",
      potencia: "3kW - 10kW"
    },
    {
      categoria: "Comercial",
      exemplos: ["Lojas", "Escritórios", "Shopping Centers", "Hotéis"],
      icone: "fas fa-store",
      potencia: "10kW - 100kW"
    },
    {
      categoria: "Industrial",
      exemplos: ["Fábricas", "Depósitos", "Galpões", "Refinarias"],
      icone: "fas fa-industry",
      potencia: "100kW - 1MW+"
    },
    {
      categoria: "Rural",
      exemplos: ["Fazendas", "Sítios", "Propriedades rurais", "Agroindústrias"],
      icone: "fas fa-tractor",
      potencia: "5kW - 50kW"
    }
  ];

  const etapasProjeto = [
    {
      etapa: 1,
      titulo: "Levantamento Técnico",
      descricao: "Análise do local, consumo e características da instalação",
      icone: "fas fa-clipboard-list"
    },
    {
      etapa: 2,
      titulo: "Projeto Executivo",
      descricao: "Desenvolvimento do projeto técnico detalhado",
      icone: "fas fa-drafting-compass"
    },
    {
      etapa: 3,
      titulo: "Aprovação ANEEL",
      descricao: "Tramitação junto à concessionária de energia",
      icone: "fas fa-stamp"
    },
    {
      etapa: 4,
      titulo: "Instalação",
      descricao: "Execução do projeto com equipe especializada",
      icone: "fas fa-tools"
    },
    {
      etapa: 5,
      titulo: "Homologação",
      descricao: "Testes e aprovação final do sistema",
      icone: "fas fa-check-circle"
    },
    {
      etapa: 6,
      titulo: "Monitoramento",
      descricao: "Acompanhamento do desempenho e manutenção",
      icone: "fas fa-chart-line"
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
          <h1 className="display-4 text-warning fw-bold mb-4">
            <i className="fas fa-bolt me-3"></i>
            Sistemas de Energia
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Soluções sustentáveis em energia solar e sistemas elétricos para um futuro mais limpo e eficiente
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <i className="fas fa-solar-panel me-2"></i>
              Energia Solar
            </span>
            <span className="badge bg-info fs-6 px-3 py-2">
              <i className="fas fa-leaf me-2"></i>
              Sustentável
            </span>
          </div>
        </div>
      </div>

      {/* Serviços Principais */}
      <div className="container py-5">
        <h2 className="text-center text-warning mb-5">
          <i className="fas fa-cogs me-3"></i>
          Nossas Soluções em Energia
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicos.map((servico) => (
            <div key={servico.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card border-warning">
                <div className="card-body text-center">
                  <i className={`${servico.icone} fa-3x text-${servico.cor} mb-3`}></i>
                  <h4 className="card-title text-warning">{servico.titulo}</h4>
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
                  
                  <button className="btn btn-outline-warning mt-4" onClick={() => navigate('/contato')}>
                    <i className="fas fa-info-circle me-2"></i>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefícios da Energia Solar */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container">
          <h2 className="text-center text-warning mb-5">
            <i className="fas fa-solar-panel me-3"></i>
            Por que investir em Energia Solar?
          </h2>
          
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {beneficiosEnergiaSolar.map((beneficio, index) => (
              <div key={index} className="col">
                <div className="card bg-dark border-success text-light h-100">
                  <div className="card-body text-center">
                    <i className={`${beneficio.icone} fa-3x text-${beneficio.cor} mb-3`}></i>
                    <h5 className="card-title text-success">{beneficio.titulo}</h5>
                    <p className="card-text">{beneficio.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aplicações por Segmento */}
      <div className="container py-5">
        <h2 className="text-center text-warning mb-5">
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
                      <span className="badge bg-warning text-dark">{aplicacao.potencia}</span>
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
          <h2 className="text-center text-warning mb-5">
            <i className="fas fa-tasks me-3"></i>
            Como Implementamos seu Projeto
          </h2>
          
          <div className="row">
            <div className="col-12">
              <div className="row g-4">
                {etapasProjeto.map((etapa) => (
                  <div key={etapa.etapa} className="col-md-6 col-lg-4">
                    <div className="card bg-dark border-warning text-light h-100">
                      <div className="card-body text-center">
                        <div className="badge bg-warning text-dark fs-4 mb-3">{etapa.etapa}</div>
                        <i className={`${etapa.icone} fa-2x text-warning mb-3`}></i>
                        <h5 className="card-title text-warning">{etapa.titulo}</h5>
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
            <div className="card bg-dark border-success text-light">
              <div className="card-body">
                <i className="fas fa-solar-panel fa-3x text-warning mb-3"></i>
                <h3 className="text-success">500+</h3>
                <p className="mb-0">Sistemas Instalados</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-info text-light">
              <div className="card-body">
                <i className="fas fa-bolt fa-3x text-warning mb-3"></i>
                <h3 className="text-info">2MW+</h3>
                <p className="mb-0">Potência Total</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-warning text-light">
              <div className="card-body">
                <i className="fas fa-leaf fa-3x text-success mb-3"></i>
                <h3 className="text-warning">1500+</h3>
                <p className="mb-0">Ton CO2 Evitadas</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card bg-dark border-danger text-light">
              <div className="card-body">
                <i className="fas fa-users fa-3x text-info mb-3"></i>
                <h3 className="text-danger">98%</h3>
                <p className="mb-0">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="card bg-dark border-warning text-light">
          <div className="card-body text-center">
            <h3 className="text-warning mb-4">
              <i className="fas fa-solar-panel me-3"></i>
              Invista no futuro da energia!
            </h3>
            <p className="mb-4">
              Entre em contato conosco para uma consultoria gratuita e descubra como podemos 
              transformar sua conta de energia com soluções sustentáveis e econômicas.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-warning btn-lg px-5 text-dark" onClick={() => navigate('/contato')}>
                <i className="fas fa-calculator me-2"></i>
                Simular Economia
              </button>
              <button className="btn btn-outline-warning btn-lg px-5" onClick={() => navigate('/contato')}>
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
