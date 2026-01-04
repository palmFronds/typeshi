import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StickyFooter } from '../components/ui/StickyFooter';
import { ProgressSteps } from '../components/kyc/ProgressSteps';
import { PageHeader } from '../components/kyc/PageHeader';
import { ReadOnlyField, ReadOnlyFieldGroup } from '../components/kyc/ReadOnlyField';
import { DocumentPreview } from '../components/kyc/DocumentPreview';
import { Checklist, addressVerificationRequirements } from '../components/kyc/Checklist';
import { TextInput } from '../components/ui/TextInput';

// Data
import {
  mockAddress,
  mockDocument,
  mockProgress,
  type Address,
  type AddressDocument,
} from '../data/mockKycData';

// Styles
import '../styles/kyc.css';

interface KycVerifyAddressReviewPageProps {
  initialAddress?: Address;
  initialDocument?: AddressDocument;
  onSubmit?: (data: { address: Address; document: AddressDocument }) => Promise<void>;
}

export function KycVerifyAddressReviewPage({
  initialAddress = mockAddress,
  initialDocument = mockDocument,
  onSubmit,
}: KycVerifyAddressReviewPageProps) {
  const navigate = useNavigate();

  // State
  const [address, setAddress] = useState<Address>(initialAddress);
  const [document, setDocument] = useState<AddressDocument>(initialDocument);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonMuted, setButtonMuted] = useState(true);

  // Delayed button activation to capture attention
  useEffect(() => {
    const timer = setTimeout(() => setButtonMuted(false), 975);
    return () => clearTimeout(timer);
  }, []);

  // Validation
  const isValid = Boolean(
    address.fullName &&
    address.addressLine1 &&
    address.city &&
    address.stateProvince &&
    address.postalCode &&
    address.country &&
    document.fileName &&
    document.status === 'uploaded'
  );

  // Handlers
  const handleAddressChange = useCallback((field: keyof Address, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleDocumentTypeChange = useCallback((type: AddressDocument['type']) => {
    setDocument((prev) => ({ ...prev, type }));
  }, []);

  const handleEditToggle = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit({ address, document });
      } else {
        // Default behavior: simulate API call
        console.log('Submitting KYC data:', { address, document });
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      // Navigate to submitted page
      navigate('/demo/submitted');
    } catch (error) {
      console.error('Submission failed:', error);
      setIsSubmitting(false);
    }
  }, [address, document, isValid, isSubmitting, navigate, onSubmit]);

  return (
    <div className="kyc-page">
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
        {/* Progress indicator */}
        <ProgressSteps progress={mockProgress} className="mb-8" />

        {/* Page header */}
        <PageHeader
          title="John, Verify Home Address"
          instruction="Review all details below before finishing your KYC."
          className="mb-8"
        />

        {/* Main content - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Address details + Requirements */}
          <div className="space-y-6">
            {/* Address details card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-medium text-kyc-text">
                    Address Details
                  </h2>
                  <button
                    type="button"
                    onClick={handleEditToggle}
                    className="
                      text-sm text-kyc-primary
                      hover:text-kyc-primaryHover
                      focus:outline-none
                      focus:underline
                      transition-colors
                    "
                    aria-expanded={isEditing}
                  >
                    {isEditing ? 'Done' : 'Edit'}
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <TextInput
                      id="fullName"
                      label="Full Name"
                      value={address.fullName}
                      onChange={(v) => handleAddressChange('fullName', v)}
                      required
                    />
                    <TextInput
                      id="addressLine1"
                      label="Address Line 1"
                      value={address.addressLine1}
                      onChange={(v) => handleAddressChange('addressLine1', v)}
                      required
                    />
                    <TextInput
                      id="addressLine2"
                      label="Address Line 2"
                      value={address.addressLine2 || ''}
                      onChange={(v) => handleAddressChange('addressLine2', v)}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <TextInput
                        id="city"
                        label="City"
                        value={address.city}
                        onChange={(v) => handleAddressChange('city', v)}
                        required
                      />
                      <TextInput
                        id="stateProvince"
                        label="State/Province"
                        value={address.stateProvince}
                        onChange={(v) => handleAddressChange('stateProvince', v)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <TextInput
                        id="postalCode"
                        label="ZIP/Postal Code"
                        value={address.postalCode}
                        onChange={(v) => handleAddressChange('postalCode', v)}
                        required
                      />
                      <TextInput
                        id="country"
                        label="Country"
                        value={address.country}
                        onChange={(v) => handleAddressChange('country', v)}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <ReadOnlyFieldGroup>
                    <ReadOnlyField label="Full Name" value={address.fullName} className="md:col-span-2" />
                    <ReadOnlyField label="Address Line 1" value={address.addressLine1} className="md:col-span-2" />
                    {address.addressLine2 && (
                      <ReadOnlyField label="Address Line 2" value={address.addressLine2} className="md:col-span-2" />
                    )}
                    <ReadOnlyField label="City" value={address.city} />
                    <ReadOnlyField label="State/Province" value={address.stateProvince} />
                    <ReadOnlyField label="ZIP/Postal Code" value={address.postalCode} />
                    <ReadOnlyField label="Country" value={address.country} />
                  </ReadOnlyFieldGroup>
                )}
              </CardContent>
            </Card>

            {/* Requirements checklist - visible on desktop, hidden on mobile until after document */}
            <div className="hidden md:block">
              <Card>
                <CardContent>
                  <Checklist
                    title="Requirements"
                    items={addressVerificationRequirements}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column: Document preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-base font-medium text-kyc-text">
                  Proof of Address
                </h2>
              </CardHeader>
              <CardContent>
                <DocumentPreview
                  document={document}
                  onTypeChange={handleDocumentTypeChange}
                  onView={() => console.log('View document')}
                  onReplace={() => console.log('Replace document')}
                />
              </CardContent>
            </Card>

            {/* Requirements checklist - mobile only */}
            <div className="md:hidden">
              <Card>
                <CardContent>
                  <Checklist
                    title="Requirements"
                    items={addressVerificationRequirements}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Desktop CTA - aligned bottom right */}
            <div className="hidden md:block">
              <PrimaryButton
                onClick={handleSubmit}
                disabled={!isValid}
                loading={isSubmitting}
                muted={buttonMuted}
              >
                Submit for verification
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Mobile sticky footer CTA */}
        <StickyFooter className="md:hidden">
          <PrimaryButton
            onClick={handleSubmit}
            disabled={!isValid}
            loading={isSubmitting}
            muted={buttonMuted}
          >
            Submit for verification
          </PrimaryButton>
        </StickyFooter>
      </div>
    </div>
  );
}

export default KycVerifyAddressReviewPage;
