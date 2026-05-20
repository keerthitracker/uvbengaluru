"use client";

import axios from "axios";
import type {
  FormSubmissionErrors,
  FormSubmissionResponse,
} from "@/lib/formSubmissionTypes";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again.";

function normalizeErrors(input: unknown): FormSubmissionErrors | undefined {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return undefined;
  }

  const normalized: FormSubmissionErrors = {};

  for (const [key, value] of Object.entries(input)) {
    if (Array.isArray(value)) {
      normalized[key] = value.map((item) => String(item));
      continue;
    }

    if (typeof value === "string") {
      normalized[key] = [value];
    }
  }

  return Object.keys(normalized).length > 0 ? normalized : undefined;
}

export async function submitFormWithAxios<TPayload>(
  endpoint: string,
  payload: TPayload,
): Promise<FormSubmissionResponse> {
  try {
    const response = await axios.post<FormSubmissionResponse>(endpoint, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 15000,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        typeof error.response?.data?.message === "string"
          ? error.response.data.message
          : error.code === "ECONNABORTED"
            ? "The request timed out. Please try again."
            : "Network error. Please check your connection and try again.";

      const errors = normalizeErrors(error.response?.data?.errors);

      return {
        success: false,
        message: errors ? "Please correct the highlighted fields." : message,
        errors,
      };
    }

    return {
      success: false,
      message: DEFAULT_ERROR_MESSAGE,
    };
  }
}
