import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { deleteThread, updateOwn } from '../api/data/threadData';

export default function ThreadCard({ thread, setThreads }) {
  const history = useHistory();

  const handleClick = (method) => {
    if (method === 'delete') {
      deleteThread(thread.firebaseKey).then(() => {
        history.push('/');
      });
    } else {
      updateOwn({ ...thread, own: true }).then(setThreads);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div>Color: {thread.colorName}</div>
        <div>{thread.numberNeeded} skeins needed</div>
        {thread.own ? (
          <button type="button" className="btn btn-light" disabled>
            <i className="fas fa-star" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleClick('own')}
            className="btn btn-light"
          >
            {' '}
            <i className="far fa-star" />
          </button>
        )}
        <Link
          type="button"
          to={`/editthread/${thread.firebaseKey}`}
          className="btn btn-light"
        >
          Edit
        </Link>
        <button
          onClick={() => handleClick('delete')}
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
  thread: PropTypes.shape(PropTypes.obj).isRequired,
  setThreads: PropTypes.func.isRequired,
};
