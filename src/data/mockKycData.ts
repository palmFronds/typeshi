// Types
export interface Address {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

export interface AddressDocument {
  type: 'utility_bill' | 'bank_statement' | 'government_letter' | 'lease_agreement';
  fileName: string;
  uploadedAt: string;
  status: 'uploaded' | 'pending' | 'verified' | 'rejected';
  fileSize?: string;
}

export interface KycProgress {
  steps: string[];
  currentStep: number;
}

export const documentTypeLabels: Record<AddressDocument['type'], string> = {
  utility_bill: 'Utility Bill',
  bank_statement: 'Bank Statement',
  government_letter: 'Government Letter',
  lease_agreement: 'Lease Agreement',
};

export const documentTypeOptions: { value: AddressDocument['type']; label: string }[] = [
  { value: 'utility_bill', label: 'Utility Bill' },
  { value: 'bank_statement', label: 'Bank Statement' },
  { value: 'government_letter', label: 'Government Letter' },
  { value: 'lease_agreement', label: 'Lease Agreement' },
];

// Mock data for demo
export const mockAddress: Address = {
  fullName: 'John Smith',
  addressLine1: '123 Main Street',
  addressLine2: 'Apt 4B',
  city: 'New York',
  stateProvince: 'NY',
  postalCode: '10001',
  country: 'United States',
};

export const mockDocument: AddressDocument = {
  type: 'utility_bill',
  fileName: 'electric_bill_dec2025.pdf',
  uploadedAt: '2025-12-28T14:30:00Z',
  status: 'uploaded',
  fileSize: '1.2 MB',
};

export const mockProgress: KycProgress = {
  steps: ['Identity', 'Personal Info', 'Address', 'Review'],
  currentStep: 2, // 0-indexed, so this is step 3 of 4
};
