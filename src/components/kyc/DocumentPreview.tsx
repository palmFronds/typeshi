import type { AddressDocument } from '../../data/mockKycData';
import { documentTypeOptions } from '../../data/mockKycData';
import { Select } from '../ui/Select';

interface DocumentPreviewProps {
  document: AddressDocument;
  onTypeChange?: (type: AddressDocument['type']) => void;
  onView?: () => void;
  onReplace?: () => void;
  className?: string;
}

export function DocumentPreview({
  document,
  onTypeChange,
  onView,
  onReplace,
  className = '',
}: DocumentPreviewProps) {
  const statusColors: Record<AddressDocument['status'], string> = {
    uploaded: 'bg-kyc-surface2 text-kyc-muted',
    pending: 'bg-yellow-900/30 text-yellow-400',
    verified: 'bg-green-900/30 text-green-400',
    rejected: 'bg-red-900/30 text-red-400',
  };

  const statusLabels: Record<AddressDocument['status'], string> = {
    uploaded: 'Uploaded',
    pending: 'Pending Review',
    verified: 'Verified',
    rejected: 'Rejected',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Document type selector */}
      <Select
        id="document-type"
        label="Document Type"
        value={document.type}
        options={documentTypeOptions}
        onChange={(value) => onTypeChange?.(value as AddressDocument['type'])}
        disabled={!onTypeChange}
      />

      {/* Document preview area */}
      <div className="space-y-3">
        <span className="text-sm text-kyc-muted">Document Preview</span>

        <div
          className="
            relative
            bg-kyc-surface2
            border border-kyc-border
            rounded-kyc
            p-6
            flex flex-col items-center justify-center
            min-h-[160px]
            md:min-h-[200px]
          "
        >
          {/* Document icon */}
          <div className="text-4xl mb-3" aria-hidden="true">
            📄
          </div>

          {/* File name */}
          <p className="text-sm text-kyc-text font-medium text-center break-all">
            {document.fileName}
          </p>

          {/* File meta */}
          <p className="text-xs text-kyc-muted mt-1">
            {document.fileSize && `${document.fileSize} • `}
            {formatDate(document.uploadedAt)}
          </p>

          {/* Status badge */}
          <span
            className={`
              absolute top-3 right-3
              px-2 py-0.5
              text-xs font-medium
              rounded-full
              ${statusColors[document.status]}
            `}
          >
            {statusLabels[document.status]}
          </span>
        </div>

        {/* Actions */}
        {(onView || onReplace) && (
          <div className="flex gap-3">
            {onView && (
              <button
                type="button"
                onClick={onView}
                className="
                  text-sm text-kyc-primary
                  hover:text-kyc-primaryHover
                  hover:underline
                  focus:outline-none
                  focus:underline
                  transition-colors
                "
              >
                View
              </button>
            )}
            {onReplace && (
              <button
                type="button"
                onClick={onReplace}
                className="
                  text-sm text-kyc-muted
                  hover:text-kyc-text
                  hover:underline
                  focus:outline-none
                  focus:underline
                  transition-colors
                "
              >
                Replace
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
