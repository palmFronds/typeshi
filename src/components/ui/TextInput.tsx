interface TextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  className?: string;
}

export function TextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  readOnly = false,
  type = 'text',
  required = false,
  className = '',
}: TextInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm text-kyc-muted"
      >
        {label}
        {required && <span className="text-kyc-primary ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={`
          w-full
          bg-kyc-surface2
          border border-kyc-border
          rounded-kyc
          px-3 py-2.5
          text-base text-kyc-text
          placeholder:text-kyc-muted
          disabled:opacity-50
          disabled:cursor-not-allowed
          read-only:bg-kyc-surface
          read-only:cursor-default
          focus:outline-none
          focus:ring-2
          focus:ring-kyc-focusRing
          focus:border-kyc-primary
          transition-colors
        `}
      />
    </div>
  );
}
