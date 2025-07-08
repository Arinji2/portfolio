export default function OverlayWrapper({ opacity }: { opacity: number }) {
	return (
		<div
			className="absolute top-0 left-0 h-full w-full bg-brand-background-overlay opacity-[--opacity]"
			style={{ "--opacity": opacity } as React.CSSProperties}
		></div>
	);
}
