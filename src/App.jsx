import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './screens/landing/LandingPage';
import KYCSimulation from './screens/kyc/KYCSimulation';
import Welcome from './screens/onboarding/Welcome';
import Transition from './screens/onboarding/Transition';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<KYCSimulation />} />
        <Route path="/onboarding/welcome" element={<Welcome />} />
        <Route path="/onboarding/transition" element={<Transition />} />
      </Routes>
    </AnimatePresence>
  );
}
