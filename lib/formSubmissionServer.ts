import axios from "axios";
import { NextResponse } from "next/server";
import type { FormSubmissionErrors } from "@/lib/formSubmissionTypes";

const DEFAULT_FAILURE_MESSAGE = "Something went wrong. Please try again.";

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

function getApiBaseUrl() {
  const apiBaseUrl = process.env.API_BASE_URL?.trim();

  if (!apiBaseUrl) {
    throw new Error("API_BASE_URL is not configured.");
  }

  return apiBaseUrl.replace(/\/+$/, "");
}

export async function proxyFormSubmission(
  endpoint: string,
  payload: unknown,
  fallbackSuccessMessage: string,
) {
  try {
    const response = await axios.post(
      `${getApiBaseUrl()}${endpoint}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      },
    );

    return NextResponse.json({
      success: true,
      message:
        typeof response.data?.message === "string"
          ? response.data.message
          : fallbackSuccessMessage,
      data: response.data?.data ?? null,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 502;
      const errors = normalizeErrors(error.response?.data);
      const backendMessage =
        typeof error.response?.data?.message === "string"
          ? error.response.data.message
          : undefined;

      return NextResponse.json(
        {
          success: false,
          message:
            status === 400 && errors
              ? "Please correct the highlighted fields."
              : backendMessage ||
                (error.code === "ECONNABORTED"
                  ? "The server took too long to respond. Please try again."
                  : DEFAULT_FAILURE_MESSAGE),
          errors,
        },
        { status },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: DEFAULT_FAILURE_MESSAGE,
      },
      { status: 500 },
    );
  }
}
