import Image from "next/image";
import Link from "next/link";
import logo from "@/image/logo.jpg";
import Search from "@/components/Search";

export default function Header() {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Search />

      <Link href="/" aria-label="MoviePlus home" className="shrink-0">
        <Image
          src={logo}
          alt="MoviePlus"
          width={160}
          height={160}
          className="h-auto w-24 md:w-32"
          priority
        />
      </Link>
    </div>
  );
}
