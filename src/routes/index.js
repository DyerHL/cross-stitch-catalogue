import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPattern from '../views/AddPattern';
import PatternDetailsView from '../views/PatternDetailsView';
import ShoppingList from '../views/ShoppingList';
import Home from '../views/Home';

export default function index() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addpattern" component={AddPattern} />
        <Route exact path="/patterndetails" component={PatternDetailsView} />
        <Route exact path="/shoppinglist" component={ShoppingList} />
      </Switch>
    </>
  );
}
