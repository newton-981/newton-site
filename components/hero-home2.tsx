import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";
import TimeSaving from "@/public/images/TimeSpentDoingMathLabelsDark.png";



export default function HeroHome2() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Why we are building Newton
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Current math tools are slow
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-2 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                With current math tools (spreadsheets, MATLAB, Python, etc.), most time is wasted...
              </p>
              <ul className="mb-8 text-xl text-blue-200/65 list-inside list-disc">
                <li><b>formatting spreadsheets</b></li>
                <li><b>worrying about code syntax and environments</b></li>
                <li><b>switching between multiple tools</b></li>
              </ul>
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Newton is built to fix these problems by providing an intuitive, fully capable, all-in-one math workspace.
                With Newton, the math you need next is <b>only a few clicks away</b>; whether it's a calculation, plot, table, or unit conversion. <br/>
                <b>Do math intuitively and get answers immediately</b>.
              </p>
              <Image
                src={TimeSaving}
                width={760}
                height={668}
                alt="Blurred shape"
                style={{maxWidth: '95%'}}
              />
            </div>
          </div>
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                The solution
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Newton is built to be fast and intuitive
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Imagine creating math and getting answers immediately.
              </p>
              <div className="mx-auto max-w-xl">
                <ul
                  className="mb-8 text-xl text-blue-200/65 list-inside list-disc text-left"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <li>Type equations and variables intuitively</li>
                  <li>Tables, plots, and more are only a click away</li>
                  <li>Share and collaborate easily with a link</li>
                  <li>Units handled automatically</li>
                  <li><b>Formatting is consistent</b>: No more untangling teammates' messy spreadsheets</li>
                  <li>Look up any material property or equation in seconds: No more fumbling 10 lb textbooks or having open 30 tabs of Engineering Toolbox</li>
                  <li><b>Raw code escape hatch</b>: If Newton doesn't yet have blocks for a niche workflow, simply add a Python block.</li>
                </ul>
              </div>
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Focus on the math instead of the tool.
              </p>
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Newton will enable math <b>at the speed you think</b>.
                What used to take hours will take minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
