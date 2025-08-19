import { useState, useCallback, useMemo } from 'react'
import jsPDF from 'jspdf'

export default function Projetos() {
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')
  const [projetoSelecionado, setProjetoSelecionado] = useState(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [gerandoPDF, setGerandoPDF] = useState(false)

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
      destaque: true,
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
      destaque: false,
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
      descricao: "Unidade: Agência Central - 2.500 m²",
      local: "Av. Rio Branco, nº 66 - Centro, Rio de Janeiro",
      data: "Mar/2016",
      contratante: "Banco do Brasil",
      categoria: "Segurança",
      imagem: "/projeto3.jpeg",
      destaque: false,
      servicos: [
        "Sistema de CFTV",
        "Controle de acesso",
        "Alarme de intrusão",
        "Interfone",
        "Sistema de portaria",
        "Integração com sistemas bancários"
      ]
    },
    {
      id: 4,
      titulo: "Petrobras",
      descricao: "Unidade: Refinaria Duque de Caxias - 15.000 m²",
      local: "Duque de Caxias, Rio de Janeiro",
      data: "Ago/2015",
      contratante: "Petrobras",
      categoria: "Energia",
      imagem: "/projeto4.jpeg",
      destaque: true,
      servicos: [
        "Sistema de energia de emergência",
        "Grupos geradores",
        "Painéis de transferência",
        "Sistemas de proteção",
        "Automação industrial",
        "Manutenção preventiva"
      ]
    },
    {
      id: 5,
      titulo: "Vale",
      descricao: "Unidade: Mina de Carajás - 8.000 m²",
      local: "Parauapebas, Pará",
      data: "Jun/2016",
      contratante: "Vale",
      categoria: "Energia",
      imagem: "/projeto5.jpeg",
      destaque: false,
      servicos: [
        "Sistema de energia solar",
        "Instalações elétricas",
        "Subestações",
        "Sistemas de proteção",
        "Monitoramento remoto",
        "Manutenção especializada"
      ]
    },
    {
      id: 6,
      titulo: "Embratel",
      descricao: "Unidade: Central de Telecomunicações - 5.000 m²",
      local: "Rio de Janeiro, RJ",
      data: "Set/2015",
      contratante: "Embratel",
      categoria: "Telecom",
      imagem: "/projeto6.jpeg",
      destaque: false,
      servicos: [
        "Cabeamento estruturado",
        "Redes de fibra óptica",
        "Sistemas de comunicação",
        "Data center",
        "Sistemas de segurança",
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
      destaque: false,
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
      destaque: false,
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
      destaque: false,
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

  // Memoizar projetos filtrados para melhor performance
  const projetosFiltrados = useMemo(() => {
    return categoriaFiltro === 'Todas'
      ? projetos
      : projetos.filter(projeto => projeto.categoria === categoriaFiltro);
  }, [categoriaFiltro]);

  const abrirModal = useCallback((projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  }, []);

  const fecharModal = useCallback(() => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  }, []);

  const gerarPDF = useCallback(async (projeto) => {
    if (gerandoPDF) return;
    
    try {
      setGerandoPDF(true);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Configurações de fonte
      pdf.setFont('helvetica');
      pdf.setFontSize(16);
      
      // Título principal
      pdf.setTextColor(25, 135, 84); // Verde
      pdf.text('MANRIO ENGENHARIA', 105, 20, { align: 'center' });
      
      pdf.setFontSize(14);
      pdf.setTextColor(51, 51, 51); // Cinza escuro
      pdf.text('Relatório do Projeto', 105, 30, { align: 'center' });
      
      // Informações do projeto
      pdf.setFontSize(12);
      pdf.setTextColor(25, 135, 84);
      pdf.text('Informações do Projeto', 20, 45);
      
      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);
      
      let yPosition = 55;
      const lineHeight = 7;
      
      pdf.text(`Título: ${projeto.titulo}`, 20, yPosition);
      yPosition += lineHeight;
      
      pdf.text(`Unidade: ${projeto.descricao}`, 20, yPosition);
      yPosition += lineHeight;
      
      pdf.text(`Local: ${projeto.local}`, 20, yPosition);
      yPosition += lineHeight;
      
      pdf.text(`Data: ${projeto.data}`, 20, yPosition);
      yPosition += lineHeight;
      
      pdf.text(`Contratante: ${projeto.contratante}`, 20, yPosition);
      yPosition += lineHeight;
      
      pdf.text(`Categoria: ${projeto.categoria}`, 20, yPosition);
      yPosition += lineHeight + 5;
      
      // Serviços realizados
      pdf.setFontSize(12);
      pdf.setTextColor(25, 135, 84);
      pdf.text('Serviços Realizados', 20, yPosition);
      
      yPosition += lineHeight;
      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);
      
      projeto.servicos.forEach((servico, index) => {
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(`• ${servico}`, 25, yPosition);
        yPosition += lineHeight;
      });
      
      yPosition += 10;
      
      // Dados da empresa
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }
      
      pdf.setFontSize(12);
      pdf.setTextColor(25, 135, 84);
      pdf.text('Dados da Empresa', 20, yPosition);
      
      yPosition += lineHeight;
      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);
      
      pdf.text('Manrio Engenharia', 20, yPosition);
      yPosition += lineHeight;
      
      pdf.setFontSize(8);
      pdf.text('Profissionais treinados e capacitados em sistemas de energia, telecomunicações e segurança eletrônica patrimonial, prevenção contra incêndio e pânico.', 20, yPosition, { maxWidth: 170 });
      yPosition += lineHeight * 2;
      
      pdf.setFontSize(10);
      pdf.text('Contato:', 20, yPosition);
      yPosition += lineHeight;
      pdf.text('Telefone: (21) 99113-5673 / (22) 99622-5673', 20, yPosition);
      yPosition += lineHeight;
      pdf.text('Email: manrio@manriorj.com', 20, yPosition);
      
      // Rodapé
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(102, 102, 102);
        pdf.text(`Página ${i} de ${totalPages}`, 105, 290, { align: 'center' });
        pdf.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')}`, 105, 295, { align: 'center' });
      }
      
      // Salvar o PDF
      const nomeArquivo = `Projeto_${projeto.titulo.replace(/[^a-zA-Z0-9]/g, '_')}_${projeto.data.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      pdf.save(nomeArquivo);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setGerandoPDF(false);
    }
  }, [gerandoPDF]);

  // Função para lidar com erro de imagem
  const handleImageError = useCallback((e) => {
    // Usar uma imagem padrão que sabemos que existe
    e.target.src = '/projeto1.jpeg';
    e.target.alt = 'Imagem não disponível';
  }, []);

  // Função para obter o caminho correto da imagem
  const getImagePath = useCallback((imageName) => {
    // Verificar se a imagem existe, se não, usar uma padrão
    return imageName || '/projeto1.jpeg';
  }, []);

  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/projeto1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            Portfólio de Projetos
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Conheça alguns dos nossos principais projetos e realizações em engenharia
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-success fs-6 px-3 py-2">
              <i className="fas fa-check-circle me-2"></i>
              {projetos.length} Projetos Realizados
            </span>
            <span className="badge bg-info fs-6 px-3 py-2">
              <i className="fas fa-industry me-2"></i>
              Múltiplas Categorias
            </span>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
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
                      className={`btn ${categoriaFiltro === categoria ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setCategoriaFiltro(categoria)}
                    >
                      {categoria}
                      {categoria !== 'Todas' && (
                        <span className="badge bg-light text-dark ms-2">
                          {projetos.filter(p => p.categoria === categoria).length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Projetos */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projetosFiltrados.map((projeto) => (
            <div key={projeto.id} className="col">
              <div className={`card h-100 bg-dark text-light shadow hover-card ${projeto.destaque ? 'border-warning' : 'border-secondary'}`}>
                {projeto.destaque && (
                  <div className="position-absolute top-0 start-0 m-2">
                    <span className="badge bg-warning text-dark">
                      <i className="fas fa-star me-1"></i>
                      Destaque
                    </span>
                  </div>
                )}

                <div className="position-relative">
                  <img
                    src={getImagePath(projeto.imagem)}
                    className="card-img-top"
                    alt={projeto.titulo}
                    style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => abrirModal(projeto)}
                    onError={handleImageError}
                    loading="lazy"
                    key={`projeto-${projeto.id}`}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className={`badge ${
                      projeto.categoria === 'Incêndio' ? 'bg-danger' :
                      projeto.categoria === 'Energia' ? 'bg-warning' :
                      projeto.categoria === 'Telecom' ? 'bg-info' :
                      'bg-success'
                    }`}>
                      {projeto.categoria}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 w-100 p-2"
                       style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                    <small className="text-light">
                      <i className="fas fa-calendar me-1"></i>
                      {projeto.data}
                    </small>
                  </div>
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-success mb-3">{projeto.titulo}</h5>

                  <div className="mb-3">
                    <p className="card-text small mb-1">
                      <i className="fas fa-building me-2 text-secondary"></i>
                      <strong>{projeto.descricao}</strong>
                    </p>
                    <p className="card-text small mb-1">
                      <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                      {projeto.local}
                    </p>
                    <p className="card-text small mb-2">
                      <i className="fas fa-handshake me-2 text-secondary"></i>
                      {projeto.contratante}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h6 className="text-secondary mb-2">
                      <i className="fas fa-tools me-2"></i>
                      Serviços Realizados:
                    </h6>
                    <ul className="small">
                      {projeto.servicos.slice(0, 3).map((servico, index) => (
                        <li key={index}>{servico}</li>
                      ))}
                      {projeto.servicos.length > 3 && (
                        <li className="text-muted">
                          <em>+{projeto.servicos.length - 3} outros serviços</em>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <button
                      className="btn btn-outline-success w-100 mb-2"
                      onClick={() => abrirModal(projeto)}
                    >
                      <i className="fas fa-eye me-2"></i>
                      Ver Detalhes
                    </button>
                    <button
                      className="btn btn-outline-info w-100"
                      onClick={() => gerarPDF(projeto)}
                      disabled={gerandoPDF}
                    >
                      <i className={`fas ${gerandoPDF ? 'fa-spinner fa-spin' : 'fa-download'} me-2`}></i>
                      {gerandoPDF ? 'Gerando PDF...' : 'PDF do Projeto'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Projeto */}
      {modalAberto && projetoSelecionado && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={fecharModal}
        >
          <div 
            className="modal-dialog modal-xl modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-light border-success">
              <div className="modal-header border-secondary">
                <h5 className="modal-title text-success">
                  <i className="fas fa-project-diagram me-2"></i>
                  {projetoSelecionado.titulo}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={fecharModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={getImagePath(projetoSelecionado.imagem)}
                      className="img-fluid rounded"
                      alt={projetoSelecionado.titulo}
                      onError={handleImageError}
                      key={`modal-${projetoSelecionado.id}`}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <h6 className="text-success">Informações do Projeto</h6>
                      <p><strong>Unidade:</strong> {projetoSelecionado.descricao}</p>
                      <p><strong>Local:</strong> {projetoSelecionado.local}</p>
                      <p><strong>Data:</strong> {projetoSelecionado.data}</p>
                      <p><strong>Contratante:</strong> {projetoSelecionado.contratante}</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="text-success">Serviços Realizados</h6>
                      <ul>
                        {projetoSelecionado.servicos.map((servico, index) => (
                          <li key={index}>{servico}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-secondary">
                <button type="button" className="btn btn-secondary" onClick={fecharModal}>
                  Fechar
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => gerarPDF(projetoSelecionado)}
                  disabled={gerandoPDF}
                >
                  <i className={`fas ${gerandoPDF ? 'fa-spinner fa-spin' : 'fa-download'} me-2`}></i>
                  {gerandoPDF ? 'Gerando PDF...' : 'Baixar Projeto Completo'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-success btn-lg px-5">
              <i className="fas fa-phone me-2"></i>
              Solicitar Orçamento
            </button>
            <button className="btn btn-outline-success btn-lg px-5">
              <i className="fas fa-envelope me-2"></i>
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
