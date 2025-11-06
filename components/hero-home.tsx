"use client";

import { useState } from "react";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import DemoModal from "./demo-modal";

export default function HeroHome() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Simplify Math.
                {/* Ushering in New Era Where Technology Obliterates Number-crunching */}
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {/* Newton is the ultimate place to do math. From 2+2, to advanced numerical simulations or neural network design—Newton has you covered. */}
                  Newton is a one-stop-shop, <b>online math workspace</b> where you can create and share math fast. 
                  No more wasting time formatting spreadsheet formulas or obeying code syntax.
                  With Newton, all math from equations to plots is at your fingertips.
                </p>
                <p
                  className="mb-8 text-xl text-blue-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  From 2+2=4, to advanced engineering—Newton has you covered.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    >
                      <span className="relative inline-flex items-center">
                        Simplify your math today
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </button>
                  </div>
                  {/* <div data-aos="fade-up" data-aos-delay={600}>
                    <a
                      className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                      href="#0"
                    >
                      Schedule Demo
                    </a>
                  </div> */}
                </div>
              </div>
            </div>


            {/* <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="videos//video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            /> */}
          </div>
        </div>
      </section>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
