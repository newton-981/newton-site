"use client";

import { useEffect, useRef, useState } from "react";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import DemoModal from "./demo-modal";
import Link from "next/link";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const TIMESTAMPS = [
  { label: "Intro", seconds: 0 },
  { label: "Unit-aware Math", seconds: 15 },
  // { label: "Mixing Units", seconds: 20 },
  { label: "Instant Unit Conversions", seconds: 53 },
  { label: "Plotting", seconds: 105 },
  // { label: "Mixing Units", seconds: 20 },
  // { label: "Demo", seconds: 90 },
];

export default function HeroHome() {
  // const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const playerRef = useRef<any>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const initPlayer = () => {
      if (!playerDivRef.current) return;
      playerRef.current = new window.YT.Player(playerDivRef.current, {
        videoId: "P6e2cLe9D-o",
        playerVars: { rel: 0 },
        events: {
          onReady: () => {
            intervalRef.current = setInterval(() => {
              const t: number = playerRef.current?.getCurrentTime?.() ?? 0;
              let idx = 0;
              for (let i = 0; i < TIMESTAMPS.length; i++) {
                if (t >= TIMESTAMPS[i].seconds) idx = i;
              }
              setActiveIndex(idx);
            }, 500);
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      playerRef.current?.destroy?.();
    };
  }, []);

  const seekTo = (seconds: number) => {
    playerRef.current?.seekTo?.(seconds, true);
    playerRef.current?.playVideo?.();
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <div className="mx-auto w-dvw/80 md:w-3xl pb-3 aspect-video" data-aos="fade-up" data-aos-delay={200}>
                <div ref={playerDivRef} className="w-full h-full" />
              </div>
              <div className="mx-auto w-dvw/80 md:w-3xl flex gap-2 justify-center pb-8" data-aos="fade-up" data-aos-delay={200}>
                {TIMESTAMPS.map(({ label, seconds }, i) => (
                  <button
                    key={seconds}
                    onClick={() => seekTo(seconds)}
                    className={`px-3 py-1 text-sm rounded border transition-colors ${activeIndex === i ? "border-blue-400 text-blue-300 bg-blue-900/30" : "border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-200"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                simplify math.
                {/* Ushering in New Era Where Technology Obliterates Number-crunching */}
              </h1>
              <div className="mx-auto max-w-3xl [&_strong]:text-blue-200">
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <strong>Engineers and Scientists</strong> need a faster way to <strong>do</strong> and <strong>share</strong> mission critical math.
                </p>
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {/* Newton is the ultimate place to do math. From 2+2, to advanced numerical simulations or neural network design—Newton has you covered. */}
                  Newton is a one-stop-shop, <strong>math workspace</strong> where you create and share math <strong>ludicrously fast</strong>.
                  Built for everyone from <strong>students learning basic arithmetic</strong> to <strong>engineering teams sharing high-stakes analyses</strong>.
                  {/* No more wasting time formatting spreadsheet formulas or obeying code syntax. */}
                </p>
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  No more deciding what tool to use.
                  No more wasting time with spreadsheet formulas or obeying code syntax.
                  {/* Newton brings together the best of spreadsheets, graphing calculators, programming. */}
                </p>
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <strong>With Newton, all math is at your fingertips.</strong>
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <Link
                      href={"https://my.newton.app/waitlist"}
                      className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    >
                      <span className="relative inline-flex items-center">
                        Simplify your math today
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
