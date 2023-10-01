"use client";
export function SubmitButton() {
  return (
    <button
      type="submit"
      onClick={() => {
        window.dispatchEvent(new Event("mailSent"));
      }}
      className="w-fit py-3 px-5 h-fit bg-brand-background-secondary text-white rounded-md"
    >
      <p className="text-[20px]">Submit</p>
    </button>
  );
}
