import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createPattern, updatePattern } from '../api/data/patternData';

const initialState = {
  name: '',
  imageURL: '',
  patternURL: '',
  public: false,
  status: '',
};

export default function PatternForm({ obj, uid }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.patternfirebaseKey) {
      setFormInput({
        imageURL: obj.imageURL,
        name: obj.name,
        patternURL: obj.patternURL,
        patternfirebaseKey: obj.patternfirebaseKey,
        public: obj.public,
        status: obj.status,
      });
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
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.patternfirebaseKey) {
      updatePattern(obj.patternfirebaseKey, formInput).then(() => {
        resetForm();
        history.goBack();
      });
    } else {
      createPattern({ ...formInput, uid }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <div className="card text-center">
        <h2>Add a New Pattern to your Catalogue</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              required
              placeholder="Name of Pattern"
            />
            <p />
            <input
              id="imageURL"
              name="imageURL"
              value={formInput.imageURL}
              onChange={handleChange}
              required
              placeholder="Image URL"
            />
            <p />
            <input
              id="patternURL"
              name="patternURL"
              value={formInput.patternURL}
              onChange={handleChange}
              required
              placeholder="Pattern Download URL"
            />
            <p />
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
                id="staus"
                name="status"
                value={formInput.status}
                onChange={handleChange}
                required
              >
                <option value="Select">Please Select A Project Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info">
              {obj.patternfirebaseKey ? 'Update' : 'Post'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

PatternForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

PatternForm.defaultProps = {
  obj: {},
};
