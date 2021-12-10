import React from 'react';
import PropTypes from 'prop-types';
import PatternForm from '../components/AddEditPatternForm';

export default function AddPattern({ uid }) {
  return (
    <div>
      <br />
      <br />
      <br />
      <PatternForm uid={uid} />
    </div>
  );
}

AddPattern.propTypes = {
  uid: PropTypes.string.isRequired,
};
