"use client";
import * as React from "react";
import { useEffect, useState } from "react";

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
