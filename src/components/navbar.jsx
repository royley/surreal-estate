import React from 'react';
import '../navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () =>
  <div className="NavBar">
    <div className="fas fa-home">Surreal Estate</div>
    <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add Properties</Link>
    </ul>
  </div>

export default NavBar;
