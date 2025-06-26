import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projetos from './pages/Projetos'
import Home from './pages/Home'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App