import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";




export default function HeroHome2() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20 [&_strong]:text-blue-200">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Why we are building Newton
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Current math tools are slow.
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-2 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                With current math tools, <strong>most time is wasted ...</strong>
              </p>
              <div 
                className="mx-auto max-w-xl" 
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <ul className="mb-8 text-xl text-blue-200/65 list-inside list-disc text-left">
                  <li>formatting <strong>spreadsheets</strong></li>
                  <li>fighting <strong>code syntax and environments</strong></li>
                  <li>untangling teammates' <strong>messy spreadsheets or code</strong></li>
                  <li><strong>context switching</strong> between many tools</li>
                  <li>looking up <strong>material properties</strong> or equations</li>
                  <li>double checking and <strong>converting units</strong></li>
                </ul>
              </div>
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Newton solves these problems by making everything you need a click away. Hour long tasks are reduced to minutes.
                
                <br />
                <strong>Do math intuitively and get answers immediately</strong>.
              </p>
              <img
                src="/images/TimeSpentDoingMath.svg"
                alt="Time Spent Doing Math"
                style={{maxWidth: '95%', width: '760px'}}
                data-aos="fade-up"
                data-aos-delay={200}
              />
            </div>
          </div>

          {/* Section 2 header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                How Newton is Different
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Newton is built to be simple AND fully capable.
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <strong>With most tools</strong> there is an inherent trade-off between <strong>simplicity</strong> and <strong>capability</strong>. 
                Newton's unique approach enables <strong>both</strong> by allowing beautiful intuitive UI to live alongside raw code.
              </p>
              <Image
                src="/images/ComparisonMatrix.svg"
                width={760}
                height={668}
                alt="Blurred shape"
                style={{maxWidth: '95%'}}
                data-aos="fade-up"
                data-aos-delay={200}
              />
            </div>
          </div>
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                For Engineers and Scientists
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Newton is Magic for Engineering and Science
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                See what makes Newton faster...
              </p>
              <div className="mx-auto max-w-xl">
                <ul
                  className="mb-8 text-xl text-blue-200/65 list-inside list-disc text-left"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <li><strong>Type equations and variables intuitively</strong></li>
                  <li><strong>Unit conversions</strong> handled automatically</li>
                  <li><strong>Tables, plots</strong>, etc. are only a click away</li>
                  <li><strong>Formatting is consistent:</strong> No more untangling teammates' messy spreadsheets</li>
                  <li>*<strong>Share and collaborate</strong> easily with a link</li>
                  <li>*<strong>Look up any material property or equation</strong> in seconds: No more fumbling 10 lb textbooks or opening 30 tabs of Engineering Toolbox</li>
                  <li><strong>Raw code escape hatch:</strong> If Newton doesn't yet have what you need, simply add a Python cell like Jupyter.</li>
                </ul>
              </div>
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                * Features in development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
