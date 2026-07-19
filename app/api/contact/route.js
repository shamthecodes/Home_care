import { NextResponse } from "next/server";

const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const OWNER_PHONE = "919380050238";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 },
      );
    }

    // Save to Google Sheets via webhook
    if (GOOGLE_SHEETS_URL) {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
