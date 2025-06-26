export default function Projetos() {
  return (
    <div className="container py-5 text-light">
      <h1 className="text-success mb-5 text-center">Projetos Realizados</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100 bg-dark text-light shadow">
            <img src="/Manrio_SPA_Site/projeto1.jpeg" className="card-img-top" alt="Casa da Moeda" />
            <div className="card-body">
              <h5 className="card-title text-success">Casa da Moeda do Brasil</h5>
              <p className="card-text">
                Unidade: Depósito de Inflamáveis - 1900 m²<br />
                Local: Rua René Bittencourt nº 371, Santa Cruz.<br />
                Data do projeto: Dez/2015<br />
                Contratante: Conaut Controles Automáticos
              </p>
              <ul>
                <li>Saídas de Emergência</li>
                <li>Sinalização de Segurança</li>
                <li>Iluminação de Emergência</li>
                <li>Sistema de Alarme de Incêndio</li>
                <li>Hidrantes e acessórios</li>
                <li>Sprinklers</li>
                <li>Sistema de Espuma (LGE)</li>
              </ul>
              <p className="card-text">
                <small className="text-muted">Última atualização: 3 minutos atrás</small>
              </p>
            </div>
          </div>
        </div>
        

        {/* Exemplo de outros cards genéricos */}
        {[...Array(5)].map((_, i) => (
          <div className="col" key={i}>
            <div className="card h-100 bg-dark text-light shadow">
              <img src={`/img/projeto${i + 2}.jpg`} className="card-img-top" alt={`Projeto ${i + 2}`} />
              <div className="card-body">
                <h5 className="card-title text-success">Projeto Exemplo {i + 2}</h5>
                <p className="card-text">
                  Este é um projeto demonstrativo com informações resumidas.
                </p>
                <p className="card-text">
                  <small className="text-muted">Última atualização: {i + 2} minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
