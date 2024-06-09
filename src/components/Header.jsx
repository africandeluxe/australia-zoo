import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="images/zoo-logo.png" alt="Australia Zoo Logo" className={styles.logo} />
      <h1 className={styles.title}>Australia Zoo</h1>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
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