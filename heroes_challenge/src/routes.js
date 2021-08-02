import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/:id" component={Details} />
      <Route path="/favorite" component={Favorites} />
    </Switch>
  );
}
