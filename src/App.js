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
import Landing from './components/Landing/Landing';

function App() {

  return ( 
    <React.Fragment>

    {/* <NavBar/> */}
    <Route exact path="/home" component={NavBar} />
    <Route exact path="/gamescreated" component={NavBar} />
    <Route exact path="/create" component={NavBar} />
    <Route exact path="/about" component={NavBar} />
    <Route exact path="/favs" component={NavBar} />
    <Route exact path="/game/:id" component={NavBar} />
    <Route exact path="/resources" component={NavBar} />


    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Filter} /> 
    <Route exact path="/home" component={Games} />
    <Route exact path="/gamescreated" component={GamesCreated} />
    <Route exact path="/create" component={CreateGame} />
    <Route exact path="/home" component={Pagination} />
    <Route exact path="/about" component={About} />
    <Route exact path="/favs" component={Favorites} />
    <Route exact path="/game/:id" component={GameDetail} />
    <Route exact path="/resources" component={Resources} />


    {/* <Footer/> */}
    <Route exact path="/home" component={Footer} />
    <Route exact path="/gamescreated" component={Footer} />
    <Route exact path="/create" component={Footer} />
    <Route exact path="/about" component={Footer} />
    <Route exact path="/favs" component={Footer} />
    <Route exact path="/game/:id" component={Footer} />
    <Route exact path="/resources" component={Footer} />

    </React.Fragment>
  );
}

export default App;
