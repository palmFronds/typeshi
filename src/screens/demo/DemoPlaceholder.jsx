import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DemoPlaceholder() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 600,
          color: '#ffffff',
          margin: '0 0 1rem 0',
          letterSpacing: '-0.02em'
        }}>
          Under Construction
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#737373',
          margin: '0 0 2.5rem 0',
          maxWidth: '400px'
        }}>
          We're building something new. Check back soon.
        </p>
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: 500,
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
