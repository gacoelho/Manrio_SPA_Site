import { useNavigate } from 'react-router-dom'

export default function Noticias() {
  const navigate = useNavigate()
  const noticias = [
    {
      id: 1,
      titulo: "DF investem em energia solar",
      resumo: "Distrito Federal anuncia investimentos significativos em projetos de energia solar para reduzir dependência de fontes tradicionais.",
      categoria: "Energia Solar",
      data: "2024",
      imagem: `${import.meta.env.BASE_URL}projeto1.jpeg`
    },
    {
      id: 2,
      titulo: "Energia solar vai superar a hidrelétrica no Brasil",
      resumo: "Projeções indicam que a energia solar deve se tornar a principal fonte de energia renovável no Brasil nos próximos anos.",
      categoria: "Energia Solar",
      data: "2024",
      imagem: `${import.meta.env.BASE_URL}projeto2.jpeg`
    },
    {
      id: 3,
      titulo: "Tarifa branca para quem é?",
      resumo: "Entenda como funciona a tarifa branca de energia e para quem ela é mais vantajosa.",
      categoria: "Energia",
      data: "2024",
      imagem: `${import.meta.env.BASE_URL}projeto3.jpeg`
    },
    {
      id: 4,
      titulo: "A História da Engenharia de Proteção contra Incêndios",
      resumo: "Conheça a evolução histórica dos sistemas de proteção contra incêndio e como a tecnologia transformou a segurança.",
      categoria: "Proteção contra Incêndio",
      data: "2024",
      imagem: `${import.meta.env.BASE_URL}projeto4.jpeg`
    }
  ];

  return (
    <div className="text-light">
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ 
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${import.meta.env.BASE_URL}manrio_logo.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 text-success fw-bold mb-4">
            Notícias & Atualizações
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Fique por dentro das últimas novidades do setor de engenharia
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-5">
        {/* Filtros */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card bg-dark border-secondary text-light">
              <div className="card-body">
                <h3 className="text-secondary mb-3">
                  <i className="fas fa-filter me-2"></i>
                  Filtrar por Categoria
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-outline-success">Todas</button>
                  <button className="btn btn-outline-warning">Energia Solar</button>
                  <button className="btn btn-outline-danger">Proteção contra Incêndio</button>
                  <button className="btn btn-outline-info">Energia</button>
                  <button className="btn btn-outline-primary">Segurança</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Notícias */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="col">
              <div className="card h-100 bg-dark text-light shadow hover-card">
                <img 
                  src={noticia.imagem} 
                  className="card-img-top" 
                  alt={noticia.titulo}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success me-2">{noticia.categoria}</span>
                    <small className="text-muted">{noticia.data}</small>
                  </div>
                  <h5 className="card-title text-success">{noticia.titulo}</h5>
                  <p className="card-text flex-grow-1">{noticia.resumo}</p>
                  <button className="btn btn-outline-success mt-auto" onClick={() => navigate('/contato')}>
                    <i className="fas fa-arrow-right me-2"></i>
                    Ler Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        <div className="row mt-5">
          <div className="col-12">
            <nav aria-label="Navegação de notícias">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link bg-dark border-secondary text-light" href="#" tabIndex="-1" aria-disabled="true">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link bg-success border-success" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-secondary text-light" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-secondary text-light" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-dark border-secondary text-light" href="#">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Newsletter removed as requested */}
      </div>
    </div>
  )
}
