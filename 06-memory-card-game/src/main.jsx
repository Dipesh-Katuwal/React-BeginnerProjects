import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClickContextHandler } from './store/ClickContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickContextHandler>
      <App/>
    </ClickContextHandler>
  </StrictMode>,
)
