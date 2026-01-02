import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './screens/landing/LandingPage';
import DemoPlaceholder from './screens/demo/DemoPlaceholder';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPlaceholder />} />
      </Routes>
    </AnimatePresence>
  );
}
