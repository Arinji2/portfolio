"use client";

export function SubmitButton({ verified }: { verified: boolean }) {
  return (
    <button
      disabled={!verified}
      type="submit"
      onClick={async () => {
        window.dispatchEvent(new Event("mailSent"));
      }}
      className="w-fit py-3 px-5 h-fit bg-brand-background-secondary text-white rounded-md"
    >
      <p className="text-[20px]">{verified ? "Submit" : "Verify"}</p>
    </button>
  );
}
