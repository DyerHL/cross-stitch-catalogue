import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HomePatternCard({ card }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '.5rem' }}>
      <img src={card.imageURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <Link type="button" to={`/patterndetails/${card.patternfirebaseKey}`}>
          <button type="button" className="basicButton">
            Go To Pattern Details
          </button>
        </Link>
      </div>
    </div>
  );
}

HomePatternCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
