"use server";
import ConfirmationEmail from "@/emails/confirmation";
import SenderEmail from "@/emails/sender";
import { Resend } from "resend";
import { cookies } from "next/headers";

export async function sendMail(formData: FormData) {
  const form = formData;
  const name = form.get("name") as string;
  const email = form.get("email") as string;
  const subject = form.get("subject") as string;
  const body = form.get("body") as string;

  const resend = new Resend("re_13dn2vGH_eF14x8HZUDtorMrjr6DXpjzg");

  if (cookies().get("emailSent")) {
    return;
  }
  cookies().set("emailSent", "true");

  await resend.emails.send({
    from: "portfolio@mail.arinji.com",
    to: "arinjaydhar205@gmail.com",
    subject: "New Contact Form Submission",
    react: (
      <SenderEmail name={name} email={email} subject={subject} body={body} />
    ),
  });

  await resend.emails.send({
    from: "portfolio@mail.arinji.com",
    to: email,
    subject: "Contact Form Submission Response",
    react: <ConfirmationEmail name={name} />,
  });
}
