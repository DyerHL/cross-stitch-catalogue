import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import ThreadCard from './ThreadCard';
import { deletePattern } from '../api/data/patternData';
import { getThreadsByPattern } from '../api/data/threadData';
import AddThreadForm from './AddThreadForm';

export default function PatternDetails({ patternCard, uid }) {
  const [threads, setThreads] = useState([]);

  const history = useHistory();

  const handleDelete = (method) => {
    if (method === 'delete') {
      deletePattern(patternCard.patternfirebaseKey).then(() => {
        history.push('/');
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getThreadsByPattern(patternCard.patternfirebaseKey).then(setThreads);
    }
    return () => {
      isMounted = false;
    };
  }, [patternCard]);

  return (
    <>
      <br />
      <br />
      <div className="card">
        <div>
          <div className="pat-det-img-det">
            <div>
              <img
                src={patternCard.imageURL}
                className="img-fluid"
                alt="..."
                style={{ width: '18rem', margin: '.5rem' }}
              />
            </div>
            <div>
              <h5 className="card-title">{patternCard.name}</h5>
              <a
                rel="noreferrer"
                target="_blank"
                href={patternCard.patternURL}
                type="button"
              >
                Take me to the Pattern!
              </a>
              <Link
                to={`/edit/${patternCard.patternfirebaseKey}`}
                type="button"
              >
                {' '}
                Edit Pattern Details{' '}
              </Link>
              <div>Pattern Status: {patternCard.status}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="threads-list">
            {threads.map((thread) => (
              <ThreadCard
                key={thread.firebaseKey}
                setThreads={setThreads}
                thread={thread}
                patternfirebaseKey={patternCard.patternfirebaseKey}
              />
            ))}
          </div>
          <div>
            <AddThreadForm
              uid={uid}
              patternfirebaseKey={patternCard.patternfirebaseKey}
              setThreads={setThreads}
            />
          </div>
        </div>
        <div>
          <button type="button" onClick={() => handleDelete('delete')}>
            Delete Pattern from Catalogue
          </button>
        </div>
      </div>
    </>
  );
}

PatternDetails.propTypes = {
  patternCard: PropTypes.shape(PropTypes.obj).isRequired,
  uid: PropTypes.string.isRequired,
};
