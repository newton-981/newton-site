import Logo from "./logo";
// import Image from "next/image";
// import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration — uncomment when ready
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row sm:py-10">
          {/* Logo */}
          <Logo />

          {/* Nav links */}
          <nav className="flex gap-6 text-sm">
            <a
              className="text-blue-200/65 transition hover:text-blue-500"
              href="/team"
            >
              Team
            </a>
            <a
              className="text-blue-200/65 transition hover:text-blue-500"
              href="/careers"
            >
              Careers
            </a>
            {/* Uncomment as pages go live:
            <a className="text-blue-200/65 transition hover:text-blue-500" href="/blog">Blog</a>
            <a className="text-blue-200/65 transition hover:text-blue-500" href="/pricing">Pricing</a>
            <a className="text-blue-200/65 transition hover:text-blue-500" href="/changelog">Changelog</a>
            <a className="text-blue-200/65 transition hover:text-blue-500" href="/terms">Terms</a>
            <a className="text-blue-200/65 transition hover:text-blue-500" href="/privacy">Privacy</a>
            */}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-blue-200/65">
            © {new Date().getFullYear()} Newton
          </p>
        </div>

        {/* Full footer columns — uncomment when ready
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Features</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Integrations</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Pricing &amp; Plans</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Changelog</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Our method</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">User policy</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">About us</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Blog</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="/careers">Careers</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Financial statements</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Community</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Terms of service</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Report a vulnerability</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Content Library</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Templates</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Tutorials</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Knowledge base</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Learn</a></li>
              <li><a className="text-blue-200/65 transition hover:text-blue-500" href="#0">Cookie manager</a></li>
            </ul>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
}
