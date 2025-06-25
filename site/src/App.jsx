import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router basename="/site"> {/* MUITO IMPORTANTE para GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App