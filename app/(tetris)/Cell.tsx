import cells from "./game.module.css";
import type { CellOptions } from "./types";

interface Props {
	type: CellOptions;
}

export function Cell({ type }: Props) {
	return (
		<div
			className={`cell h-[30px] w-[30px] border border-white border-dashed border-opacity-10 ${cells["cell"]} ${cells[type]}`}
		></div>
	);
}
