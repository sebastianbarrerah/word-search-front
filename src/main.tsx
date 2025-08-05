import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import "./reset.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
