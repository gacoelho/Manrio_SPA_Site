export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Casa da Moeda do Brasil",
      descricao: "Unidade: Depósito de Inflamáveis - 1900 m²",
      local: "Rua René Bittencourt nº 371, Santa Cruz.",
      data: "Dez/2015",
      contratante: "Conaut Controles Automáticos",
      categoria: "Incêndio",
      imagem: "/projeto1.jpeg",
      servicos: [
        "Saídas de Emergência",
        "Sinalização de Segurança",
        "Iluminação de Emergência",
        "Sistema de Alarme de Incêndio",
        "Hidrantes e acessórios",
        "Sprinklers",
        "Sistema de Espuma (LGE)"
      ]
    },
    {
      id: 2,
      titulo: "Linde Gases Ltda",
      descricao: "Unidade: Fábrica de gases - 11.000 m²",
      local: "Avenida João XXIII - Santa Cruz",
      data: "Dez/2014",
      contratante: "Linde Gases",
      categoria: "Incêndio",
      imagem: "/projeto2.jpeg",
      servicos: [
        "Sistema de detecção e alarme de incêndio",
        "Levantamento de campo",
        "Projeto básico e executivo",
        "Planilha orçamentária",
        "Memorial descritivo",
        "Especificação técnica",
        "Lista de equipamentos e materiais"
      ]
    },
    {
      id: 3,
      titulo: "Banco do Brasil SA",
      descricao: "Unidade: CARJ - 105.000 m²",
      local: "Rua Barão De São Francisco 177 Rio de Janeiro, RJ",
      data: "JUN/2011",
      contratante: "Banco do Brasil",
      categoria: "Incêndio",
      imagem: "/projeto3.jpeg",
      servicos: [
        "Sistema de detecção e alarme de incêndio",
        "Combate por FM-200",
        "Levantamento de campo",
        "Projeto básico e executivo",
        "Planilha orçamentária",
        "Memorial descritivo",
        "Especificação técnica",
        "Lista de equipamentos e materiais"
      ]
    },
    {
      id: 4,
      titulo: "YORUZU - Automotiva do Brasil Ltda",
      descricao: "Unidade: Fábrica Resende - 55.650 m²",
      local: "Avenida NISSAN, 1500c, Resende, RJ",
      data: "OUT/2018",
      contratante: "Yoruzu Automotiva do Brasil Ltda",
      categoria: "Incêndio",
      imagem: "/projeto4.jpeg",
      servicos: [
        "Portas corta fogo",
        "Sistema de Espuma (LGE)",
        "Extintores portáteis",
        "Levantamento de campo",
        "Projeto básico e executivo",
        "Memorial descritivo",
        "Tramitação CBMERJ",
        "Laudo de exigência"
      ]
    },
    {
      id: 5,
      titulo: "PRO-AMBIENTAL Tecnologia Ltda",
      descricao: "Unidade: Gapão de resíduos - 1300 m²",
      local: "Itaquira Carapebus - Rio de Janeiro, RJ",
      data: "DEZ/2015",
      contratante: "Pro-Ambiental tecnologia Ltda",
      categoria: "Incêndio",
      imagem: "/projeto5.jpeg",
      servicos: [
        "Saídas de Emergências",
        "Sinalização de Segurança",
        "Iluminação de Emergência",
        "Sistema de Detecção e alarme de incêndio",
        "Sistema de hidrantes e mangotinhos",
        "Levantamento de campo",
        "Projeto básico e executivo",
        "Memorial descritivo",
        "Tramitação CBMERJ",
        "Laudo de exigência",
        "As-built"
      ]
    },
    {
      id: 6,
      titulo: "Fundação Biblioteca Nacional",
      descricao: "Unidade: ED. SEDE - 19.000 m²",
      local: "Avenida Rio Branco 219 - Rio de Janeiro, RJ",
      data: "OUT/2018",
      contratante: "Fundação Biblioteca Nacional",
      categoria: "Incêndio",
      imagem: "/projeto6.jpeg",
      servicos: [
        "Preparação do termo de referência",
        "Levantamento de campo",
        "Verificação da necessidade de substituição de equipamentos",
        "Ajuste do sistema para sanar falhas de software ou de equipamentos",
        "Teste e diagnóstico dos equipamentos",
        "Reparo corretivo nos sistemas de aspiração",
        "Teste funcional das sirenes",
        "Emissão de relatório final detalhado",
        "Emissão de ART responsável técnico"
      ]
    },
    {
      id: 7,
      titulo: "Operadora Oi",
      descricao: "Unidade: CASAS DE FORÇA NAS REGIÕES SE e NE",
      local: "Rio de Janeiro, Petrópolis, Duque de Caxias, Nova iguaçu, Fortaleza, Aracaju, Recife, Maceió, Teresina, São Luiz, Natal",
      data: "2015",
      contratante: "Inova Telecom - Oi Telecomunicações",
      categoria: "Energia",
      imagem: "/projeto7.jpeg",
      servicos: [
        "Site survey",
        "Levantamento de dados",
        "Dimensionamento de infraestrutura",
        "Dimensionamento de Fontes",
        "Dimensionamento de Baterias",
        "Cálculos",
        "Projeto elétrico em CAD"
      ]
    },
    {
      id: 8,
      titulo: "Nesic",
      descricao: "Unidade: Sala POP - 17 m²",
      local: "Av. Rio Branco, nº 1, sala 2002 - Rio de Janeiro, RJ",
      data: "MAI/2016",
      contratante: "NESIC do Brasil S/A",
      categoria: "Energia",
      imagem: "/projeto8.jpeg",
      servicos: [
        "Sistema de energia AC",
        "Sistema de energia CC",
        "Sistema de ar condicionado",
        "Sistema de Detecção e alarme de incêndio",
        "Reparos Civis",
        "Start up UPS",
        "Detecção de Incêndio",
        "Combate por FM-200",
        "Instalação de Split 5TRs"
      ]
    },
    {
      id: 9,
      titulo: "Globenet",
      descricao: "Unidade: CLS RJ e CLS FORTALEZA",
      local: "Vargem Grande-RJ, Centro-RJ, Praia do Futuro-CE",
      data: "2011 e 2016",
      contratante: "GLOBENET",
      categoria: "Telecom",
      imagem: "/projeto9.jpeg",
      servicos: [
        "Conexão de clientes",
        "Passagem de fibra óptica",
        "Cross fibra óptica",
        "Fornecimento de infraestrutura",
        "Manutenção de CFTV",
        "Instalação de cabos sensores de vazamento de líquidos"
      ]
    }
  ];

  const categorias = ["Todas", "Incêndio", "Energia", "Telecom", "Segurança"];

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
            Projetos Realizados
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Conheça alguns dos nossos principais projetos e realizações
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="container py-4">
        <div className="card bg-dark border-secondary text-light">
          <div className="card-body">
            <h3 className="text-secondary mb-3">
              <i className="fas fa-filter me-2"></i>
              Filtrar por Categoria
            </h3>
            <div className="d-flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <button 
                  key={categoria}
                  className="btn btn-outline-success"
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Projetos */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card">
                <img 
                  src={projeto.imagem} 
                  className="card-img-top" 
                  alt={projeto.titulo}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className={`badge ${
                      projeto.categoria === 'Incêndio' ? 'bg-danger' :
                      projeto.categoria === 'Energia' ? 'bg-warning' :
                      projeto.categoria === 'Telecom' ? 'bg-info' :
                      'bg-success'
                    } me-2`}>
                      {projeto.categoria}
                    </span>
                  </div>
                  
                  <h5 className="card-title text-success">{projeto.titulo}</h5>
                  
                  <div className="mb-3">
                    <p className="card-text small mb-1">
                      <strong>Unidade:</strong> {projeto.descricao}
                    </p>
                    <p className="card-text small mb-1">
                      <strong>Local:</strong> {projeto.local}
                    </p>
                    <p className="card-text small mb-1">
                      <strong>Data:</strong> {projeto.data}
                    </p>
                    <p className="card-text small mb-2">
                      <strong>Contratante:</strong> {projeto.contratante}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h6 className="text-secondary mb-2">Serviços Realizados:</h6>
                    <ul className="small">
                      {projeto.servicos.slice(0, 4).map((servico, index) => (
                        <li key={index}>{servico}</li>
                      ))}
                      {projeto.servicos.length > 4 && (
                        <li className="text-muted">
                          <em>+{projeto.servicos.length - 4} outros serviços</em>
                        </li>
                      )}
                    </ul>
                  </div>

                  <button className="btn btn-outline-success mt-auto">
                    <i className="fas fa-eye me-2"></i>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark py-5 border-top border-secondary">
        <div className="container text-center">
          <h3 className="text-success mb-4">
            <i className="fas fa-rocket me-3"></i>
            Próximo Projeto Pode Ser Seu!
          </h3>
          <p className="mb-4">
            Entre em contato conosco para discutir suas necessidades e solicitar um orçamento
          </p>
          <button className="btn btn-success btn-lg px-5">
            <i className="fas fa-phone me-2"></i>
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  );
}
