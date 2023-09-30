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
        "w-full h-full flex flex-col items-center justify-start bg-[--bg] bg-opacity-[--opacity] "
      }
      style={
        {
          "--bg": transparent ? "transparent" : color,
          "--opacity": opacity ? opacity : "100",
        } as React.CSSProperties
      }
    >
      <section className="w-full relative md:max-w-[1280px] h-full flex flex-col items-center justify-center">
        {children}
      </section>
    </section>
  );
}
