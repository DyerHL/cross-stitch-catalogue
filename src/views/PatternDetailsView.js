import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PatternDetails from '../components/PatternDetails';
import { getSinglePattern } from '../api/data/patternData';

export default function PatternDetailsView({ uid }) {
  const [patternCard, setPatternCard] = useState({});
  const { key } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSinglePattern(key).then(setPatternCard);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Pattern Details for {patternCard.name}</h1>
      <PatternDetails patternCard={patternCard} uid={uid} />
    </div>
  );
}

PatternDetailsView.propTypes = {
  uid: PropTypes.string.isRequired,
};
