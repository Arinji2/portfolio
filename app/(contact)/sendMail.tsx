"use server";
import ConfirmationEmail from "@/emails/confirmation";
import SenderEmail from "@/emails/sender";
import { cookies, headers } from "next/headers";
import { Resend } from "resend";

export async function sendMail(formData: FormData) {
  const form = formData;
  const name = form.get("name") as string;
  const email = form.get("email") as string;
  const subject = form.get("subject") as string;
  const body = form.get("body") as string;

  const token = form.get("g-recaptcha-response") as string;
  const cookieStore = await cookies();
  const headersStore = await headers();
  const ip = headersStore.get("CF-Connecting-IP")!;

  const secretKey = process.env.TURNSTILE_KEY!;
  // Validate the token by calling the
  // "/siteverify" API endpoint.
  let captchaFormData = new FormData();
  captchaFormData.append("secret", secretKey);
  captchaFormData.append("response", token);
  captchaFormData.append("remoteip", ip);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: captchaFormData,
    method: "POST",
  });

  const outcome = await result.json();
  if (!outcome.success) {
    cookieStore.set("emailSent", "true");
    return;
  }

  const resend = new Resend(process.env.EMAIL_KEY);

  if (cookieStore.get("emailSent")) {
    return;
  }
  cookieStore.set("emailSent", "true");

  await resend.emails.send({
    from: process.env.NEXT_PUBLIC_FROM_EMAIL!,
    to: email,
    subject: subject,
    react: <ConfirmationEmail name={name} />,
  });

  await resend.emails.send({
    from: "submissions@mail.arinji.com",
    to: "arinjaydhar205@gmail.com",
    subject: "New Contact Form Submission",

    react: (
      <SenderEmail body={body} email={email} subject={subject} name={name} />
    ),
  });
}
