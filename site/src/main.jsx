import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

// Em desenvolvimento, usar '/' para facilitar o desenvolvimento
// Em produção, usar '/Manrio_SPA_Site/' para GitHub Pages
const basename = import.meta.env.DEV ? '/' : '/Manrio_SPA_Site/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
