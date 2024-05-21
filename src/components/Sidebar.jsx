import React from 'react';

const Sidebar = ({ animals, setActiveAnimal }) => {
  const handleClick = (animal) => {
    setActiveAnimal(animal)
  }
  return (
    <aside>
      <ul>
        {animals.map(animal => (
          <li key={animal.name} onClick={() => handleClick(animal)}>
              {animal.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;