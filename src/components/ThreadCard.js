import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  deleteThread,
  getThreadsByPattern,
  updateOwn,
} from '../api/data/threadData';

export default function ThreadCard({ thread, setThreads, patternfirebaseKey }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteThread(thread.firebaseKey).then(() => {
        getThreadsByPattern(patternfirebaseKey).then(setThreads);
      });
    } else {
      updateOwn({ ...thread, own: true }).then(setThreads);
    }
  };

  return (
    <div className="thread-card">
      <div className="thread-card-body">
        <div className="thread-card-text">
          <div className="thread-card-txt">
            <div>Color: {thread.colorName}</div>
            <div className="number">
              {thread.numberNeeded}{' '}
              {thread.numberNeeded === '1' ? 'skein' : 'skeins'} needed
            </div>
          </div>
        </div>
        <div className="thread-buttons-container">
          {thread.own ? (
            <button type="button" className="btn thread" disabled>
              <i className="fas fa-star" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleClick('own')}
              className="btn thread"
            >
              {' '}
              <i className="far fa-star" />
            </button>
          )}
          <Link
            type="button"
            to={`/editthread/${thread.firebaseKey}`}
            className="btn thread"
          >
            <i className="fas fa-edit" />
          </Link>
          <button
            onClick={() => handleClick('delete')}
            type="button"
            href="#"
            className="btn thread"
          >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  thread: PropTypes.shape(PropTypes.obj).isRequired,
  patternfirebaseKey: PropTypes.string.isRequired,
  setThreads: PropTypes.func.isRequired,
};
