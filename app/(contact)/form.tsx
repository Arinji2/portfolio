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
			className="mt-10 flex h-full w-full flex-col items-start justify-center gap-6 md:flex-row"
		>
			<div className="flex h-[40%] w-[95%] flex-col items-center justify-start gap-5 md:h-[300px] md:w-[40%]">
				<div className="flex h-fit w-full flex-col items-start justify-start gap-5 md:flex-row md:items-center">
					<div className="flex h-full w-[60%] flex-col items-start justify-center">
						<label htmlFor="name" className="shrink-0 text-[20px] text-white">
							Name:
						</label>
					</div>
					<input
						id="name"
						name="name"
						required
						type="text"
						className="h-[50px] w-full rounded-md bg-brand-background-secondary p-3 text-[20px] text-white outline-transparent "
					/>
				</div>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-5 md:flex-row md:items-center">
					<div className="flex h-full w-[60%] flex-col items-start justify-center">
						<label
							htmlFor="subject"
							className="shrink-0 text-[20px] text-white"
						>
							Subject:
						</label>
					</div>
					<input
						id="subject"
						name="subject"
						required
						type="text"
						className="h-[50px] w-full rounded-md bg-brand-background-secondary p-3 text-[20px] text-white outline-transparent "
					/>
				</div>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-5 md:flex-row md:items-center">
					<div className="flex h-full w-[60%] flex-col items-start justify-center">
						<label htmlFor="email" className="shrink-0 text-[20px] text-white">
							Your Email:
						</label>
					</div>
					<input
						id="email"
						name="email"
						required
						type="email"
						className="h-[50px] w-full rounded-md bg-brand-background-secondary p-3 text-[20px] text-white outline-transparent "
					/>
				</div>
			</div>

			<input type="hidden" name="g-recaptcha-response" value={captchaToken} />
			<div className="flex h-fit w-[95%] flex-col items-center justify-start gap-5 md:h-[300px] md:w-[40%]">
				<div className="flex h-[60%] w-full flex-col items-start justify-start gap-5 md:flex-row">
					<div className="flex h-full w-[60%] flex-col items-start justify-start md:w-[20%]">
						<label htmlFor="body" className="shrink-0 text-[20px] text-white">
							Body:
						</label>
					</div>
					<textarea
						id="body"
						name="body"
						required
						className="h-[120px] w-full resize-none rounded-md bg-brand-background-secondary p-3 text-[20px] text-white outline-transparent md:h-full "
					/>
				</div>
			</div>
			<div className="flex h-[20%] w-[95%] shrink-0 flex-col items-center justify-end gap-5 md:h-fit md:w-fit md:justify-start">
				<Turnstile
					sitekey="0x4AAAAAAAgk0KI7mfH7t1k9"
					fixedSize
					appearance="interaction-only"
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
