import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MusicPlayProvider } from './components/MusicPlayContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicPlayProvider>
      <App />
    </MusicPlayProvider>
  </StrictMode>
)
