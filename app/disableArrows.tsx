"use client";
import { useEffect } from "react";

export default function DisableArrows() {
	useEffect(() => {
		window.addEventListener(
			"keydown",
			(e) => {
				if (["Space", "ArrowUp"].indexOf(e.code) > -1) {
					e.preventDefault();
				}
			},
			false,
		);
	}, []);

	return null;
}
