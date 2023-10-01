import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import Tech from "./tech";
import Experience from "./experience";
import Projects from "./(projects)/main";
import Freelance from "./freelance";
import Github from "./github";
import Contact from "./(contact)/contact";
import Toast from "./toast";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start">
      <Toast />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Freelance />
      <Github />
      <Contact />
    </main>
  );
}
