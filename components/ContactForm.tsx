"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormFeedbackToast from "@/components/FormFeedbackToast";
import { submitContactRequest } from "@/lib/formSubmissionHandlers";
import type { ContactSubmissionPayload } from "@/lib/formSubmissionTypes";

interface ContactFormProps {
  subjects?: string[];
}

const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

const validationSchema = Yup.object({
  full_name: Yup.string().trim().min(2).required("Full name is required."),
  phone: Yup.string()
    .trim()
    .matches(phoneRegex, "Enter a valid phone number.")
    .required("Phone number is required."),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address.")
    .required("Email address is required."),
  subject: Yup.string().trim().required("Subject is required."),
  message: Yup.string()
    .trim()
    .min(3, "Message must be at least 3 characters.")
    .required("Message is required."),
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

export default function ContactForm({
  subjects = [
    "General Enquiry",
    "Test Ride",
    "Service Booking",
    "Parts & Accessories",
    "Career",
  ],
}: ContactFormProps) {
  const pathname = usePathname();
  const [toast, setToast] = useState<ToastState | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const formik = useFormik<ContactSubmissionPayload>({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      subject: subjects[0],
      message: "",
      source_page: pathname || "/contact",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setToast(null);
      setStatus(undefined);

      const response = await submitContactRequest(values);

      if (response.success) {
        setToast({
          type: "success",
          title: "Message Sent",
          message: response.message,
        });
        resetForm({
          values: {
            full_name: "",
            phone: "",
            email: "",
            subject: subjects[0],
            message: "",
            source_page: pathname || "/contact",
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
      <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
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
              (formik.touched.phone && formik.errors.phone) || apiErrors.phone?.[0]
            }
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
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
              (formik.touched.email && formik.errors.email) || apiErrors.email?.[0]
            }
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
            Subject *
          </label>
          <select
            className="form-input"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            disabled={formik.isSubmitting}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError
            message={
              (formik.touched.subject && formik.errors.subject) ||
              apiErrors.subject?.[0]
            }
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#888]">
          Message *
        </label>
        <textarea
          className="form-input min-h-[120px] resize-y"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          disabled={formik.isSubmitting}
          placeholder="Tell us how we can help..."
        />
        <FieldError
          message={
            (formik.touched.message && formik.errors.message) ||
            apiErrors.message?.[0]
          }
        />
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full bg-[#E8231A] py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C41C14] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formik.isSubmitting ? (
          <LoadingLabel text="SENDING..." />
        ) : (
          "SEND MESSAGE"
        )}
      </button>
      </form>
    </>
  );
}
