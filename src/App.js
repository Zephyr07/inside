import './App.css';
import Home from "./pages/home/home";
import {BrowserRouter, Route} from 'react-router-dom';
import React from "react";
import Header from "./components/header/header";
import Story from "./pages/story/story";
import ListeNote from "./pages/liste-note/liste-note";
import DetailActualite from "./pages/detail-actualite/detail-actualite";
import Birthday from "./pages/birthday/birthday";
import Actualite from "./pages/actualite/actualite";
import Pos from "./pages/pos/pos";
import Organigramme from "./pages/organigramme/organigramme";
import DetailNote from "./pages/detail-note/detail-note";
import Product from "./pages/product/product";


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Route exact={true} path="/home" component={Home}/>
        <Route exact={true} path="/notes" component={ListeNote}/>
        <Route exact={true} path="/detail-note/:id" component={DetailNote}/>
        <Route exact={true} path="/histoire" component={Story}/>
        <Route exact={true} path="/anniversaire" component={Birthday}/>
        <Route exact={true} path="/detail-actualite/:idActu" component={DetailActualite}/>
        <Route exact={true} path="/actualite" component={Actualite}/>
        <Route exact={true} path="/organigramme" component={Organigramme}/>
        <Route exact={true} path="/pos" component={Pos}/>
        <Route exact={true} path="/product" component={Product}/>

    </BrowserRouter>
  );
}

export default App;
