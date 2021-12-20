import React from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse';
import logoNoText from '../assets/logoNoText.png';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoNoText} alt="logo" style={{ width: '70px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addpattern">
                Add New Pattern
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shoppinglist">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={signOutUser}
                type="button"
                className="basicButton"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
