// src/pages/GroupPage.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalDetail from '../components/AnimalDetail';
import animals from '../data/animals';

const GroupPage = ({ group }) => {
  const filteredAnimals = animals.filter(animal => animal.group.toLowerCase() === group);
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <div>
      <Sidebar animals={filteredAnimals} setActiveAnimal={setActiveAnimal} />
      <main>
        {activeAnimal ? (
          <AnimalDetail animal={activeAnimal} />
        ) : (
          <p>Welcome to the {group} section!</p>
        )}
      </main>
    </div>
  );
};

export default GroupPage;