import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { symptoms , ageGroup , gender } = body;
    if (!symptoms) {
      return NextResponse.json(
        { error: "No symptoms provided." },
        { status: 400 }
      );
    }

    const ragRes = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms , age: ageGroup , gender}),
    });

    if (!ragRes.ok) {
      const errorText = await ragRes.text(); // For debugging
      console.error("❌ RAG backend error:", errorText);
      return NextResponse.json(
        { error: "RAG backend failed." },
        { status: 500 }
      );
    }

    const ragData = await ragRes.json();
    const treatmentArray = ragData.treatment
      ?.split("\n")
      .map((line: string) => line.trim())
      .filter((line: string) => line.startsWith("-") && !line.startsWith("---"))
      .map((line: string) => line.replace(/^-+\s*/, ""));
    return NextResponse.json({
      department: ragData.department,
      answer: ragData.answer,
      treatment:treatmentArray // ✅ include generated explanation
    });
  } catch (error) {
    console.error("🔥 API /analyze error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
