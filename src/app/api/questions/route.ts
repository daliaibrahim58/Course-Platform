import { NextResponse } from "next/server";
import questions from "@/lib/questions.json";

export async function GET() {
  try {
    return NextResponse.json(questions.results); 
  } catch (err) {
    return NextResponse.json({ error: "Failed to load questions" }, { status: 500 });
  }
}
