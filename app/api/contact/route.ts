import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('[Contact Form Submission]', new Date().toISOString(), JSON.stringify(body, null, 2))
    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. We will get back to you within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
