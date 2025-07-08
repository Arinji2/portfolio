"use client";
import { useEffect, useState } from "react";

export default function Toast() {
	const [toast, setToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	useEffect(() => {
		const mailSent = () => {
			setToast(true);
			setToastMessage("Email Sent Successfully!");
			setTimeout(() => {
				setToast(false);
			}, 5000);
		};
		const emailCopied = () => {
			setToast(true);
			setToastMessage("Email Copied!");
			setTimeout(() => {
				setToast(false);
			}, 5000);
		};
		window.addEventListener("mailSent", mailSent);
		window.addEventListener("emailCopied", emailCopied);

		return () => {
			window.removeEventListener("mailSent", mailSent);
			window.removeEventListener("emailCopied", emailCopied);
		};
	}, []);

	return (
		<div
			className={`${
				toast ? "translate-y-0 " : "-translate-y-[100px] "
			}transition-all fixed top-0 z-[190] flex h-[100px] w-full flex-col items-start justify-center bg-brand-background-primary p-4 duration-300 ease-in-out`}
		>
			<p className="text-[20px] text-white">{toastMessage}</p>
		</div>
	);
}
