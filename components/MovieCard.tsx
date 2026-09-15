"use client";

import Image from "next/image";
import Link from "next/link";
import type { MovieSummary } from "@/API/api";

type MovieCardProps = Pick<MovieSummary, "id" | "title" | "poster_path">;

export default function MovieCard({ id, title, poster_path }: MovieCardProps) {
  const truncatedTitle = title.split(" ").slice(0, 5).join(" ");

  return (
    <Link
      href={`/description/${id}`}
      className="flex flex-col items-center text-center no-underline"
    >
      {poster_path ? (
        <Image
          width={210}
          height={315}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={`${title} poster`}
          className="h-[315px] w-[210px] object-cover"
        />
      ) : (
        <div
          className="flex h-[315px] w-[210px] items-center justify-center bg-neutral-900 px-4 text-sm text-neutral-400"
          aria-label={`Poster unavailable for ${title}`}
        >
          Poster unavailable
        </div>
      )}

      <span className="max-w-[210px] overflow-hidden text-ellipsis whitespace-nowrap font-thin">
        {truncatedTitle}
      </span>
    </Link>
  );
}
