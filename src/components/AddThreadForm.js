import React from 'react';

export default function AddThreadForm() {
  return (
    <div className="card text-center">
      <form>
        <input
          id="colorName"
          name="colorName"
          // value={formInput.colorName}
          // onChange={handleChange}
          required
          placeholder="Thread Color Name"
        />
        <input
          id="numberNeeded"
          name="numberNeeded"
          // value={formInput.numberNeeded}
          // onChange={handleChange}
          required
          placeholder="# Skeins Needed"
        />
        <button type="submit" className="btn btn-info">
          {/* {obj.firebaseKey ? 'Add' : 'Update'} */}Add
        </button>
      </form>
    </div>
  );
}
