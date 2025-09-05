"use client";

import { Cell } from "./Cell";
import type { BoardShape } from "./types";

interface Props {
	currentBoard: BoardShape;
}

export function Board({ currentBoard }: Props) {
	return (
		<section className="w-fit select-none">
			{currentBoard.map((row, rowIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: Nothing else we can use
				<div className="flex" key={rowIndex}>
					{row.map((cell, colIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: Nothing else we can use
						<Cell key={`${rowIndex}-${colIndex}`} type={cell}></Cell>
					))}
				</div>
			))}
		</section>
	);
}
