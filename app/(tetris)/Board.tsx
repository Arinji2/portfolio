"use client";

import { Cell } from "./Cell";
import type { BoardShape } from "./types";

interface Props {
	currentBoard: BoardShape;
}

export function Board({ currentBoard }: Props) {
	return (
		<section className=" w-fit select-none">
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
