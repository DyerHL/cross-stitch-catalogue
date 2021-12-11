import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingListCard({ card }) {
  return (
    <div className="card">
      <div className="card-body">
        <div>Color Name: {card.colorName}</div>
        <div>#{card.numberNeeded} Needed</div>
        <div>{card.projectName}</div>
      </div>
    </div>
  );
}

ShoppingListCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
