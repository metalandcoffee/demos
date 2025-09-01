import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './demos/2/App-bad.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
