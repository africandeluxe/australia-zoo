import React from 'react';
import { Link } from 'react-router-dom';

const AnimalDetail = ({ animal }) => {
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
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AnimalDetail;