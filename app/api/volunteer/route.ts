import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, area, availability, consent } = body

    // Validate required fields
    if (!name || !email || !phone || !area || !availability || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if Google Sheets credentials are configured
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

    if (!privateKey || !clientEmail || !spreadsheetId) {
      console.error("Google Sheets API credentials not configured")
      return NextResponse.json(
        { error: "Server configuration error. Please contact the administrator." },
        { status: 500 }
      )
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Format the data for Google Sheets
    const timestamp = new Date().toLocaleString("he-IL", {
      timeZone: "Asia/Jerusalem",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    const areaString = Array.isArray(area) ? area.join(", ") : area
    const availabilityString = Array.isArray(availability) ? availability.join(", ") : availability

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G", // Adjust range as needed
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            timestamp,
            name,
            email,
            phone,
            areaString,
            availabilityString,
            consent ? "Yes" : "No",
          ],
        ],
      },
    })

    return NextResponse.json(
      { success: true, message: "Volunteer registration submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error submitting volunteer form:", error)
    return NextResponse.json(
      {
        error: "Failed to submit registration. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
