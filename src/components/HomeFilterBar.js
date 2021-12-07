import React from 'react';

export default function HomeFilterBar() {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-primary active"
        aria-current="page"
      >
        All
      </button>
      <button type="button" className="btn btn-primary">
        In Progress
      </button>
      <button type="button" className="btn btn-primary">
        Not Started
      </button>
      <button type="button" className="btn btn-primary">
        Completed
      </button>
    </div>
  );
}
