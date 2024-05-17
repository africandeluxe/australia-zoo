import React from 'react';
import { Link } from 'react-router-dom';

const AnimalSummary = ({ animal }) => {
  return (
    <div className="animal-summary">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description.substring(0, 200)}...</p>
      <p>Diet: {animal.food}</p>
      <p>Group: <Link to={`/${animal.group.toLowerCase()}`}>{animal.group}</Link></p>
      <Link to={`/animal/${animal.name.toLowerCase()}`}>Read More</Link>
    </div>
  );
};

export default AnimalSummary;