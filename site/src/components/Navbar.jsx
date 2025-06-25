import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/">Início</Link> |{' '}
      <Link to="/sobre">Sobre</Link> |{' '}
      <Link to="/contato">Contato</Link>
    </nav>
  )
}
