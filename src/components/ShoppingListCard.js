import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPatternName } from '../api/data/patternData';

export default function ShoppingListCard({ card }) {
  const [name, setName] = useState();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getPatternName(card.patternfirebaseKey).then(setName);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="shopping-card">
      <div className="card-body" name={name}>
        <div>Color Name: {card.colorName}</div>
        <div>#{card.numberNeeded} Needed</div>
        <div>Pattern: {name}</div>
      </div>
    </div>
  );
}

ShoppingListCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
