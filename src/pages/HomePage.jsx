import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalSummary from '../components/AnimalSummary';
import animals from '../data/animals';
import styles from '/Users/miski/frontend-programing/JSframeworks/australia-zoo/src/styles/Styles.module.css'

const HomePage = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setActiveAnimal(prevActiveAnimal => {
      if (prevActiveAnimal && prevActiveAnimal.name === animal.name) {
        return null;
      }
      return animal;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <Sidebar animals={animals} setActiveAnimal={handleAnimalClick} />
      </div>
      <div className={styles.mainContent}>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <p>Welcome to the Australia Zoo!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;