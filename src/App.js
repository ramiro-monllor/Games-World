import './App.css';
import React from 'react';
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js"
import Games from './components/Games/Games';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import GameDetail from './components/GameDetail/GameDetail';
import Pagination from './components/Pagination/Pagination';
import CreateGame from './components/CreateGame/CreateGame';
import GamesCreated from './components/GamesCreated/GamesCreated';
import Filter from './components/Filter/Filter';

function App() {

  return ( 
    <React.Fragment>
    <NavBar/>
    <Route exact path="/" component={Filter}/> 
    <Route exact path="/" component={Games} />
    <Route exact path="/gamescreated" component={GamesCreated} />
    <Route exact path="/create" component={CreateGame} />
    <Route exact path="/" component={Pagination} />
    <Route path="/about" component={About} />
    <Route exact path="/favs" component={Favorites} />
    <Route path="/game/:id" component={GameDetail} />
    <Route path="/resources" component={Resources} />
    <Footer/>
    </React.Fragment>
  );
}

export default App;
