interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function Select({
  id,
  label,
  value,
  options,
  onChange,
  disabled = false,
  className = '',
}: SelectProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm text-kyc-muted"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full
            appearance-none
            bg-kyc-surface2
            border border-kyc-border
            rounded-kyc
            px-3 py-2.5
            pr-10
            text-base text-kyc-text
            disabled:opacity-50
            disabled:cursor-not-allowed
            focus:outline-none
            focus:ring-2
            focus:ring-kyc-focusRing
            focus:border-kyc-primary
            transition-colors
          `}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-kyc-muted"
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
    </div>
  );
}
