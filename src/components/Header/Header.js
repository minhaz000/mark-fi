import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  
  return (
    <div>
       {/* Hello world */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container py-2">
      <Link className="navbar-brand fw-bolder" to="/">
      MarkFi
      </Link>
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
            <Link className="nav-link " aria-current="page" to="/">
              Home
            </Link>
           
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quiz">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    </div>
  );
}

export default Header;