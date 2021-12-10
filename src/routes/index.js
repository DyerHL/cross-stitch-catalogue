import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPattern from '../views/AddPattern';
import PatternDetailsView from '../views/PatternDetailsView';
import ShoppingList from '../views/ShoppingList';
import Home from '../views/Home';
import EditPattern from '../views/EditPattern';

export default function index({ uid }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home uid={uid} />} />
        <Route
          exact
          path="/addpattern"
          component={() => <AddPattern uid={uid} />}
        />
        <Route
          exact
          path="/patterndetails/:key"
          component={() => <PatternDetailsView uid={uid} />}
        />
        <Route exact path="/shoppinglist" component={ShoppingList} />
        <Route
          exact
          path="/edit/:key"
          component={() => <EditPattern uid={uid} />}
        />
      </Switch>
    </>
  );
}

index.propTypes = {
  uid: PropTypes.string.isRequired,
};
