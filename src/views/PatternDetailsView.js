import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PatternDetails from '../components/PatternDetails';
import { getSinglePattern } from '../api/data/patternData';

export default function PatternDetailsView({
  uid,
  patternCard,
  setPatternCard,
}) {
  const { key } = useParams();

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
  patternCard: PropTypes.shape(PropTypes.obj).isRequired,
  setPatternCard: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};
