import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalSummary from '../components/AnimalSummary';
import animals from '../data/animals';
import '../styles.module.css';

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
    <div className="container">
      <Sidebar animals={animals} setActiveAnimal={handleAnimalClick} />
      <main>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <p>Welcome to the Australia Zoo!</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;