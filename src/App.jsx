import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import VideoBackground from './components/VideoBackground';
import './App.css';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const Talent = lazy(() => import('./pages/Talent'));
const TalentDetail = lazy(() => import('./pages/TalentDetail'));
const Services = lazy(() => import('./pages/Services'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Login = lazy(() => import('./pages/Login'));

// Create a fallback spinner component
const AppSpinner = () => (
  <div className="loading-container" style={{ minHeight: '100vh' }}>
    <motion.div
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

function App() {
  return (
    <Router>
      <VideoBackground />
      <Suspense fallback={<AppSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
