export default function WidthWrapper({
	children,
	color,
	transparent,
	opacity,
}: {
	children: React.ReactNode;
	color?: string;
	transparent?: boolean;
	opacity?: string;
}) {
	return (
		<section
			className={
				"flex h-full w-full flex-col items-center justify-start bg-[--bg] bg-opacity-[--opacity]"
			}
			style={
				{
					"--bg": transparent ? "transparent" : color,
					"--opacity": opacity ? opacity : "100",
				} as React.CSSProperties
			}
		>
			<section className="relative flex h-full w-full flex-col items-center justify-center md:max-w-[1280px]">
				{children}
			</section>
		</section>
	);
}
