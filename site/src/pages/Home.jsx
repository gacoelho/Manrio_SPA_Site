import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="text-light">
      {/* Hero Section */}
      <HeroSection
        title="O que somos!"
        subtitle="Profissionais treinados e capacitados em sistemas de energia, telecomunicações e segurança eletrônica patrimonial, prevenção contra incêndio e pânico."
        backgroundImage={`${import.meta.env.BASE_URL}main_page.jpg`}
        minHeight="60vh"
      />
      <div className="hero-section text-center py-3" style={{ 
        background: 'linear-gradient(135deg, rgba(15,15,15,0.95) 0%, rgba(25,135,84,0.1) 50%, rgba(15,15,15,0.95) 100%)',
      }}>
        <div className="container">
          <h2 className="h3 text-success mb-4">
            Soluções ao seu alcance
          </h2>
          <p className="mb-4 lead-md">
            Contratar nunca foi tão simples
          </p>
          <button className="btn btn-success btn-lg px-5 py-3 fw-bold" onClick={() => navigate('/contato')}>
            Solicite um orçamento
          </button>
        </div>
      </div>

      {/* Serviços Section */}
      <div className="container py-5">
        <h2 className="text-center text-success mb-5">O que podemos fazer!</h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          <ServiceCard
            title="Segurança"
            description="A segurança eletrônica possibilita à sua empresa soluções para controle de acesso, registro de presença e muito mais, com total confiabilidade."
            icon="fas fa-shield-alt"
            color="success"
            route="/seguranca"
          />
          <ServiceCard
            title="Incêndio"
            description="A proteção contra incêndio consiste em medidas e equipamentos que tornam o ambiente seguro e facilitam o acesso externo em emergências."
            icon="fas fa-fire-extinguisher"
            color="danger"
            route="/incendio"
          />
          <ServiceCard
            title="Energia"
            description="Instalação e manutenção elétrica com ferramentas modernas e equipe especializada para oferecer segurança e eficiência."
            icon="fas fa-bolt"
            color="warning"
            route="/energia"
          />
          <ServiceCard
            title="Telecom"
            description="Projetos completos de redes e sistemas de telecomunicações — do planejamento à instalação e manutenção."
            icon="fas fa-network-wired"
            color="info"
            route="/telecom"
          />
        </div>

        {/* Áreas de Atuação */}
        <h2 className="text-center text-success mb-5">Onde podemos atuar!</h2>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Industrial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-industry fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Industrial</h4>
                <p className="card-text">
                  Desenvolvemos projetos nos setores industriais de energia, óleo & gás, química, inflamáveis, transporte, mineração, alimentícia dentre outros.
                </p>
              </div>
            </div>
          </div>

          {/* Comercial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-store fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Comercial</h4>
                <p className="card-text">
                  Atuamos nos setores de lojas comerciais, shoppings, prédios de escritório, hospitais, hotelaria, dentre outros.
                </p>
              </div>
            </div>
          </div>

          {/* Residencial */}
          <div className="col">
            <div className="card h-100 bg-dark border-secondary text-light shadow-sm hover-card">
              <div className="card-body text-center">
                <i className="fas fa-home fa-3x text-secondary mb-3"></i>
                <h4 className="card-title text-secondary">Residencial</h4>
                <p className="card-text">
                  Atuamos também nos setores residenciais multifamiliares e conjuntos habitacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed newsletter section as requested */}
    </div>
  )
}
