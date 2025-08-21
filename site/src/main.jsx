import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Ajuste automático de base para GitHub Pages
const isGithubPages = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')
const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean) : []
const repoName = isGithubPages && pathSegments.length > 0 ? `/${pathSegments[0]}` : '/'
const basename = import.meta.env.BASE_URL || repoName

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
