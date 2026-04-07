import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('[Test Ride Booking]', new Date().toISOString(), JSON.stringify(body, null, 2))
    return NextResponse.json({
      success: true,
      message: 'Your test ride request has been received. We will confirm your slot within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
