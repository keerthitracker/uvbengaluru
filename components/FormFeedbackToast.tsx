"use client";

import { useEffect } from "react";

interface FormFeedbackToastProps {
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export default function FormFeedbackToast({
  type,
  title,
  message,
  onClose,
}: FormFeedbackToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 6000);

    return () => window.clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed right-6 top-6 z-50 w-[calc(100vw-2rem)] max-w-sm">
      <div
        className={`border p-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm ${
          isSuccess
            ? "border-[#C8FF00]/40 bg-[#161616]/95"
            : "border-[#E8231A]/40 bg-[#161616]/95"
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border ${
              isSuccess
                ? "border-[#C8FF00]/40 text-[#C8FF00]"
                : "border-[#E8231A]/40 text-[#FF6B63]"
            }`}
          >
            {isSuccess ? (
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              {title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#B9B9B9]">
              {message}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#777] transition-colors hover:text-white"
            aria-label="Close notification"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
