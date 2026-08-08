import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("New enquiry:", data);

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 400 }
    );
  }
}