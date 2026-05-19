"use client";

import { submitFormWithAxios } from "@/lib/formSubmissionClient";
import type {
  ContactSubmissionPayload,
  FormSubmissionResponse,
  TestRideSubmissionPayload,
  WorkshopBookingSubmissionPayload,
} from "@/lib/formSubmissionTypes";

export function submitTestRideRequest(
  payload: TestRideSubmissionPayload,
): Promise<FormSubmissionResponse> {
  return submitFormWithAxios("/api/test-ride", payload);
}

export function submitContactRequest(
  payload: ContactSubmissionPayload,
): Promise<FormSubmissionResponse> {
  return submitFormWithAxios("/api/contact", payload);
}

export function submitWorkshopBookingRequest(
  payload: WorkshopBookingSubmissionPayload,
): Promise<FormSubmissionResponse> {
  return submitFormWithAxios("/api/workshop-booking", payload);
}
