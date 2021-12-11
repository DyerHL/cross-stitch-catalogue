import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleThread } from '../api/data/threadData';
import AddThreadForm from '../components/AddThreadForm';

export default function EditThread({ uid }) {
  const [editItem, setEditItem] = useState({});
  const { threadkey } = useParams();

  useEffect(() => {
    getSingleThread(threadkey).then(setEditItem);
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <AddThreadForm obj={editItem} uid={uid} />
    </div>
  );
}

EditThread.propTypes = {
  uid: PropTypes.string.isRequired,
};
