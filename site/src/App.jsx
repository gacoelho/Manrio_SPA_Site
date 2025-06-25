import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router basename="/site"> {/* MUITO IMPORTANTE para GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App