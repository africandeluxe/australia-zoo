import React from 'react';
import { Link } from 'react-router-dom';

const AnimalDetailPage = ({animal, handleClick, unsetAnimal}) => {
  const handleAnimals = () => {
    unsetAnimal(null)
    handleClick(null)
  }

  return (
    <div>
    <img src={animal.image} alt={animal.name} />
    <h2>{animal.name}</h2>
    <p>{animal.description}</p>
    <p>Diet: {animal.food}</p>
    <p>Group: <Link to={`/${animal.group.toLowerCase()}`}>{animal.group}</Link></p>
    <p>Lifespan: {animal.lifespan}</p>
    <p>Length: {animal.length}</p>
    <p>Weight: {animal.weight}</p>
    <p>Found: {animal.found}</p>
    <button onClick={handleAnimals}>Back to Home</button>
  </div>
  );
};

export default AnimalDetailPage;