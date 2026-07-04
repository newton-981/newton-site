import Image from "next/image";

export const metadata = {
  title: "Team – Newton",
  description: "Meet the people building Newton.",
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string; // path relative to /public — leave undefined to show placeholder
}

const team: TeamMember[] = [
  {
    name: "Quinn Marsh",
    title: "Founder & CEO",
    bio: "Ex-hardware engineer at LightManufacturing. "+
    "After seeing engineering tools fall short of what's possible, Quinn founded Newton to make math fast and accessible for everyone.",
    image: "/images/team/quinn.png",
  },
  // Add more team members here
];

function Avatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        width={512}
        height={512}
        className="h-32 w-32 rounded-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-800 text-4xl text-gray-600">
      {/* Replace with <img> once photos are ready */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default function TeamPage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-28">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-200 md:text-5xl">
              Meet the team
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-200/65">
              Hi, it's Quinn! { " "} 
              <a href="/careers" className=" underline">
                Help us fill out this page
              </a>
            </p>
          </div>

          {/* Team grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name + member.title}
                className="flex flex-col items-center text-center"
              >
                <Avatar member={member} />
                <h2 className="mt-5 text-lg font-semibold text-gray-200">
                  {member.name}
                </h2>
                <p className="text-sm font-medium text-blue-500">
                  {member.title}
                </p>
                <p className="mt-3 text-sm text-blue-200/65">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
