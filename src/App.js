import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PlacesList from './components/PlaceList';
import Navbar from './components/Navbar'
import PlaceDetails from './components/PlaceDetails';

function App() {
  console.log("check netlify");
  return (
    <>
      
      <Router>
      <Navbar/>
     <Switch>
      <Route exact path="/"><PlacesList/></Route>
      <Route exact path="/details"><PlaceDetails/></Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;
