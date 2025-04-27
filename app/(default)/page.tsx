export const metadata = {
  title: "Newton",
  description: "Ushering in a New Era Where Technology Obliterates Number-crunching",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Hero2 from "@/components/hero-home2";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Hero2 />
      {/* <Workflows /> */}
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
