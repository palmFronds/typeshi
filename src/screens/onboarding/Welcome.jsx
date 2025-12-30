import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/onboarding.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 0.8
    }
  }
};

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.4 }
  }
};

export default function Welcome() {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (window.track) {
      window.track('welcome_choice', { choice });
    }

    if (choice === 'skip') {
      window.parent.postMessage({ type: 'skip_flow' }, '*');
    } else if (choice === 'continue') {
      navigate('/onboarding/transition');
    }
  };

  const handleKeyDown = (e, choice) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChoice(choice);
    }
  };

  return (
    <motion.div
      className="onboarding-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.header className="onboarding-header" variants={headerVariants}>
        <h1 className="onboarding-title">
          hi there.<br />
          you're in. your verification is brewing.
        </h1>
        <p className="onboarding-subtitle">
          you can jump straight into the platform now...<br />
          or take a minute to get <em>much</em> better at making money.
        </p>
      </motion.header>

      <div className="onboarding-choices">
        <motion.div
          className="choice-card"
          role="button"
          tabIndex={0}
          aria-label="Skip to platform"
          onClick={() => handleChoice('skip')}
          onKeyDown={(e) => handleKeyDown(e, 'skip')}
          variants={cardVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="choice-title">take me to the platform.</h2>
          <p className="choice-subtitle">(i'll explore on my own for now)</p>
        </motion.div>

        <motion.div
          className="choice-card"
          role="button"
          tabIndex={0}
          aria-label="Continue onboarding"
          onClick={() => handleChoice('continue')}
          onKeyDown={(e) => handleKeyDown(e, 'continue')}
          variants={cardVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="choice-title">help me get better, <em>fast</em>.</h2>
          <p className="choice-subtitle">(get amazing at this.)</p>
        </motion.div>
      </div>

      <motion.footer className="onboarding-footer" variants={footerVariants}>
        powered by MoMoney
      </motion.footer>
    </motion.div>
  );
}
