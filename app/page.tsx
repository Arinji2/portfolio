import Contact from "./(contact)/contact";
import Projects from "./(projects)/main";
import Game from "./(tetris)/game";
import About from "./about";
import Experience from "./experience";
import Freelance from "./freelance";
import Github from "./github";
import Hero from "./hero";
import Tech from "./tech";
import Toast from "./toast";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center  justify-start ">
      <Toast />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Freelance />
      <Github />
      <Contact />
      <Game />
    </main>
  );
}
