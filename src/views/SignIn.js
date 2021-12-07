import React from 'react';
import { signInUser } from '../api/auth';

export default function SignIn() {
  return (
    <div className="text-center mt-5">
      <div>Logo</div>
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Sign In
      </button>
      <p>
        This is an app to keep track of threadcraft patterns and the threads
        required to complete them
      </p>
    </div>
  );
}
