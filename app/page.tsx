import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import Tech from "./tech";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start">
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
