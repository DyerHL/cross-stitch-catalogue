import React from 'react';
import PropTypes from 'prop-types';
import { filterPattern, getPatterns } from '../api/data/patternData';

export default function HomeFilterBar({ uid, setCards }) {
  const handleClick = (e) => {
    if (e.target.id.includes('filter')) {
      const [, status] = e.target.id.split('--');
      filterPattern(status, uid).then(setCards);
    } else {
      getPatterns(uid).then(setCards);
    }
  };

  return (
    <div className="btn-group">
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-light active"
        aria-current="page"
      >
        All
      </button>
      <button
        onClick={handleClick}
        type="button"
        id="filter--In Progress"
        className="btn btn-light"
      >
        In Progress
      </button>
      <button
        onClick={handleClick}
        type="button"
        id="filter--Not Started"
        className="btn btn-light"
      >
        Not Started
      </button>
      <button
        onClick={handleClick}
        type="button"
        id="filter--Complete"
        className="btn btn-light"
      >
        Completed
      </button>
    </div>
  );
}

HomeFilterBar.propTypes = {
  uid: PropTypes.string.isRequired,
  setCards: PropTypes.func.isRequired,
};
