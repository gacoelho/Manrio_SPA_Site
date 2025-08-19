import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projetos from './pages/Projetos'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Seguranca from './pages/Seguranca'
import Energia from './pages/Energia'
import Incendio from './pages/Incendio'
import Telecom from './pages/Telecom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/incendio" element={<Incendio />} />
        <Route path="/telecom" element={<Telecom />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App