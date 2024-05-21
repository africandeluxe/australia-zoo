import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <img src="images/zoo-logo.png" alt="Australia Zoo Logo" className={styles.logo} />
      </div>
      <div className={styles.title}>Australia Zoo
      </div>
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