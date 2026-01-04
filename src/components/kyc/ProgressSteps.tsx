import React from 'react';
import type { KycProgress } from '../../data/mockKycData';

interface ProgressStepsProps {
  progress: KycProgress;
  className?: string;
}

export function ProgressSteps({ progress, className = '' }: ProgressStepsProps) {
  const { steps, currentStep } = progress;

  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-label={`Step ${currentStep + 1} of ${steps.length}: ${steps[currentStep]}`}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isUpcoming = index > currentStep;

        return (
          <React.Fragment key={step}>
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-2.5 h-2.5 rounded-full transition-colors
                  ${isCompleted ? 'bg-kyc-primary' : ''}
                  ${isCurrent ? 'bg-kyc-primary ring-4 ring-kyc-focusRing' : ''}
                  ${isUpcoming ? 'bg-kyc-border' : ''}
                `}
                aria-hidden="true"
              />
              {/* Step label - hidden on mobile, visible on desktop */}
              <span
                className={`
                  hidden md:block
                  mt-2 text-xs
                  ${isCurrent ? 'text-kyc-text' : 'text-kyc-muted'}
                `}
              >
                {step}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  w-8 md:w-12 h-0.5 -mt-4 md:mt-0 md:-translate-y-3
                  ${index < currentStep ? 'bg-kyc-primary' : 'bg-kyc-border'}
                `}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
