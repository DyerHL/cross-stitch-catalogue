import React from 'react';

export default function PatternForm() {
  return (
    <div className="card text-center">
      <h2>Add a New Pattern to your Catalogue</h2>
      <form>
        <input
          id="name"
          name="name"
          // value={formInput.name}
          // onChange={handleChange}
          required
          placeholder="Name of Pattern"
        />
        <br />
        <input
          id="image"
          name="image"
          // value={formInput.image}
          // onChange={handleChange}
          required
          placeholder="Image URL"
        />
        <br />
        <input
          id="patternLink"
          name="patternLink"
          // value={formInput.deployedLink}
          // onChange={handleChange}
          required
          placeholder="Pattern Download URL"
        />
        <br />
        <select className="form-select" aria-label="Default select example">
          <option selected>Select Project Status</option>
          <option value="1">Not Started</option>
          <option value="2">In Progress</option>
          <option value="3">Complete</option>
        </select>
        <button type="submit" className="btn btn-info">
          {/* {obj.firebaseKey ? 'Update' : 'Post'} */}Submit
        </button>
      </form>
    </div>
  );
}
