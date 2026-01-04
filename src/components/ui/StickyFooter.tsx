import React from 'react';

interface StickyFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function StickyFooter({ children, className = '' }: StickyFooterProps) {
  return (
    <>
      {/* Spacer for mobile sticky footer */}
      <div className="h-24 md:hidden" aria-hidden="true" />

      {/* Mobile: sticky footer */}
      <div
        className={`
          fixed bottom-0 left-0 right-0
          md:relative md:bottom-auto md:left-auto md:right-auto
          bg-kyc-bg
          border-t border-kyc-border
          md:border-t-0
          p-4
          md:p-0
          md:mt-6
          z-10
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
}
