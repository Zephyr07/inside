import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Actualite from "./pages/actualite/actualite";

ReactDOM.render(
  <React.StrictMode>
    <Actualite />
  </React.StrictMode>,
  document.getElementById('root')
);

