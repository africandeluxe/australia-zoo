import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ animals, setActiveAnimal }) => {
  return (
    <aside>
      <ul>
        {animals.map(animal => (
          <li key={animal.name} onClick={() => setActiveAnimal(animal)}>
            <Link to={`/animal/${animal.name.toLowerCase()}`}>
              {animal.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;