import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './screens/landing/LandingPage';
import KycVerifyAddressReviewPage from './pages/KycVerifyAddressReviewPage';
import KycSubmittedPage from './pages/KycSubmittedPage';
import WelcomePage from './pages/WelcomePage';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<KycVerifyAddressReviewPage />} />
        <Route path="/demo/submitted" element={<KycSubmittedPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </AnimatePresence>
  );
}
