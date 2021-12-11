import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { deleteThread } from '../api/data/threadData';

export default function ThreadCard({ card }) {
  const history = useHistory();

  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteThread(card.firebaseKey).then(() => {
        history.push('/');
      });
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <div>Color: {card.colorName}</div>
        <div>{card.numberNeeded} skeins needed</div>
        <button type="button" href="#" className="btn btn-light">
          Own
        </button>
        <Link
          type="button"
          to={`/editthread/${card.firebaseKey}`}
          className="btn btn-light"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete('delete')}
          type="button"
          href="#"
          className="btn btn-light"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
