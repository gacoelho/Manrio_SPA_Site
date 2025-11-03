import { useNavigate } from 'react-router-dom'

export default function FloatingContactButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/contato')}
      className="floating-contact-btn"
      aria-label="Ir para página de contato"
      title="Entre em contato"
    >
      <i className="fas fa-envelope"></i>
    </button>
  )
}

