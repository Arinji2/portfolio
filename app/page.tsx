import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import Tech from "./tech";
import Experience from "./experience";
import Projects from "./(projects)/main";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start">
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
    </main>
  );
}
