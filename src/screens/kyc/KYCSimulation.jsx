import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/kyc.css';

export default function KYCSimulation() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.track) {
      window.track('kyc_simulation_viewed');
    }
  }, []);

  const handleComplete = () => {
    if (isLoading) return;

    setIsLoading(true);
    if (window.track) {
      window.track('kyc_simulation_completed');
    }

    setTimeout(() => {
      navigate('/onboarding/welcome');
    }, 1500);
  };

  return (
    <div className="kyc-container">
      {/* Progress Bar */}
      <div className="kyc-progress-bar">
        <div className="kyc-progress-indicator">
          <span>KYC 80%</span>
          <div className="kyc-progress-fill-container">
            <div className="kyc-progress-fill"></div>
          </div>
          <span className="kyc-next-step">→ next: explore platform</span>
        </div>
      </div>

      {/* Header */}
      <div className="kyc-header">
        <h1>Hello John, complete your KYC verification here!</h1>
      </div>

      {/* Background Form (Non-interactive) */}
      <div className="kyc-background-form">
        <div className="form-section">
          <h2 className="form-section-title">Personal Information</h2>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Full Legal Name</label>
              <input className="form-input" value="John Smith" readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input className="form-input" value="john.smith@email.com" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Phone Number</label>
              <input className="form-input" value="+1 (555) 123-4567" readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">Date of Birth</label>
              <input className="form-input" value="01/15/1990" readOnly />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-section-title">Residential Address</h2>
          <div className="form-row single">
            <div className="form-field">
              <label className="form-label">Street Address</label>
              <input className="form-input" value="123 Main Street, Apt 4B" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">City</label>
              <input className="form-input" value="New York" readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">State/Province</label>
              <input className="form-input" value="New York" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Postal Code</label>
              <input className="form-input" value="10001" readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">Country</label>
              <input className="form-input" value="United States" readOnly />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-section-title">Employment Information</h2>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Employer</label>
              <input className="form-input" value="Tech Corp Inc." readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">Occupation</label>
              <input className="form-input" value="Software Engineer" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Annual Income</label>
              <input className="form-input" value="$75,000 - $100,000" readOnly />
            </div>
            <div className="form-field">
              <label className="form-label">Source of Funds</label>
              <input className="form-input" value="Employment Income" readOnly />
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Document Upload Card */}
      <motion.div
        className="kyc-document-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="document-card-title">Document Verification</h2>

        <div className="document-section">
          <span className="document-section-label">National Identification</span>
          <div className="document-uploads">
            <div className="document-upload-item uploaded">
              <span className="document-upload-label">Front Page</span>
              <span className="document-upload-status">Uploaded</span>
            </div>
            <div className="document-upload-item uploaded">
              <span className="document-upload-label">Back Page</span>
              <span className="document-upload-status">Uploaded</span>
            </div>
          </div>
        </div>

        <div className="document-section">
          <span className="document-section-label">Proof of Address</span>
          <div className="document-uploads">
            <div className="document-upload-item uploaded">
              <span className="document-upload-label">Utility Bill</span>
              <span className="document-upload-status">Uploaded</span>
            </div>
            <div className="document-upload-item uploaded">
              <span className="document-upload-label">Bank Statement</span>
              <span className="document-upload-status">Uploaded</span>
            </div>
          </div>
        </div>

        <motion.button
          className={`kyc-complete-button ${isLoading ? 'loading' : ''}`}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
          onClick={handleComplete}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Verifying...
            </>
          ) : (
            'Complete Verification'
          )}
        </motion.button>
      </motion.div>

      {/* Privacy Disclaimer */}
      <div className="kyc-disclaimer">
        <p className="kyc-disclaimer-text">
          <span className="kyc-disclaimer-icon">✓</span>
          The above information is collected to better understand your investment profile.
          Your personal information will be encrypted and transmitted in a secure manner.
        </p>
      </div>
    </div>
  );
}
