import Link from "next/link";

export default function AboutMeButton() {
  return (
    <Link
      href="/aboutMe"
      className="rounded-md border px-3 py-2 font-thin no-underline transition hover:bg-neutral-800"
    >
      About me
    </Link>
  );
}
