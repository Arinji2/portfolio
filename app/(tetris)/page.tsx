import { useTetris } from "@/app/(tetris)/hooks/useTetris";

import Game from "./game";

export default function Home() {
  return (
    <section className="h-[100svh] w-full overflow-hidden">
      <Game />;
    </section>
  );
}
