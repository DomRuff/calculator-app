import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CalculatorContextProvider } from './contexts/calculatorContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </StrictMode>,
)
