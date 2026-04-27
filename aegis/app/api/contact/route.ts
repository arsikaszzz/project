import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  goal: z.string().min(10),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Невалидный JSON" },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Проверьте поля формы",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // In production: forward to email/CRM. For now just log + ack.
  console.log("[contact] new lead:", {
    name: parsed.data.name,
    email: parsed.data.email,
    goalLength: parsed.data.goal.length,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
