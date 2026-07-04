export const metadata = {
  title: "Careers – Newton",
  description: "Join the Newton team.",
};

export default function CareersPage() {
  return (
    <section className="relative flex grow flex-col">
      <div className="mx-auto flex w-full max-w-6xl grow flex-col px-4 sm:px-6">
        <div className="flex grow flex-col items-center justify-center py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-200 md:text-5xl">
            Join Newton
          </h1>
          <p className="mb-4 max-w-xl text-lg text-blue-200/65">
            We're building the future of scientific computing. If you're
            exceptional at what you do and seek hard problems,
            reach out.
          </p>
          <p className="mb-8 max-w-xl text-lg text-blue-200/65">
            Experience as a developer of Jupyter related tools is a plus.
          </p>
          <p className="mb-8 text-blue-200/65">
            Send resume and/or 3 bullet points demonstrating exceptional ability to{" "}
            <a
              href="mailto:careers@newton.app"
              className="text-blue-500 transition hover:text-blue-400"
            >
              careers@newton.app
            </a>
          </p>
          <p className="text-blue-200/65 text-xs max-w-xl cursor-default opacity-0 hover:opacity-100 transition-opacity">
            ps. tired of forced to vibe coding? AI psychosis? tokenmaxxing? At Newton, humans own every line of code.
            While AI is extremely useful, the buck stops at you.
          </p>
        </div>
      </div>
    </section>
  );
}
