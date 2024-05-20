import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalDetail from '../components/AnimalDetail';
import animals from '../data/animals';
import styles from '../styles/Styles.module.css'

const GroupPage = ({ group }) => {
  const filteredAnimals = animals.filter(animal => animal.group.toLowerCase() === group);
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
      <Sidebar animals={filteredAnimals} setActiveAnimal={setActiveAnimal} />
      </aside>
      <div className={styles.mainContent}>
        {activeAnimal ? (
          <AnimalDetail animal={activeAnimal} />
        ) : (
          <p>Welcome to the {group} section!</p>
        )}
      </div>
    </div>
  );
};

export default GroupPage;