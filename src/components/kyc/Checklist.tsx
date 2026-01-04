interface ChecklistItem {
  id: string;
  text: string;
}

interface ChecklistProps {
  title?: string;
  items: ChecklistItem[];
  className?: string;
}

export function Checklist({ title, items, className = '' }: ChecklistProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-xs text-kyc-muted uppercase tracking-wide mb-3">
          {title}
        </h3>
      )}
      <ul className="space-y-2" role="list">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 text-sm text-kyc-muted"
          >
            <span className="flex-shrink-0 mt-0.5" aria-hidden="true">
              ✓
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Default requirements for address verification
export const addressVerificationRequirements: ChecklistItem[] = [
  {
    id: 'name-match',
    text: 'Name and address must match your details',
  },
  {
    id: 'recent-document',
    text: 'Document issued within last 3 months',
  },
];
