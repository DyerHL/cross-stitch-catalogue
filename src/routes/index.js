import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPattern from '../views/AddPattern';
import PatternDetailsView from '../views/PatternDetailsView';
import ShoppingList from '../views/ShoppingList';
import Home from '../views/Home';
import EditPattern from '../views/EditPattern';
import EditThread from '../views/EditThread';

export default function index({ uid }) {
  const [patternCard, setPatternCard] = useState({});
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home uid={uid} />} />
        <Route
          exact
          path="/addpattern"
          component={() => (
            <AddPattern uid={uid} setPatternCard={setPatternCard} />
          )}
        />
        <Route
          exact
          path="/patterndetails/:key"
          component={() => (
            <PatternDetailsView
              uid={uid}
              patternCard={patternCard}
              setPatternCard={setPatternCard}
            />
          )}
        />
        <Route
          exact
          path="/shoppinglist"
          component={() => <ShoppingList uid={uid} />}
        />
        <Route
          exact
          path="/edit/:key"
          component={() => <EditPattern uid={uid} />}
        />
        <Route
          exact
          path="/editthread/:threadkey"
          component={() => <EditThread uid={uid} />}
        />
      </Switch>
    </>
  );
}

index.propTypes = {
  uid: PropTypes.string.isRequired,
};
