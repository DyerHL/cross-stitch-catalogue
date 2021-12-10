import React from 'react';
import PropTypes from 'prop-types';

export default function ThreadCard({ card }) {
  return (
    <div className="card">
      <div className="card-body">
        <div>Color: {card.colorName}</div>
        <div>{card.numberNeeded} skeins needed</div>
        <button type="button" href="#" className="btn btn-light">
          Own
        </button>
        <button type="button" href="#" className="btn btn-light">
          Edit
        </button>
        <button type="button" href="#" className="btn btn-light">
          Delete
        </button>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
