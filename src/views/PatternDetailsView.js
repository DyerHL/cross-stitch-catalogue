import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PatternDetails from '../components/PatternDetails';
import { getSinglePattern } from '../api/data/patternData';

export default function PatternDetailsView({ uid }) {
  const { key } = useParams();
  const [patternCard, setPatternCard] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSinglePattern(key).then(setPatternCard);
    }
    return () => {
      isMounted = false;
    };
  }, [key]);

  return (
    <div>
      <br />
      <PatternDetails patternCard={patternCard} uid={uid} />
    </div>
  );
}

PatternDetailsView.propTypes = {
  uid: PropTypes.string.isRequired,
};
