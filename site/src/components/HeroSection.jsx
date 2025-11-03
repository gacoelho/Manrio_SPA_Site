export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage, 
  minHeight = '40vh',
  gradient = 'dark',
  children 
}) {
  const backgroundStyle = backgroundImage 
    ? { 
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : gradient === 'green'
      ? { background: 'linear-gradient(135deg, rgba(15,15,15,0.95) 0%, rgba(25,135,84,0.1) 50%, rgba(15,15,15,0.95) 100%)' }
      : { background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))' }

  return (
    <div 
      className="hero-section text-center py-5" 
      style={{ 
        ...backgroundStyle,
        minHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <h1 className="display-4 text-success fw-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="lead lead-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}

