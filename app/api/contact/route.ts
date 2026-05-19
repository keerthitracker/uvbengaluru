import { NextRequest, NextResponse } from "next/server";
import { proxyFormSubmission } from "@/lib/formSubmissionServer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    return proxyFormSubmission(
      "/api/uvbengaluru/contact-requests/",
      body,
      "Contact request received.",
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
