"use client";

import { Cell } from "./Cell";
import { BoardShape } from "./types";

interface Props {
  currentBoard: BoardShape;
}

export function Board({ currentBoard }: Props) {
  return (
    <section className=" select-none w-fit">
      {currentBoard.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} type={cell}></Cell>
          ))}
        </div>
      ))}
    </section>
  );
}
