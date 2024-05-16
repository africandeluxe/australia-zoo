import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Australia Zoo</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mammals">Mammals</Link></li>
          <li><Link to="/birds">Birds</Link></li>
          <li><Link to="/reptiles">Reptiles</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;