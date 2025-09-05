"use client";

import Image from "next/image";
import * as React from "react";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/analytics/events";
import { Board } from "@/app/(tetris)/Board";
import { useTetris } from "@/app/(tetris)/hooks/useTetris";
import { useMobTetris } from "./hooks/useMobTetris";

export default function Game() {
	const { board, isPlaying, startGame, score } = useTetris();
	const MobTetris = useMobTetris();
	const [_playMusic, setPlayMusic] = React.useState(false);
	useEffect(() => {
		setPlayMusic(isPlaying);
	}, [isPlaying]);
	const [musicPaused, setMusicPaused] = React.useState(false);
	const vidRef = useRef<HTMLVideoElement | null>(null);

	return (
		<main
			className={`relative flex h-[100svh] w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#323232] p-2 md:gap-7 xl:gap-10`}
		>
			<Image
				src="/tetris/bg.gif"
				fill
				className="absolute top-0 left-0 z-10 h-full w-full object-cover"
				alt="tetris"
			/>
			<div className="absolute top-0 left-0 z-20 h-full w-full bg-black bg-opacity-90"></div>
			<h2 className="z-30 font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-5xl">
				TETRIS
			</h2>
			<section className="z-40 flex h-fit w-fit flex-col items-center justify-center gap-10 gap-y-0 rounded-md p-4 shadow-[-5px_4px_0px_-0px_#66FCE1] md:flex-row">
				<div className="hidden h-full w-full xl:block">
					<Board currentBoard={board} />{" "}
				</div>
				<div className="block h-full w-full xl:hidden">
					<Board currentBoard={MobTetris.board} />
				</div>

				<div className="mt-3 flex h-fit w-fit flex-row items-center justify-center gap-5 md:mt-0 md:flex-col md:gap-3">
					<div className="flex h-full w-full flex-col items-center justify-center gap-3">
						<h2 className="hidden text-[#66FCE1] text-[20px] xl:block">
							Score: {score}
						</h2>
						<h2 className="block text-[#66FCE1] text-[20px] xl:hidden">
							Score: {MobTetris.score}
						</h2>
						{!isPlaying || !MobTetris.isPlaying ? (
							<button
								type="button"
								className="h-fit w-[150px] rounded-sm bg-[#5A5A5A] py-3 text-white"
								onClick={() => {
									if (vidRef.current) {
										vidRef.current.play();
									}
									startGame();
									MobTetris.startGame();
									trackEvent("tetris_started");
								}}
							>
								New Game
							</button>
						) : (
							<button
								type="button"
								className="h-fit w-[150px] rounded-sm bg-[#5A5A5A] py-3 text-white"
								onClick={() => {
									if (vidRef.current) {
										if (musicPaused) {
											vidRef.current.play();
											trackEvent("tetris_music", {
												state: "play",
											});
										} else {
											vidRef.current.pause();
											trackEvent("tetris_music", {
												state: "pause",
											});
										}
										setMusicPaused(!musicPaused);
									}
								}}
							>
								{musicPaused ? "Play Music" : "Pause Music"}
							</button>
						)}
					</div>

					<div className="grid h-fit w-full grid-cols-3 grid-rows-3 md:mt-10">
						<button
							type="button"
							className="col-start-1 row-start-2 flex flex-col items-end justify-center"
							onClick={() => {
								const event = new KeyboardEvent("keydown", {
									key: "ArrowLeft",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowLeft",
								});

								const upEvent = new KeyboardEvent("keyup", {
									key: "ArrowLeft",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowLeft",
								});

								document.dispatchEvent(event);
								document.dispatchEvent(upEvent);
							}}
						>
							<Image
								src="/tetris/Left.svg"
								alt="left"
								width={30}
								height={30}
								quality={100}
								className="rounded-full object-contain shadow-black shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
							/>
						</button>
						<button
							type="button"
							className="col-start-2 row-start-1 flex flex-col items-center justify-end"
							onClick={() => {
								const event = new KeyboardEvent("keydown", {
									key: "ArrowUp",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowUp",
								});

								const upEvent = new KeyboardEvent("keyup", {
									key: "ArrowUp",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowUp",
								});

								document.dispatchEvent(event);
								document.dispatchEvent(upEvent);
							}}
						>
							<Image
								src="/tetris/Up.svg"
								alt="up"
								width={30}
								height={30}
								quality={100}
								className="rounded-full object-contain shadow-black shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
							/>
						</button>
						<button
							type="button"
							className="col-start-2 row-start-3 flex flex-col items-center justify-start"
							onClick={() => {
								const event = new KeyboardEvent("keydown", {
									key: "ArrowDown",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowDown",
								});

								const upEvent = new KeyboardEvent("keyup", {
									key: "ArrowDown",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowDown",
								});

								document.dispatchEvent(event);
								setTimeout(() => {
									document.dispatchEvent(upEvent);
								}, 200);
							}}
						>
							<Image
								src="/tetris/Down.svg"
								alt="down"
								width={30}
								height={30}
								quality={100}
								className="rounded-full object-contain shadow-black shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
							/>
						</button>
						<button
							type="button"
							className="col-start-3 row-start-2 flex flex-col items-start justify-center"
							onClick={() => {
								const event = new KeyboardEvent("keydown", {
									key: "ArrowRight",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowRight",
								});

								const upEvent = new KeyboardEvent("keyup", {
									key: "ArrowRight",
									repeat: false,
									bubbles: true,
									cancelable: true,
									composed: true,
									code: "ArrowRight",
								});

								document.dispatchEvent(event);
								document.dispatchEvent(upEvent);
							}}
						>
							<Image
								src="/tetris/Right.svg"
								alt="right"
								width={30}
								height={30}
								quality={100}
								className="rounded-full object-contain shadow-black shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
							/>
						</button>
					</div>
				</div>
				<video
					ref={vidRef}
					loop
					muted={!isPlaying}
					className="absolute top-0 left-0 h-0 w-0 bg-red-500"
					src="/tetris/theme.mp3"
				/>
			</section>
		</main>
	);
}
