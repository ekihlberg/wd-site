import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomRoutes from './Routes.jsx'; // Import the Routes component
import Grid from './grid.jsx'
import App from './App.jsx'
import FunFacts from './funfacts.jsx'
import Faq from './faq.jsx'
import Toast from './toast.jsx'
import Mapfunc from './map.jsx'
import Vigsel from './vigsel.jsx'
import WeddingRSVPForm from './WeddingRSVPForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomRoutes>
      <Grid />
      <App />
      <FunFacts />
      <Toast />
      <Mapfunc />
      <Faq />
      <Vigsel />
    </CustomRoutes>
  </React.StrictMode>
);