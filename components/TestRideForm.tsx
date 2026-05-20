"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormFeedbackToast from "@/components/FormFeedbackToast";
import { submitTestRideRequest } from "@/lib/formSubmissionHandlers";
import type { TestRideSubmissionPayload } from "@/lib/formSubmissionTypes";

const models = [
  "X-47",
  "X-47 Original",
  "X-47 Original+",
  "X-47 Recon",
  "X-47 Recon+",
  "X-47 Desert Wing",
  "F77 Mach 2",
  "F77 SuperStreet",
];

const timeSlots = [
  "Morning - 10:00 AM to 12:00 PM",
  "Afternoon - 12:00 PM to 3:00 PM",
  "Evening - 3:00 PM to 6:00 PM",
];

const today = new Date().toISOString().split("T")[0];

const validationSchema = Yup.object({
  full_name: Yup.string().trim().min(2).required("Full name is required."),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number.")
    .required("Phone number is required."),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address.")
    .required("Email address is required."),
  model: Yup.string().trim().required("Please select a model."),
  preferred_date: Yup.string()
    .required("Preferred date is required.")
    .test(
      "not-in-past",
      "Preferred date cannot be in the past.",
      (value) => !value || value >= today,
    ),
  preferred_slot: Yup.string().trim().required("Please select a time slot."),
  notes: Yup.string().trim(),
  source_page: Yup.string().trim().required(),
});

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-red-400">{message}</p>;
}

function LoadingLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-2">
      <svg
        className="h-4 w-4 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
        />
      </svg>
      {text}
    </span>
  );
}

interface ToastState {
  type: "success" | "error";
  title: string;
  message: string;
}

export default function TestRideForm() {
  const pathname = usePathname();
  const [toast, setToast] = useState<ToastState | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const formik = useFormik<TestRideSubmissionPayload>({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      model: models[2],
      preferred_date: "",
      preferred_slot: timeSlots[0],
      notes: "",
      source_page: pathname || "/test-ride",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setToast(null);
      setStatus(undefined);

      const response = await submitTestRideRequest(values);

      if (response.success) {
        setToast({
          type: "success",
          title: "Test Ride Requested",
          message: response.message,
        });
        resetForm({
          values: {
            full_name: "",
            phone: "",
            email: "",
            model: models[2],
            preferred_date: "",
            preferred_slot: timeSlots[0],
            notes: "",
            source_page: pathname || "/test-ride",
          },
        });
        return;
      }

      setToast({
        type: "error",
        title: "Submission Failed",
        message: response.message,
      });
      setStatus({
        message: response.message,
        errors: response.errors,
      });
    },
  });

  const apiErrors = formik.status?.errors ?? {};

  return (
    <>
      {toast && (
        <FormFeedbackToast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={closeToast}
        />
      )}
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
              Full Name *
            </label>
            <input
              className="form-input"
              name="full_name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              disabled={formik.isSubmitting}
              placeholder="Your full name"
            />
            <FieldError
              message={
                (formik.touched.full_name && formik.errors.full_name) ||
                apiErrors.full_name?.[0]
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
              Phone Number *
            </label>
            <input
              className="form-input"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              disabled={formik.isSubmitting}
              type="tel"
              placeholder="+91 98765 43210"
            />
            <FieldError
              message={
                (formik.touched.phone && formik.errors.phone) ||
                apiErrors.phone?.[0]
              }
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
            Email Address *
          </label>
          <input
            className="form-input"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            disabled={formik.isSubmitting}
            type="email"
            placeholder="you@example.com"
          />
          <FieldError
            message={
              (formik.touched.email && formik.errors.email) ||
              apiErrors.email?.[0]
            }
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
            Model of Interest *
          </label>
          <select
            className="form-input"
            name="model"
            value={formik.values.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            disabled={formik.isSubmitting}
          >
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <FieldError
            message={
              (formik.touched.model && formik.errors.model) ||
              apiErrors.model?.[0]
            }
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
              Preferred Date *
            </label>
            <input
              className="form-input"
              name="preferred_date"
              value={formik.values.preferred_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              disabled={formik.isSubmitting}
              type="date"
              min={today}
            />
            <FieldError
              message={
                (formik.touched.preferred_date &&
                  formik.errors.preferred_date) ||
                apiErrors.preferred_date?.[0]
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
              Preferred Time Slot *
            </label>
            <select
              className="form-input"
              name="preferred_slot"
              value={formik.values.preferred_slot}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              disabled={formik.isSubmitting}
            >
              {timeSlots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <FieldError
              message={
                (formik.touched.preferred_slot &&
                  formik.errors.preferred_slot) ||
                apiErrors.preferred_slot?.[0]
              }
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
            Additional Notes
          </label>
          <textarea
            className="form-input min-h-[100px] resize-y"
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            placeholder="Any specific questions or requirements?"
          />
          <FieldError
            message={
              (formik.touched.notes && formik.errors.notes) ||
              apiErrors.notes?.[0]
            }
          />
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-[#E8231A] py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C41C14] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formik.isSubmitting ? (
            <LoadingLabel text="BOOKING..." />
          ) : (
            "BOOK MY TEST RIDE"
          )}
        </button>
        <p className="text-center text-xs text-[#555]">
          Our team will confirm your booking via phone within 24 hours.
        </p>
      </form>
    </>
  );
}
