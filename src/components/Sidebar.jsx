import React from 'react';

const Sidebar = ({ animals, setActiveAnimal }) => {
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