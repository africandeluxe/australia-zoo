import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import AnimalDetail from './components/AnimalDetail';
import animals from './data/animals';
import styles from './Styles.module.css'

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
      <Header />
      <div className={styles.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mammals" element={<GroupPage group="mammals" />} />
        <Route path="/birds" element={<GroupPage group="birds" />} />
        <Route path="/reptiles" element={<GroupPage group="reptiles" />} />
        <Route 
          path="/animal/:name" 
          element={<AnimalDetail animal={animals.find(animal => animal.name.toLowerCase() === window.location.pathname.split("/")[2])} />} 
        />
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;