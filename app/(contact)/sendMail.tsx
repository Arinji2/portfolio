"use server";
import ConfirmationEmail from "@/emails/confirmation";
import SenderEmail from "@/emails/sender";
import { cookies } from "next/headers";
import { Resend } from "resend";

export async function sendMail(formData: FormData) {
  const form = formData;
  const name = form.get("name") as string;
  const email = form.get("email") as string;
  const subject = form.get("subject") as string;
  const body = form.get("body") as string;

  const resend = new Resend(process.env.EMAIL_KEY);

  if (cookies().get("emailSent")) {
    return;
  }
  cookies().set("emailSent", "true");

  await resend.emails.send({
    from: "portfolio@mail.arinji.com",
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
