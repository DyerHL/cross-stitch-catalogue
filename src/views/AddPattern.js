import React from 'react';
import PropTypes from 'prop-types';
import PatternForm from '../components/AddEditPatternForm';

export default function AddPattern({ uid, setPatternCard }) {
  return (
    <div>
      <br />
      <br />
      <br />
      <PatternForm uid={uid} setPatternCard={setPatternCard} />
    </div>
  );
}

AddPattern.propTypes = {
  setPatternCard: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};
