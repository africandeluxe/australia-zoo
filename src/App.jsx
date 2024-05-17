import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MammalsPage from './pages/MammalsPage';
import BirdsPage from './pages/BirdsPage';
import ReptilesPage from './pages/ReptilesPage';
import AnimalDetailPage from './pages/AnimalDetailPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/mammals" component={MammalsPage} />
        <Route path="/birds" component={BirdsPage} />
        <Route path="/reptiles" component={ReptilesPage} />
        <Route path="/animal/:name" component={AnimalDetailPage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;