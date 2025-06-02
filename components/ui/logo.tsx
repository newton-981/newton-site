import Link from "next/link";
import Image from "next/image";
import logoWide from "@/public/images/logo_wide_dark.png";
import logoPlain from '@/public/images/logo_plain_dark.svg'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logoWide} alt="Newton Logo" height={50} />
    </Link>
  );
}
