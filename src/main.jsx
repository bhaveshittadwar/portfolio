import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

// Hydrate if pre-rendered, otherwise render normally
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <App />)
} else {
  ReactDOM.createRoot(rootElement).render(<App />)
}
