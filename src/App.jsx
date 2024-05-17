import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MammalsPage from './pages/MammalsPage';
import BirdsPage from './pages/BirdsPage';
import ReptilesPage from './pages/ReptilesPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/mammals" element={<MammalsPage />} />
        <Route path="/birds" element={<BirdsPage />} />
        <Route path="/reptiles" element={<ReptilesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;