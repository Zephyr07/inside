import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListeNote from "./pages/liste-note/liste-note";

ReactDOM.render(
  <React.StrictMode>
    <ListeNote />
  </React.StrictMode>,
  document.getElementById('root')
);

