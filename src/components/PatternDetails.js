import React from 'react';
import AddThreadForm from './AddThreadForm';
import ThreadCard from './ThreadCard';

export default function PatternDetails() {
  return (
    <>
      <div className="card">
        <div>
          <div>
            <div>
              <img src="..." className="img-fluid" alt="..." />
            </div>
            <div>
              <h5 className="card-title">Pattern Name</h5>
              <button type="button">link to download pattern</button>
              <button type="button">edit pattern details</button>
              <div>pattern Status</div>
            </div>
          </div>
        </div>
        <div>
          <div>threads.map</div>
          <div>
            <button type="button">+</button>
            <div>add form</div>
          </div>
        </div>
        <div>
          <button type="button">Delete Pattern from Catalogue</button>
        </div>
      </div>
      <ThreadCard />
      <AddThreadForm />
    </>
  );
}
