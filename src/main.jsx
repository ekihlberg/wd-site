import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FunFacts from './funfacts.jsx'
import Faq from './faq.jsx'
import WeddingRSVPForm from './WeddingRSVPForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FunFacts />
    <Faq />
    <WeddingRSVPForm></WeddingRSVPForm>
  </React.StrictMode>,
)
