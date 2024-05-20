import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Styles.module.css';

const AnimalSummary = ({ animal }) => {
  return (
    <div className={styles.animalSummary}>
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description.substring(0, 200)}...</p>
      <p>Diet: {animal.food}</p>
      <p>Group: <Link to={`/${animal.group.toLowerCase()}`} className={styles.animalLink}>{animal.group}</Link></p>
      <Link to={`/animal/${animal.name.toLowerCase()}`} className={styles.readMoreButton}>Read More</Link>
    </div>
  );
};

export default AnimalSummary;