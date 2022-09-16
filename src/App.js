import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PlacesList from './components/PlaceList';
import Navbar from './components/Navbar'
import PlaceDetails from './components/PlaceDetails';
import AddItem from './components/AddItem';



function App() {
  return (
    <>
      
      <Router>
      <Navbar/>
     <Switch>
      <Route exact path="/"><PlacesList/></Route>
      <Route exact path="/details"><PlaceDetails/></Route>
      <Route exact path="/addItem"><AddItem/></Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;
