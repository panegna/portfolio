"use server";

import { EmailTemplate } from "@/components/forms/emailTemplate";
import { Resend } from "resend";

import { formSchema } from "@/lib/schema";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { error: "Données invalides", issues: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, mail, content } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.RESEND_EMAIL_TO!],
      subject: "Nouveau message | Portfolio",
      react: EmailTemplate({ name, mail, content }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
