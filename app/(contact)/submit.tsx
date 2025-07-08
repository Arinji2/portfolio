"use client";

export function SubmitButton({ verified }: { verified: boolean }) {
	return (
		<button
			disabled={!verified}
			type="submit"
			onClick={async () => {
				window.dispatchEvent(new Event("mailSent"));
			}}
			className="h-fit w-fit rounded-md bg-brand-background-secondary px-5 py-3 text-white"
		>
			<p className="text-[20px]">{verified ? "Submit" : "Verify"}</p>
		</button>
	);
}
