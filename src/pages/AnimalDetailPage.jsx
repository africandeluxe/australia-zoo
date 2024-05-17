import React from 'react';
import { useParams } from 'react-router-dom';
import animals from '../data/animals';
import AnimalDetail from '../components/AnimalDetail';

const AnimalDetailPage = () => {
  const { name } = useParams();
  const animal = animals.find(animal => animal.name.toLowerCase() === name.toLowerCase());

  if (!animal) {
    return <p>Animal not found</p>;
  }

  return (
    <div>
      <AnimalDetail animal={animal} />
    </div>
  );
};

export default AnimalDetailPage;