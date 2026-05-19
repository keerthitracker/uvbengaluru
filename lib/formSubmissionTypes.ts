export type FormSubmissionErrors = Record<string, string[]>;

export interface TestRideSubmissionPayload {
  full_name: string;
  phone: string;
  email: string;
  model: string;
  preferred_date: string;
  preferred_slot: string;
  notes: string;
  source_page: string;
}

export interface ContactSubmissionPayload {
  full_name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source_page: string;
}

export interface WorkshopBookingSubmissionPayload {
  full_name: string;
  phone: string;
  email: string;
  model: string;
  service_type: string;
  preferred_date: string;
  description: string;
  source_page: string;
}

export interface FormSubmissionSuccessResponse {
  success: true;
  message: string;
  data?: unknown;
}

export interface FormSubmissionErrorResponse {
  success: false;
  message: string;
  errors?: FormSubmissionErrors;
}

export type FormSubmissionResponse =
  | FormSubmissionSuccessResponse
  | FormSubmissionErrorResponse;
