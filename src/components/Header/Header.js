import React from 'react';
import { rootContext  } from '../../Context';
function Header(props) {
  
  return (
    <div>
       {/* Hello world */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container py-2">
      <a className="navbar-brand" href="#">
      MarkFi
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    </div>
  );
}

export default Header;