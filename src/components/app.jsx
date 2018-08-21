import React from 'react';
import '../app.css';
import NavBar from './navbar';
import Properties from './properties';
import AddProperties from './addProperties';
import {Switch, Route } from 'react-router';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperties} />
    </Switch>
  </div>
);

export default App;
