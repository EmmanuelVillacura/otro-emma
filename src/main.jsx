import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import 'primereact/resources/themes/saga-blue/theme.css'; // Tema
import 'primereact/resources/primereact.min.css';         // Estilos primarios
import 'primeicons/primeicons.css';                       // Iconos de PrimeIcons
import 'primeflex/primeflex.css';                         // agregar acceso a las clases prime flex

import { Provider } from 'react-redux';
import store from './redux/storage.js';

createRoot(document.getElementById('root')).render(
 
 <StrictMode>
    
      <Provider store={store}>
        <App />
      </Provider>
   
    
  </StrictMode>,
)
