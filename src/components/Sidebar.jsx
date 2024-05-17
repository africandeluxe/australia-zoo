import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ animals, setActiveAnimal }) => {
  return (
    <aside>
      <ul>
        {animals.map(animal => (
          <li key={animal.name}>
            <Link to={`/animal/${animal.name.toLowerCase()}`} onClick={() => setActiveAnimal(animal)}>
              {animal.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;