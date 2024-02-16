import React from 'react'
import ReactDOM from 'react-dom/client'
import Grid from './grid.jsx'
import App from './App.jsx'
import FunFacts from './funfacts.jsx'
import Faq from './faq.jsx'
import Mapfunc from './map.jsx'
import Vigsel from './vigsel.jsx'
import WeddingRSVPForm from './WeddingRSVPForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Grid />
    <App />
    <FunFacts />
    <Mapfunc />
    <Faq />
    <Vigsel />
    <WeddingRSVPForm></WeddingRSVPForm>
  </React.StrictMode>,
)
