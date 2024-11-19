import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
