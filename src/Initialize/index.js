import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from '../components/Navbar';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullname: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Routes uid={user.uid} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
