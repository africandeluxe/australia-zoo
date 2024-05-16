import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ animals, activeAnimal, setActiveAnimal }) => {
  return (
    <aside>
      <ul>
        {animals.map(animal => (
          <li key={animal.name} onClick={() => setActiveAnimal(animal)}>
            {animal.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;