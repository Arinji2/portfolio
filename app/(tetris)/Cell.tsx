import { CellOptions } from "./types";
import * as React from "react";
import cells from "./game.module.css";

interface Props {
  type: CellOptions;
}

export function Cell({ type }: Props) {
  return (
    <div
      className={`cell w-[30px] h-[30px] border border-dashed border-white border-opacity-10 ${cells["cell"]} ${cells[type]}`}
    ></div>
  );
}
