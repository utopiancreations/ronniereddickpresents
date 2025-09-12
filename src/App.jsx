import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Talent from './pages/Talent';
import Services from './pages/Services';
import ServicePage from './pages/services/ServicePage';
import TalentDetail from './pages/TalentDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import VideoBackground from './components/VideoBackground';
import './App.css';

function App() {
  return (
    <Router>
      <VideoBackground />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="talent" element={<Talent />} />
          <Route path="talent/:id" element={<TalentDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceName" element={<ServicePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
