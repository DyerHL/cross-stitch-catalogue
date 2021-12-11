import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPatterns } from '../api/data/patternData';
import HomeFilterBar from '../components/HomeFilterBar';
import HomePatternCard from '../components/HomePatternCard';

export default function Home({ uid }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getPatterns(uid).then(setCards);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <HomeFilterBar uid={uid} />
      <div className="home-patterns">
        {cards.map((card) => (
          <HomePatternCard
            key={card.patternfirebaseKey}
            card={card}
            setCards={setCards}
            uid={uid}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
};
