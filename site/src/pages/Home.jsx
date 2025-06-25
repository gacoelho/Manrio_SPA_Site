export default function Home() {
  return (
    <div className="container py-5 text-light">
      <h1 className="mb-4 text-success">Quem somos</h1>
      <p className="lead">
        Profissionais treinados e capacitados em sistemas de energia, telecomunicações e segurança eletrônica patrimonial,
        prevenção contra incêndio e pânico.
      </p>

      <h2 className="mt-5 mb-3 text-success">Soluções ao seu alcance</h2>
      <p className="mb-4">Contratar nunca foi tão simples</p>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* Segurança */}
        <div className="col">
          <div className="card h-100 bg-dark border-success text-light shadow-sm">
            <div className="card-body">
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
          <div className="card h-100 bg-dark border-danger text-light shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-danger">Incêndio</h3>
              <p className="card-text">
                A proteção contra incêndio consiste em medidas e equipamentos que tornam o ambiente seguro e facilitam o acesso externo em emergências.
              </p>
            </div>
          </div>
        </div>

        {/* Energia */}
        <div className="col">
          <div className="card h-100 bg-dark border-warning text-light shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-warning">Energia</h3>
              <p className="card-text">
                Instalação e manutenção elétrica com ferramentas modernas e equipe especializada para oferecer segurança e eficiência.
              </p>
            </div>
          </div>
        </div>

        {/* Telecom */}
        <div className="col">
          <div className="card h-100 bg-dark border-info text-light shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-info">Telecom</h3>
              <p className="card-text">
                Projetos completos de redes e sistemas de telecomunicações — do planejamento à instalação e manutenção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
