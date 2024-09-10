export type InfoType = {
  title: string;
  info: string;
  video: string;
  githubURL: string;
  code: string;
  language: string;
};
const UseAnimateData = {
  title: "Custom Hook to Manage Modals",
  info: "This is a custom hook to easily manage modals with animations.",
  video: "https://cdn.arinji.com/u/oiMrbK.mp4",
  language: "TypeScript",
  githubURL:
    "https://github.com/Arinji2/sense-or-nonsense/blob/master/utils/useAnimate.tsx",
  code: `"use client";
import { useEffect, useState } from "react";

export default function useAnimate(animationDuration: number) {
  const [queue, setQueue] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [actualState, setActualState] = useState(false);

  useEffect(() => {
    if (queue) {
      setActualState(true);
      const interval = setTimeout(() => {
        setShowComponent(true);
      }, 20);
      return () => {
        clearTimeout(interval);
      };
    } else {
      setShowComponent(false);
      const interval = setTimeout(() => {
        setActualState(false);
      }, animationDuration + 100);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [queue, animationDuration]);

  return { showComponent, actualState, setQueue, queue } as const`,
};

const InfiniteScrollData = {
  title: "Infinite Scroll Implementation",
  info: "An infinite scroll implementation using the Intersection Observer API.",
  video: "https://cdn.arinji.com/u/DDmeUY.mp4",
  language: "TypeScript",
  githubURL:
    "https://github.com/Arinji2/sense-or-nonsense/blob/master/utils/useAnimate.tsx",
  code: `"use client";
import { useEffect, useState } from "react";

export default function TracksComponent({
  playlistData,
  initialTracks,
  theme,
}: {
  playlistData: Playlist;
  initialTracks: TrackType[];
  theme: string;
}) {
  const [tracks, setTracks] = useState<TrackType[]>(initialTracks);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [atEnd, setAtEnd] = useState(false);

  const [showLyricsState, setShowLyricsState] = useState<LyricsType>({
    artists: [],
    songName: "",
    theme: "",
    trackId: "",
    songImage: "",
  });
  const [loadingLyrics, setLoadingLyrics] = useState(false);
  useEffect(() => {
    if (loading) return;
    if (inView) {
      setLoading(true);
      setOffset((prev) => prev + 1);
      FetchNextSongsAction(offset + 1, playlistData).then((res) => {
        if (res.length === 0) {
          setAtEnd(true);
        }

        setTracks((prev) => [...prev, ...res]);
        setLoading(false);
      });
    }
  }, [inView, offset, playlistData, loading]);

  useEffect(() => {
    if (!loadingLyrics)
      setShowLyricsState({
        artists: showLyricsState.artists,
        songName: showLyricsState.songName,
        theme: showLyricsState.theme,
        trackId: "",
        songImage: showLyricsState.songImage,
      });
  }, [
    loadingLyrics,
    showLyricsState.artists,
    showLyricsState.songName,
    showLyricsState.theme,
    showLyricsState.songImage,
  ]);

  return (
    <>
      <ShowLyrics
        setLoading={setLoadingLyrics}
        artists={showLyricsState.artists}
        songName={showLyricsState.songName}
        trackId={showLyricsState.trackId}
        songImage={showLyricsState.songImage}
      />
      <div className="flex flex-col items-center justify-center w-full h-full pb-2 gap-3">
        <section className="w-full h-full min-h-[100svh] flex flex-row items-center justify-center flex-wrap gap-16 md:gap-7  p-4 mb-3">
          {tracks.map((track) => (
            <SongCard
              theme={theme}
              setLoading={setLoadingLyrics}
              loading={loadingLyrics}
              setShowLyricsState={setShowLyricsState}
              track={track}
              key={track.id}
            />
          ))}
        </section>
        <p ref={ref} className="font-bold text-black text-2xl">
          <Image
            src={"/themes/" +
              (theme === "pixel" ? "neo-brutalism" : theme) +
              "/loading.svg"}
            width={40}
            alt="Lyrics Shower"
            height={40}
            className={(atEnd && "invisible ") + "object-contain animate-spin z-20"}
          />
        </p>
      </div>
    </>
  );`,
};

const InteractiveFormData = {
  title: "Interactive Form Implementation",
  info: "A form with interactive elements, such as sliders, inputs and image uploads.",
  video: "https://cdn.arinji.com/u/2tWzAS.mp4",
  language: "Next JS",
  githubURL:
    "https://github.com/Arinji2/vibeify/blob/master/app/dashboard/playlists/create/form.tsx",
  code: `export function Form() {
  const initialState = {
    message: "",
    status: 0,
  };

  const [prevState, action] = useFormState(CreatePlaylistAction, initialState);

  useToast({
    message: prevState.message,
    status: prevState.status,
    successMessage: "Playlist Created",
    successRoute: "/dashboard/playlists",
  });

  return (
    <form
      action={action}
      className="relative xl:w-[80%] w-full h-fit p-5 border-[3px] flex flex-col items-start justify-start gap-4 border-black shadow-button bg-palette-background"
    >
      <div className="w-fit h-fit flex flex-col items-start justify-center gap-[2px]">
        <h1 className="text-[40px] md:text-[50px] font-bold text-palette-text">
          Create Playlist
        </h1>
        <div className="w-full h-[5px] bg-palette-accent"></div>
      </div>
      <div className="px-2 gap-4 w-full h-fit flex flex-col items-start justify-start">
        <SpotifyLink />
        <PrivateName />
        <DisplayName />
        <DisplayLink />
        <DisplayPicture />
        <div className="w-full h-fit flex flex-row items-center justify-start mt-3 gap-5">
          <WeeklySync />
          <PublicPlaylist />
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}
  function SpotifyLink() {
  const searchParams = useSearchParams();
  const link = searchParams.get("signUp");
  const [validLink, setValidLink] = useState(false);
  useEffect(() => {
    if (!link || link === null) return;
    if (REGEX.SPOTIFY_URL.test(link)) setValidLink(true);
  }, [link]);
  return (
    <div className="w-full h-fit flex flex-col md:flex-row items-start md:items-center justify-start gap-4">
      <div className="w-[150px] h-fit shrink-0 flex flex-col items-start justify-center">
        <label className="text-[20px] font-medium text-palette-text whitespace-nowrap">
          Spotify Link:
        </label>
      </div>
      <div className="w-full h-fit t flex flex-row items-center justify-start gap-4">
        <input
          placeholder="https://open.spotify.com/playlist/..../..../..."
          type="text"
          defaultValue={validLink ? link! : ""}
          name="spotifyLink"
          className="w-full px-2 py-3 text-base h-[40px] max-w-[450px] border-[3px] z-30 focus:outline-none border-black bg-palette-background text-palette-text"
        />
        <div className="w-fit h-fit relative">
          <Info className="h-[25px] md:w-[35px] peer w-[25px] md:h-[35px] text-palette-text" />
          <div className="w-fit flex flex-col opacity-0 z-0 peer-hover:z-50  peer-hover:opacity-100 transition-opacity ease-in-out duration-500 items-center justify-center h-fit absolute py-2 -top-14 md:-top-10 right-0 xl:left-0 rounded-sm bg-black px-3">
            <p className="whitespace-nowrap text-sm ">
              Spotify Link to Public Playlist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivateName() {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row items-start md:items-center justify-start gap-4">
      <div className="w-[150px] h-fit shrink-0 flex flex-col items-start justify-center">
        <label className="text-[20px] font-medium text-palette-text whitespace-nowrap">
          Private Name:
        </label>
      </div>
      <div className="w-full h-fit t flex flex-row items-center justify-start gap-4">
        <input
          placeholder="My Playlist 1"
          type="text"
          name="privateName"
          className="w-full px-2 py-3 text-base h-[40px] max-w-[450px] border-[3px] z-30 focus:outline-none border-black bg-palette-background text-palette-text"
        />
        <div className="w-fit h-fit relative">
          <Info className="h-[25px] md:w-[35px] peer w-[25px] md:h-[35px] text-palette-text" />
          <div className="w-fit flex flex-col opacity-0 z-0 peer-hover:z-50  peer-hover:opacity-100 transition-opacity ease-in-out duration-500 items-center justify-center h-fit absolute py-2 -top-14 md:-top-10 right-0 xl:left-0 rounded-sm bg-black px-3">
            <p className="whitespace-nowrap text-sm ">
              Private Name to Identify Playlist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
  function WeeklySync() {
  const [sync, setSync] = useState(false);
  return (
    <div className="w-fit md:w-[184px] xl:w-[135px] h-[40px] flex flex-row items-center gap-2 justify-start ">
      <p className="text-black text-[15px] font-medium shrink-0">
        Weekly <br /> Sync
      </p>
      <input type="hidden" name="weeklySync" value={sync === true ? 1 : 0} />
      <div
        onClick={() => setSync(!sync)}
        className="w-[60px] h-[30px] border-[3px] hover:cursor-pointer border-black rounded-3xl flex overflow-hidden group flex-col items-center justify-start relative"
      >
        <div
          className={"bg-palette-error w-[40px] h-[25px] rounded-3xl transition-all ease-in-out duration-300   absolute"}
        ></div>
      </div>
    </div>
  );
}`,
};

const InteractiveThemeSelectData = {
  title: "Interactive Theme Selector",
  info: "A interactive theme selector that allows users to switch between different themes in real-time.",
  video: "https://cdn.arinji.com/u/ZtIYwx.mp4",
  language: "Next JS",
  githubURL:
    "https://github.com/Arinji2/vibeify/blob/master/app/%5BplaylistLink%5D/testMode.tsx",
  code: `"use client";

import Link from "next/link";
import WidthWrapper from "../(wrapper)/widthWrapper";
import * as React from "react";
import { useState } from "react";

export function TestModeComponent({
  currentTheme,
  link,
}: {
  currentTheme: string;
  link: string;
}) {
  const [showSelector, setShowSelector] = useState(false);

  return (
    <div className={
      "w-full flex flex-col items-center justify-center h-[200px] " +
      "xl:h-[100px] bg-palette-background border-black border-t-[4px] " +
      "fixed bottom-0 z-50"
    }>
      <WidthWrapper>
        <div className={
          "w-full h-full flex flex-col xl:flex-row items-center justify-between"
        }>
          <p className="text-black font-bold text-2xl">
            You are currently in Test Mode!
          </p>
          <div className={
            "w-full xl:w-fit h-full py-3 flex overflow-y-hidden flex-row " +
            "items-center no-scrollbar justify-start xl:justify-between " +
            "gap-5 overflow-x-scroll"
          }>
            <div
              className={
                (showSelector ? 
                  "h-[233px] opacity-100 " : 
                  "h-0 opacity-0 "
                ) +
                "w-[300px] transition-all overflow-hidden flex flex-col " +
                "items-center justify-center ease-in-out border-[4px] " +
                "border-black shrink-0 duration-500 absolute z-[100] " +
                "bg-palette-background bottom-[calc(100%-60px)] " +
                "xl:bottom-[calc(100%-12px)] rounded-md"
              }
            >
              <Link
                href={/link?testMode=default/}
                className={
                  (currentTheme === "default" ?
                    "bg-palette-primary hover:cursor-not-allowed " :
                    "bg-palette-background hover:bg-palette-primary "
                  ) +
                  "w-full h-[75px] flex flex-col items-start justify-center " +
                  "border-black border-[5px] border-x-0 border-y-0"
                }
              >
                <p className="text-black text-2xl font-bold px-2">Default</p>
              </Link>
              <Link
                href={/link?testMode=neo-brutalism/}
                className={
                  (currentTheme === "neo-brutalism" ?
                    "bg-palette-primary hover:cursor-not-allowed " :
                    "bg-palette-background hover:bg-palette-primary "
                  ) +
                  "w-full h-[75px] flex flex-col items-start justify-center " +
                  "border-black border-[5px] border-x-0"
                }
              >
                <p className="text-black text-2xl font-bold px-2">
                  Neo-Brutalism
                </p>
              </Link>
              <Link
                href={/link?testMode=pixel/}
                className={
                  (currentTheme === "pixel" ?
                    "bg-palette-primary hover:cursor-not-allowed " :
                    "bg-palette-background hover:bg-palette-primary "
                  ) +
                  "w-full h-[75px] flex flex-col items-start justify-center " +
                  "border-black border-[5px] border-x-0 border-y-0"
                }
              >
                <p className="text-black text-2xl font-bold px-2">Pixel</p>
              </Link>
            </div>
            <button
              onClick={() => setShowSelector(!showSelector)}
              className={
                "w-[300px] shrink-0 h-[100px] xl:h-full bg-palette-accent " +
                "border-black border-[4px] relative hover:shadow-buttonHover " +
                "group transition-all ease-in-out duration-300 " +
                "hover:bg-palette-background shadow-button rounded-md " +
                "flex flex-row items-center justify-center"
              }
            >
              <p className={
                "text-palette-background font-bold text-2xl " +
                "group-hover:text-palette-accent transition-all " +
                "ease-in-out duration-300"
              }>
                Select Theme!
              </p>
            </button>
            <Link
              href="/dashboard/playlists"
              className={
                "w-[300px] shrink-0 h-[100px] xl:h-full bg-palette-background " +
                "border-black border-[4px] hover:bg-palette-error relative " +
                "hover:shadow-buttonHover group transition-all ease-in-out " +
                "duration-300 shadow-button rounded-md flex flex-row " +
                "items-center justify-center"
              }
            >
              <p className={
                "text-palette-error font-bold text-2xl " +
                "group-hover:text-palette-background transition-all " +
                "ease-in-out duration-300"
              }>
                Go Back!
              </p>
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
`,
};

const URLBasedSearchData = {
  title: "URL Based Search",
  info: "A highly modular search feature that uses the URL as its only global state management.",
  video: "https://cdn.arinji.com/u/tsFdMy.mp4",
  language: "Next JS",
  githubURL:
    "https://github.com/Arinji2/imagee/blob/master/src/app/dashboard/manage.tsx",
  code: `"use client";

import { H4 } from "@/primatives/typography";
import { Loader2, PlusCircle, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function Manage() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const [isLoadingName, startTransitionName] = useTransition();
  const [isLoadingLink, startTransitionLink] = useTransition();

  const pathname = usePathname();
  return (
    <div className="h-auto w-full md:sticky top-5 z-50 md:min-h-[550px] md:max-h-[550px] pb-2 flex gap-3 flex-col md:max-w-[250px] items-stretch transition-transform ease-in-out duration-300">
      <Link
        href="/dashboard/create"
        className="w-full md:w-[250px]  h-[100px] md:h-[20%] p-3 flex flex-col gap-3  items-center justify-center bg-palette-bg rounded-neo-brutalist border-neo-brutalist hover:shadow-neo-brutalist-hover transition-shadow ease-in-out duration-300 shadow-neo-brutalist shadow-black border-black"
      >
        <H4 className="text-palette-text font-bold xl:text-[20px] text-center">
          Create New Link
        </H4>
        <PlusCircle className="size-[20px] md:size-[40px] text-palette-text" />
      </Link>
      <div className="w-full h-auto min-h-[100px] md:h-[80%] flex flex-col items-start justify-start p-2 gap-4 bg-palette-bg mt-auto rounded-neo-brutalist border-neo-brutalist border-black shadow-neo-brutalist">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
          <H4 className="text-palette-text font-bold">Search Tool</H4>
          <div className="w-full h-fit flex flex-row items-end justify-start gap-2">
            <input
              type="text"
              placeholder="Search by name..."
              onChange={(e) => {
                params.delete("search_link");
                params.set("search_name", e.target.value);
                "window.history.pushState(null, '', '?' + params.toString());"
              }}
              className="w-full h-[40px] bg-palette-bg text-palette-text border-neo-brutalist border-black rounded-neo-brutalist p-2"
            />
            <button
              onClick={() => {
                startTransitionName(() => {
               "router.replace(pathname + '?' + params.toString());"
                });
              }}
              className="size-[40px] shrink-0 bg-palette-accent border-neo-brutalist border-black flex flex-col items-center justify-center rounded-neo-brutalist"
            >
              {isLoadingName ? (
                <Loader2
                  strokeWidth={3}
                  className="size-[20px] text-palette-text animate-spin"
                />
              ) : (
                <Search
                  strokeWidth={3}
                  className="size-[20px] text-palette-text"
                />
              )}
            </button>
          </div>
          <div className="w-full h-fit flex flex-row items-end justify-start gap-2">
            <input
              type="text"
              placeholder="Search by URL..."
              onChange={(e) => {
                params.delete("search_name");
                params.set("search_link", e.target.value);
                "window.history.pushState(null, '', '?' + params.toString());"
              }}
              className="w-full h-[40px] bg-palette-bg text-palette-text border-neo-brutalist border-black rounded-neo-brutalist p-2"
            />
            <button
              onClick={() => {
                startTransitionLink(() => {
                  "router.replace(pathname + '?' + params.toString());"
                });
              }}
              className="size-[40px] shrink-0 bg-palette-accent border-neo-brutalist border-black flex flex-col items-center justify-center rounded-neo-brutalist"
            >
              {isLoadingLink ? (
                <Loader2
                  strokeWidth={3}
                  className="size-[20px] text-palette-text animate-spin"
                />
              ) : (
                <Search
                  strokeWidth={3}
                  className="size-[20px] text-palette-text"
                />
              )}
            </button>
          </div>
          <button
            onClick={() => {
              params.delete("search_name");
              params.delete("search_link");
              "router.replace(pathname + '?' + params.toString());"
            }}
            className="w-full h-[40px] bg-red-400 border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold"
          >
            Clear Search
          </button>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
          <H4 className="text-palette-text font-bold">Filter Tool</H4>
          <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
            <button
              onClick={() => {
                params.set("sort", "prefixed");
                router.replace(pathname + '?' + params.toString());
              }}
              className="w-full h-[40px] bg-palette-secondary border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold"
            >
              Prefixed
            </button>
            <button
              onClick={() => {
                params.set("sort", "unprefixed");
                router.replace(pathname + '?' + params.toString());
              }}
              className="w-full h-[40px] bg-palette-secondary border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold"
            >
              Non Prefixed
            </button>
            <button
              onClick={() => {
                params.delete("sort");
                router.replace(pathname + '?' + params.toString());
              }}
              className="w-full h-[40px] bg-red-400 border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ManageLoading() {
  return (
    <div className="h-auto w-full md:sticky top-5 z-50 md:min-h-[550px] md:max-h-[550px] pb-2 flex gap-3 flex-col md:max-w-[250px] items-stretch transition-transform ease-in-out duration-300">
      <Link
        href="/dashboard/create"
        className="w-full md:w-[250px]  h-[100px] md:h-[20%] p-3 flex flex-col gap-3 items-center justify-center bg-palette-bg rounded-neo-brutalist border-neo-brutalist hover:shadow-neo-brutalist-hover transition-shadow ease-in-out duration-300 shadow-neo-brutalist shadow-black border-black"
      >
        <H4 className="text-palette-text font-bold text-center xl:text-[20px]">
          Create New Link
        </H4>
        <PlusCircle className="size-[20px] md:size-[40px] text-palette-text" />
      </Link>
      <div className="w-full h-auto min-h-[100px] md:h-[80%] flex flex-col items-start justify-start p-2 gap-4 bg-palette-bg mt-auto rounded-neo-brutalist border-neo-brutalist border-black shadow-neo-brutalist">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
          <H4 className="text-palette-text font-bold">Search Tool</H4>
          <div className="w-full h-fit flex flex-row items-end justify-start gap-2">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full h-[40px] bg-palette-bg text-palette-text border-neo-brutalist border-black rounded-neo-brutalist p-2"
            />
            <div className="size-[40px] shrink-0 bg-palette-accent border-neo-brutalist border-black flex flex-col items-center justify-center rounded-neo-brutalist">
              <Search
                strokeWidth={3}
                className="size-[20px] text-palette-text"
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-row items-end justify-start gap-2">
            <input
              type="text"
              placeholder="Search by URL..."
              className="w-full h-[40px] bg-palette-bg text-palette-text border-neo-brutalist border-black rounded-neo-brutalist p-2"
            />
            <div className="size-[40px] shrink-0 bg-palette-accent border-neo-brutalist border-black flex flex-col items-center justify-center rounded-neo-brutalist">
              <Search
                strokeWidth={3}
                className="size-[20px] text-palette-text"
              />
            </div>
          </div>
          <button className="w-full h-[40px] bg-red-400 border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold">
            Clear Search
          </button>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
          <H4 className="text-palette-text font-bold">Filter Tool</H4>
          <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
            <button className="w-full h-[40px] bg-palette-secondary border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover hover:shadow-neo-brutalist text-palette-text font-bold">
              Prefixed
            </button>
            <button className="w-full h-[40px] bg-palette-secondary border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover hover:shadow-neo-brutalist text-palette-text font-bold">
              Non Prefixed
            </button>
            <button className="w-full h-[40px] bg-red-400 border-neo-brutalist border-black rounded-neo-brutalist shadow-neo-brutalist-hover  text-palette-text font-bold">
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
};

const HttpClientPackage = {
  title: "HTTP Client Package",
  info: "A package that provides a simple way to do HTTP requests.",
  video: "",
  language: "Go",
  githubURL: "https://github.com/Arinji2/vibeify-backend/blob/main/api/base.go",
  code: `package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"time"
)

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type ApiClient struct {
	BaseURL string
	Client  HTTPClient
}

func NewApiClient(baseURL ...string) *ApiClient {
	var url string
	if len(baseURL) > 0 {
		url = baseURL[0]
	} else {
		url = ""
	}

	if url == "" {

		url = os.Getenv("PB_LINK")
	}

	return &ApiClient{
		BaseURL: url,
		Client:  &http.Client{},
	}
}

func (c *ApiClient) doRequest(req *http.Request, headers map[string]string) (map[string]interface{}, int, error) {
	req.Header.Set("Content-Type", "application/json")
	for key, val := range headers {
		req.Header.Set(key, val)
	}

	var result map[string]interface{}
	var resp *http.Response
	var err error
	const maxRetries = 3
	var retryDelay = 100 * time.Millisecond

	for i := 0; i < maxRetries; i++ {
		resp, err = c.Client.Do(req)
		if err != nil {
			return nil, 0, fmt.Errorf("error sending request: %w", err)
		}
		defer resp.Body.Close()

		if resp.StatusCode == http.StatusTooManyRequests && c.BaseURL == "https://api.spotify.com" {
			retryAfter := resp.Header.Get("Retry-After")
			if retryAfter != "" {
				delay, err := time.ParseDuration(retryAfter + "s")
				if err != nil {
					return nil, resp.StatusCode, fmt.Errorf("error parsing Retry-After header: %w", err)
				}
				time.Sleep(delay)
			} else {
				time.Sleep(retryDelay)
			}
			retryDelay *= 2 // Exponential backoff
			continue
		}

		if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusNoContent && resp.StatusCode != http.StatusCreated {
			return nil, resp.StatusCode, nil
		}

		if resp.StatusCode == http.StatusNoContent {
			return result, resp.StatusCode, nil
		}
		if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
			return nil, resp.StatusCode, fmt.Errorf("error decoding response: %w", err)
		}

		return result, resp.StatusCode, nil
	}

	return nil, http.StatusTooManyRequests, fmt.Errorf("maximum retry attempts reached")
}

func (c *ApiClient) SendRequestWithBody(method, path string, body interface{}, headers map[string]string) (result map[string]interface{}, status int, err error) {
	address := fmt.Sprintf("%s%s", c.BaseURL, path)

	jsonBody, err := json.Marshal(body)
	if err != nil {
		status = 500
		err = fmt.Errorf("error marshalling json: %w", err)
		return
	}

	req, err := http.NewRequest(method, address, bytes.NewBuffer(jsonBody))
	if err != nil {
		status = 500
		err = fmt.Errorf("error creating request: %w", err)
		return
	}

	req.Header.Set("Content-Type", "application/json")
	for key, val := range headers {
		req.Header.Set(key, val)
	}

	result, status, err = c.doRequest(req, headers)
	if err != nil {
		err = fmt.Errorf("error from request doer: %w", err)
		return
	}

	return
}

func (c *ApiClient) SendRequestWithQuery(method, path string, query map[string]string, headers map[string]string) (result map[string]interface{}, status int, err error) {
	queryParams := url.Values{}
	for key, value := range query {
		queryParams.Add(key, value)
	}

	address, err := url.JoinPath(c.BaseURL, path)
	if err != nil {
		status = 500
		err = fmt.Errorf("error joining URL paths: %w", err)
		return
	}

	fullURL := fmt.Sprintf("%s?%s", address, queryParams.Encode())
	req, err := http.NewRequest(method, fullURL, nil)
	if err != nil {
		status = 500
		err = fmt.Errorf("error creating request: %w", err)
		return
	}

	result, status, err = c.doRequest(req, headers)
	if err != nil {
		err = fmt.Errorf("error from request doer: %w", err)
		return
	}

	return
}`,
};
const CachedIndexing = {
  title: "Cached Indexing",
  info: "A package that provides an atomic type of caching.",
  video: "",
  language: "Go",
  githubURL:
    "https://github.com/Arinji2/vibeify-backend/blob/main/cache/base.go",
  code: `package cache

import (
	"sync"
	"time"
)

type CacheItem struct {
	Value      interface{}
	Expiration int64
}

type Cache struct {
	items       map[string]CacheItem
	mu          sync.RWMutex
	maxItems    int
	janitor     *time.Ticker
	stopJanitor chan bool
}

func NewCache(maxItems int, cleanupInterval time.Duration) *Cache {
	c := &Cache{
		items:       make(map[string]CacheItem),
		maxItems:    maxItems,
		janitor:     time.NewTicker(cleanupInterval),
		stopJanitor: make(chan bool),
	}

	go c.cleanupLoop()

	return c
}

func (c *Cache) cleanupLoop() {
	for {
		select {
		case <-c.janitor.C:
			c.cleanup()
		case <-c.stopJanitor:
			c.janitor.Stop()
			return
		}
	}
}

func (c *Cache) cleanup() {
	c.mu.Lock()
	defer c.mu.Unlock()

	now := time.Now().Unix()
	for key, item := range c.items {
		if item.Expiration > 0 && now > item.Expiration {
			delete(c.items, key)
		}
	}
}

func (c *Cache) Set(key string, value interface{}, duration time.Duration) {
	var expiration int64
	if duration > 0 {
		expiration = time.Now().Add(duration).Unix()
	}

	c.mu.Lock()
	defer c.mu.Unlock()

	if len(c.items) >= c.maxItems {

		for k := range c.items {

			delete(c.items, k)
			break
		}
	}

	c.items[key] = CacheItem{
		Value:      value,
		Expiration: expiration,
	}
}

func (c *Cache) Get(key string) (interface{}, bool) {
	c.mu.RLock()
	item, found := c.items[key]
	if !found {
		c.mu.RUnlock()
		return nil, false
	}

	if item.Expiration > 0 && time.Now().Unix() > item.Expiration {
		c.mu.RUnlock()
		c.mu.Lock()
		delete(c.items, key)
		c.mu.Unlock()
		return nil, false
	}

	c.mu.RUnlock()
	return item.Value, true
}

func (c *Cache) Delete(key string) {
	c.mu.Lock()
	defer c.mu.Unlock()
	delete(c.items, key)
}

func (c *Cache) Clear() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.items = make(map[string]CacheItem)
}

func (c *Cache) Close() {
	c.stopJanitor <- true
}`,
};
export const AllCodeData = [
  UseAnimateData,
  InfiniteScrollData,
  HttpClientPackage,
  CachedIndexing,
  InteractiveFormData,
  InteractiveThemeSelectData,
  URLBasedSearchData,
] as InfoType[];
