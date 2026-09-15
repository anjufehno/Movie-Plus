"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const query = searchText.trim();
    if (!query) return;

    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex items-center gap-2"
    >
      <label htmlFor="search-input" className="sr-only">
        Search movies
      </label>

      <input
        id="search-input"
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search movies"
        autoComplete="off"
        className="h-9 w-40 rounded border border-neutral-700 bg-neutral-950 px-3 text-sm text-white outline-none transition focus:border-neutral-400 md:w-64"
      />

      <button
        type="submit"
        className="rounded px-2 py-1 text-xl transition hover:bg-neutral-800"
        aria-label="Search"
      >
        🔎
      </button>
    </form>
  );
}
