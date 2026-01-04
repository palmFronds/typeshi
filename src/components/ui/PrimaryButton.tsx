import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  muted?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  'aria-label'?: string;
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  muted = false,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      className={`
        relative
        w-full
        px-6 py-3
        ${muted ? 'bg-kyc-border' : 'bg-kyc-primary hover:bg-kyc-primaryHover'}
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:bg-kyc-primary
        text-white
        font-medium
        text-base
        rounded-kyc
        transition-colors
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-kyc-focusRing
        focus:ring-offset-0
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Processing...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
