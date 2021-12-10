import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PatternForm from '../components/AddEditPatternForm';
import { getSinglePattern } from '../api/data/patternData';

export default function EditPattern({ uid }) {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSinglePattern(key).then(setEditItem);
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <PatternForm obj={editItem} uid={uid} />
    </div>
  );
}

EditPattern.propTypes = {
  uid: PropTypes.string.isRequired,
};
