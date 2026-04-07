import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('[Workshop Booking]', new Date().toISOString(), JSON.stringify(body, null, 2))
    return NextResponse.json({
      success: true,
      message: 'Your service appointment has been requested. We will confirm the date and time within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
