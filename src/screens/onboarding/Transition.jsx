import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../styles/onboarding.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const fantasticVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2
    }
  }
};

const welcomeVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.5
    }
  }
};

export default function Transition() {
  useEffect(() => {
    if (window.track) {
      window.track('transition_viewed');
    }
    // Auto-navigation removed - next screen TBD
  }, []);

  return (
    <motion.div
      className="onboarding-container transition-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="transition-content">
        <motion.h1
          className="transition-title"
          variants={fantasticVariants}
        >
          fantastic.
        </motion.h1>
        <motion.h2
          className="transition-subtitle"
          variants={welcomeVariants}
        >
          welcome to moMoney
        </motion.h2>
      </div>
    </motion.div>
  );
}
