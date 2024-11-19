import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
