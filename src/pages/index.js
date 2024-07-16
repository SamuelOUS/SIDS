import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Puedes agregar estilos globales aquí
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Monta la aplicación en el div con id "root"
);
