import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';

const AnimalSummary = ({ animal, handleClick }) => {
  return (
    <div className={styles.animalSummary}>
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description.substring(0, 200)}...</p>
      <p>Diet: {animal.food}</p>
      <p>Group: <Link to={`/${animal.group.toLowerCase()}`} className={styles.animalLink}>{animal.group}</Link></p>
      <button onClick={() => handleClick(animal)} className={styles.readMoreButton}>Read More</button>
    </div>
  );
};

export default AnimalSummary;