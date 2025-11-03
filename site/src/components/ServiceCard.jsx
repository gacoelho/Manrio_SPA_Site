import { useNavigate } from 'react-router-dom'

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  color, 
  route 
}) {
  const navigate = useNavigate()
  
  const colorClasses = {
    success: { border: 'border-success', text: 'text-success', icon: 'text-success', button: 'btn-outline-success' },
    danger: { border: 'border-danger', text: 'text-danger', icon: 'text-danger', button: 'btn-outline-danger' },
    warning: { border: 'border-warning', text: 'text-warning', icon: 'text-warning', button: 'btn-outline-warning' },
    info: { border: 'border-info', text: 'text-info', icon: 'text-info', button: 'btn-outline-info' }
  }

  const styles = colorClasses[color] || colorClasses.success

  const handleClick = () => {
    if (route) {
      navigate(route)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && route) {
      navigate(route)
    }
  }

  return (
    <div className="col">
      <div 
        className={`card h-100 bg-dark ${styles.border} text-light shadow-sm hover-card`}
        style={{ cursor: route ? 'pointer' : 'default' }}
        onClick={handleClick}
        role={route ? 'button' : undefined}
        tabIndex={route ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
        <div className="card-body text-center">
          <i className={`${icon} fa-3x ${styles.icon} mb-3`}></i>
          <h3 className={`card-title ${styles.text}`}>{title}</h3>
          <p className="card-text">
            {description}
          </p>
          {route && (
            <button className={`btn ${styles.button} mt-3 w-100`}>
              Saiba mais
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

