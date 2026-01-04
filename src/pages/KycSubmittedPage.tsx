import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProgressSteps } from '../components/kyc/ProgressSteps';
import type { KycProgress } from '../data/mockKycData';
import '../styles/kyc.css';

const submittedProgress: KycProgress = {
  steps: ['Identity', 'Personal Info', 'Address', 'Review'],
  currentStep: 3, // Review step, fully complete
};

export function KycSubmittedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent scrollbars during transition
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => navigate('/welcome'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="kyc-page kyc-page-transition min-h-screen"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
        <ProgressSteps progress={submittedProgress} className="mb-8" />
      </div>
      <div className="flex flex-col items-center px-4 pt-16 md:pt-24">
        <div className="text-center max-w-md">
          {/* Loading spinner */}
          <div className="mb-6 flex justify-center" aria-hidden="true">
            <span className="inline-block w-10 h-10 border-4 border-kyc-primary border-t-transparent rounded-full animate-spin" />
          </div>

          <h1 className="text-xl md:text-2xl font-semibold text-kyc-text mb-3">
            Submitted for Verification
          </h1>

          <p className="text-base text-kyc-muted">
            Your address verification documents have been submitted.
            You'll receive a notification once the review is complete.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default KycSubmittedPage;
