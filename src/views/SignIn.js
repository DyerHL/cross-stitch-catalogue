import React from 'react';
import { signInUser } from '../api/auth';
import crossStitchCatalogue from '../assets/crossStitchCatalogue.png';

export default function SignIn() {
  return (
    <div className="text-center mt-5">
      <div>
        <img
          src={crossStitchCatalogue}
          alt="..."
          style={{ width: '18rem', margin: '.5rem' }}
        />
      </div>
      <p>
        This is an app to keep track of threadcraft patterns and the threads
        required to complete them
      </p>
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Sign In
      </button>
    </div>
  );
}
