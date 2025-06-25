export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3 border-top border-secondary">
      <div className="container text-center">
        {/* Social icons */}
        <div className="mb-3">
          <a href="#" className="text-light mx-2">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
        </div>

        {/* Footer links */}
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <a href="#" className="text-secondary text-decoration-none">Home</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#" className="text-secondary text-decoration-none">Serviços</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#" className="text-secondary text-decoration-none">Contato</a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} <strong>MANRIO</strong> — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}