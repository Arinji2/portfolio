"use client";

import { Board } from "@/app/(tetris)/Board";
import { useTetris } from "@/app/(tetris)/hooks/useTetris";
import Image from "next/image";
import * as React from "react";
import { useRef, useEffect } from "react";
import { useMobTetris } from "./hooks/useMobTetris";

export default function Game() {
  const { board, isPlaying, startGame, score } = useTetris();
  const MobTetris = useMobTetris();
  const [playMusic, setPlayMusic] = React.useState(false);
  useEffect(() => {
    setPlayMusic(isPlaying);
  }, [playMusic, isPlaying]);
  const [musicPaused, setMusicPaused] = React.useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  return (
    <main
      className={`h-[100svh] p-2 overflow-hidden w-full flex flex-col items-center justify-center relative bg-[#323232] gap-5 md:gap-7 xl:gap-10`}
    >
      <Image
        src="/tetris/bg.gif"
        fill
        className="absolute w-full h-full left-0 top-0 z-10 object-cover"
        alt="tetris"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-90 top-0 left-0 z-20"></div>
      <h1 className="md:text-[50px] text-[45px] xl:text-[90px] font-bold text-[#66FCE1] z-30 ">
        TETRIS
      </h1>
      <section className="z-40 h-fit w-fit flex flex-col md:flex-row items-center justify-center gap-10 gap-y-0 shadow-[-5px_4px_0px_-0px_#66FCE1]  p-4 rounded-md">
        <div className="w-full h-full xl:block hidden">
          <Board currentBoard={board} />{" "}
        </div>
        <div className="w-full h-full xl:hidden block">
          <Board currentBoard={MobTetris.board} />
        </div>

        <div className="w-fit h-fit flex flex-row md:flex-col items-center justify-center gap-5 md:gap-3 md:mt-0 mt-3">
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <h2 className="text-[#66FCE1] text-[20px] xl:block hidden">
              Score: {score}
            </h2>
            <h2 className="text-[#66FCE1] text-[20px] xl:hidden block">
              Score: {MobTetris.score}
            </h2>
            {!isPlaying || !MobTetris.isPlaying ? (
              <button
                className="bg-[#5A5A5A] h-fit py-3 w-[150px] text-white rounded-sm"
                onClick={() => {
                  if (vidRef.current) {
                    vidRef.current.play();
                  }
                  startGame();
                  MobTetris.startGame();
                }}
              >
                New Game
              </button>
            ) : (
              <button
                className="bg-[#5A5A5A] h-fit py-3 w-[150px] text-white rounded-sm"
                onClick={() => {
                  if (vidRef.current) {
                    if (musicPaused) {
                      vidRef.current.play();
                    } else {
                      vidRef.current.pause();
                    }
                    setMusicPaused(!musicPaused);
                  }
                }}
              >
                {musicPaused ? "Play Music" : "Pause Music"}
              </button>
            )}
          </div>

          <div className="w-full h-fit grid grid-cols-3 grid-rows-3 md:mt-10">
            <button
              className="col-start-1 flex flex-col items-end justify-center  row-start-2"
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
                className="object-contain hover:cursor-pointer shadow-md shadow-black hover:shadow-sm transition-all ease-in-out duration-300 rounded-full"
              />
            </button>
            <button
              className="col-start-2 flex flex-col items-center justify-end  row-start-1"
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
                className="object-contain hover:cursor-pointer shadow-md shadow-black hover:shadow-sm transition-all ease-in-out duration-300 rounded-full"
              />
            </button>
            <button
              className="col-start-2 flex flex-col items-center justify-start  row-start-3"
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
                className="object-contain hover:cursor-pointer shadow-md shadow-black hover:shadow-sm transition-all ease-in-out duration-300 rounded-full"
              />
            </button>
            <button
              className="col-start-3 flex flex-col items-start justify-center  row-start-2"
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
                className="object-contain hover:cursor-pointer shadow-md shadow-black hover:shadow-sm transition-all ease-in-out duration-300 rounded-full"
              />
            </button>
          </div>
        </div>
        <video
          ref={vidRef}
          loop
          muted={!isPlaying}
          className="absolute top-0 left-0 h-0 bg-red-500 w-0 "
          src="/tetris/theme.mp3"
        />
      </section>
    </main>
  );
}
