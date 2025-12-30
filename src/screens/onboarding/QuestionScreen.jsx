import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/onboarding.css';

export default function QuestionScreen({
  heading,
  subtext,
  cards,
  progressPercent,
  nextRoute,
  screenId,
  backgroundOverlay = ''
}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSelect = (cardId) => {
    if (selected) return;
    setSelected(cardId);

    if (window.track) {
      window.track(`${screenId}_selected`, { choice: cardId });
    }

    setTimeout(() => {
      navigate(nextRoute);
    }, 800);
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${progressPercent}%`,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    }
  };

  return (
    <div className={`onboarding-container question-screen ${backgroundOverlay}`}>
      <div className="progress-bar-container">
        <motion.div
          className="progress-bar-fill"
          variants={progressVariants}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div className="question-header">
        <h1 className="question-title" dangerouslySetInnerHTML={{ __html: heading }} />
        <p className="question-subtext" dangerouslySetInnerHTML={{ __html: subtext }} />
      </div>

      <div className="question-cards-grid">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`question-card ${selected === card.id ? 'selected' : ''}`}
            whileHover={!selected ? { y: -4, scale: 1.02 } : {}}
            whileTap={!selected ? { scale: 0.98 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => handleSelect(card.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(card.id);
              }
            }}
          >
            <div className="card-title" dangerouslySetInnerHTML={{ __html: card.title }} />
            <div className="card-subtitle" dangerouslySetInnerHTML={{ __html: card.subtitle }} />
          </motion.div>
        ))}
      </div>

      <footer className="onboarding-footer">powered by moMoney</footer>
    </div>
  );
}
