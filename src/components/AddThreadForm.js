import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createThread, updateThread } from '../api/data/threadData';

const initialState = {
  colorName: '',
  numberNeeded: '',
  own: false,
};

export default function AddThreadForm({ obj, uid }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateThread(obj.firebaseKey, formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createThread({ ...formInput, uid }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <div className="card text-center">
      <form onSubmit={handleSubmit}>
        <input
          id="colorName"
          name="colorName"
          value={formInput.colorName}
          onChange={handleChange}
          required
          placeholder="Thread Color Name"
        />
        <input
          id="numberNeeded"
          name="numberNeeded"
          value={formInput.numberNeeded}
          onChange={handleChange}
          required
          placeholder="# Skeins Needed"
        />
        <button type="submit" className="btn btn-info">
          {obj.firebaseKey ? 'Add' : 'Update'}
        </button>
      </form>
    </div>
  );
}

AddThreadForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

AddThreadForm.defaultProps = {
  obj: {},
};
