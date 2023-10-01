"use client";
export function SubmitButton() {
  return (
    <button
      type="submit"
      onClick={() => {
        window.dispatchEvent(new Event("mailSent"));
      }}
      className="w-fit py-3 px-5 h-fit bg-brand-background-secondary disabled:bg-brand-background-primary disabled:text-white text-brand-primary rounded-md"
    >
      <p className="text-[20px]">Submit</p>
    </button>
  );
}
