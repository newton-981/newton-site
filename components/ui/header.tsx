"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import DemoModal from "../demo-modal";

export default function Header() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex flex-wrap h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">          {/* Site branding */}
            <div className="flex flex-none items-center">
              <Logo />
            </div>

            {/* Desktop sign in links */}
            <ul className="flex flex-wrap flex-1 items-center justify-end gap-3">
              <li>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="btn-sm bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-[5px] shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  Get Started
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
