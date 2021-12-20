import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getNeededThreads } from '../api/data/threadData';
import ShoppingListCard from '../components/ShoppingListCard';

export default function ShoppingList({ uid }) {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getNeededThreads(uid).then(setThreads);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="shopping-container">
        {threads.map((card) => (
          <ShoppingListCard key={card.firebaseKey} card={card} />
        ))}
      </div>
    </>
  );
}

ShoppingList.propTypes = {
  uid: PropTypes.string.isRequired,
};
