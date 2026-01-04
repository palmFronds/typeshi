import React from 'react';

interface ReadOnlyFieldProps {
  label: string;
  value: string;
  className?: string;
}

export function ReadOnlyField({ label, value, className = '' }: ReadOnlyFieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-xs text-kyc-muted uppercase tracking-wide">
        {label}
      </span>
      <span className="text-base text-kyc-text">
        {value || '—'}
      </span>
    </div>
  );
}

interface ReadOnlyFieldGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ReadOnlyFieldGroup({ children, className = '' }: ReadOnlyFieldGroupProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {children}
    </div>
  );
}
