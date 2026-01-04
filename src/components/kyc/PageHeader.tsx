interface PageHeaderProps {
  title: string;
  instruction?: string;
  className?: string;
}

export function PageHeader({ title, instruction, className = '' }: PageHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-xl md:text-2xl font-semibold text-kyc-text">
        {title}
      </h1>
      {instruction && (
        <p className="mt-2 text-sm md:text-base text-kyc-muted">
          {instruction}
        </p>
      )}
    </div>
  );
}
