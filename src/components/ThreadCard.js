import React from 'react';

export default function ThreadCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div>Color Name</div>
        <div># needed</div>
        <button type="button" href="#" className="btn btn-primary">
          Own
        </button>
        <button type="button" href="#" className="btn btn-primary">
          Edit
        </button>
        <button type="button" href="#" className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
}
