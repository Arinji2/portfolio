export default function OverlayWrapper({ opacity }: { opacity: number }) {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-brand-background-overlay opacity-[--opacity]"
      style={{ "--opacity": opacity } as React.CSSProperties}
    ></div>
  );
}
