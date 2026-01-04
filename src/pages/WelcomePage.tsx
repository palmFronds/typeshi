import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import onboardBackground from '../assets/images/onboard_back.jpg';

interface GoalOption {
  id: string;
  primary: string;
  secondary: string;
}

const goalOptions: GoalOption[] = [
  {
    id: 'jump-in',
    primary: 'jump straight in.',
    secondary: '(i want to explore on my own)',
  },
  {
    id: 'get-better',
    primary: 'take a minute to learn.',
    secondary: '(i want to get better first)',
  },
];

export function WelcomePage() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    // TODO: Handle navigation or state update after selection
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${onboardBackground})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
      <div className="relative z-10 px-8 py-10 md:px-12 md:py-14 min-h-screen flex flex-col">
        {/* Header section */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-white text-lg md:text-xl lg:text-[26px] mb-2 pt-8 md:pt-12">
            hi there.
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[40px] font-bold mb-8 lowercase">
            you're in. your verification is brewing.
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-[22px] mt-10 text-center">
            you can jump straight into the platform now...<br />
            or take a minute to get <em className="italic">much</em> better at making money.
          </p>
        </div>

        {/* Options grid */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-2xl justify-center"
            role="radiogroup"
            aria-label="Select your goal"
          >
            {goalOptions.map((option, index) => {
              const isSelected = selectedGoal === option.id;
              return (
                <motion.button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleGoalSelect(option.id)}
                  className={`
                    relative flex flex-col items-center justify-center text-center
                    w-full md:w-[504px] lg:w-[600px] h-28 md:h-[134px] lg:h-[157px]
                    p-8 md:p-10 rounded-2xl md:rounded-3xl
                    transition-all duration-200 ease-out
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50
                    ${isSelected
                      ? 'bg-[rgba(255,235,205,1)] scale-[1.02] shadow-lg'
                      : 'bg-[rgba(255,235,205,0.85)] hover:bg-[rgba(255,235,205,0.95)] hover:scale-[1.01]'
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut'
                  }}
                  whileHover={{ scale: isSelected ? 1.02 : 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Selected indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl md:rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ border: '3px solid #7C3AED' }}
                    />
                  )}

                  <p className="text-[#D97706] font-bold text-base md:text-lg lg:text-xl mb-2">
                    {option.primary}
                  </p>
                  <p className="text-[#F59E0B] text-sm md:text-base">
                    {option.secondary}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-8">
          <p className="text-white text-sm md:text-[15px] opacity-90">
            powered by MoMoney.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default WelcomePage;
