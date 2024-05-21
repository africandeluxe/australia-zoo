import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalSummary from '../components/AnimalSummary';
import animals from '../data/animals';
import styles from '../Styles.module.css';
import AnimalDetailPage from './AnimalDetailPage';

const HomePage = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

const [showAnimalDetails, setShowAnimalDetails] = useState(null);

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
        {!showAnimalDetails &&
        activeAnimal ? (
          <AnimalSummary animal={activeAnimal} handleClick={setShowAnimalDetails}/>
        ) : (
          <p>Welcome to the Australia Zoo!</p>
        )
      }
      {showAnimalDetails && 
      <AnimalDetailPage animal={showAnimalDetails} handleClick={setShowAnimalDetails} unsetAnimal={setActiveAnimal} /> }
      </div>
    </div>
  );
};

export default HomePage;