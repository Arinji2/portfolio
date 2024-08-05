"use client";
import { useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";
import { sendMail } from "./sendMail";
import { SubmitButton } from "./submit";

export function Form() {
  const [verified, setVerified] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const turnstile = useTurnstile();
  return (
    <form
      action={verified ? sendMail : undefined}
      className="w-full h-full flex flex-col md:flex-row items-start justify-center gap-6 mt-10"
    >
      <div className="md:w-[40%] w-[95%] md:h-[300px] h-[40%] flex flex-col items-center gap-5 justify-start">
        <div className="h-fit w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-5">
          <div className="w-[60%] h-full flex flex-col items-start justify-center">
            <label htmlFor="name" className="text-white text-[20px] shrink-0">
              Name:
            </label>
          </div>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full rounded-md  outline-transparent h-[50px] bg-brand-background-secondary p-3 text-white text-[20px] "
          />
        </div>
        <div className="h-fit w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-5">
          <div className="w-[60%] h-full flex flex-col items-start justify-center">
            <label
              htmlFor="subject"
              className="text-white text-[20px] shrink-0"
            >
              Subject:
            </label>
          </div>
          <input
            id="subject"
            name="subject"
            required
            type="text"
            className="w-full rounded-md  outline-transparent h-[50px] bg-brand-background-secondary p-3 text-white text-[20px] "
          />
        </div>
        <div className="h-fit w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-5">
          <div className="w-[60%] h-full flex flex-col items-start justify-center">
            <label htmlFor="email" className="text-white text-[20px] shrink-0">
              Your Email:
            </label>
          </div>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="w-full rounded-md  outline-transparent h-[50px] bg-brand-background-secondary p-3 text-white text-[20px] "
          />
        </div>
      </div>

      <input type="hidden" name="g-recaptcha-response" value={captchaToken} />
      <div className="md:w-[40%] w-[95%] md:h-[300px] h-fit flex flex-col items-center gap-5 justify-start">
        <div className="h-[60%] w-full flex flex-col md:flex-row items-start justify-start gap-5">
          <div className="w-[60%] md:w-[20%] h-full flex flex-col items-start justify-start">
            <label htmlFor="body" className="text-white text-[20px] shrink-0">
              Body:
            </label>
          </div>
          <textarea
            id="body"
            name="body"
            required
            className="w-full rounded-md resize-none outline-transparent h-[120px] md:h-full bg-brand-background-secondary p-3 text-white text-[20px] "
          />
        </div>
      </div>
      <div className="md:w-fit shrink-0 gap-5 w-[95%] md:h-fit h-[20%] flex flex-col items-center justify-end md:justify-start">
        <Turnstile
          sitekey="0x4AAAAAAAgk0KI7mfH7t1k9"
          fixedSize
          onVerify={(token) => {
            setVerified(true);
            setCaptchaToken(token);
            turnstile.reset();
          }}
        />
        <SubmitButton verified={verified} />
      </div>
    </form>
  );
}
