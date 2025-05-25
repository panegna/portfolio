"use server";

import { EmailTemplate } from "@/components/forms/emailTemplate";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "@/lib/schema";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(emailData: z.infer<typeof formSchema>) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [`${process.env.RESEND_EMAIL_TO}`],
      subject: "Nouveau message | Portfolio",
      react: EmailTemplate({
        name: emailData.name,
        mail: emailData.mail,
        content: emailData.content,
      }) as React.ReactElement,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
