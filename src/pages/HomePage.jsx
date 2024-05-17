import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalCard from '../components/AnimalCard';
import animals from '../data/animals';
import '../styles/Global.module.css';

const HomePage = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  console.log(animals);

  return (
    <div className="container">
      <Sidebar animals={animals} setActiveAnimal={setActiveAnimal} />
      <main>
        {activeAnimal ? (
          <AnimalCard animal={activeAnimal} />
        ) : (
          <p>Welcome to the Australia Zoo!</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;