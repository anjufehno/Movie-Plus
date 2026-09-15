import { getMoviesBySearch } from "@/API/api";
import AboutMeButton from "@/components/AboutMeButton";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";

interface PageProps {
  searchParams: { query?: string };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.query?.trim() ?? "";
  const searchedMovies = query
    ? await getMoviesBySearch({ query })
    : [];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black text-white">
      <nav className="w-full border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-3">
            <AboutMeButton />
            <AuthButton />
          </div>

          <Header />
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10">
        <h1 className="mb-8 text-center text-2xl font-thin md:text-3xl">
          {query ? `Search results for “${query}”` : "Search movies"}
        </h1>

        {searchedMovies.length > 0 ? (
          <ul className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {searchedMovies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <li key={movie.id}>
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                  />
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-center text-neutral-400">
            {query
              ? "No movies found. Try another search."
              : "Enter a movie title in the search field above."}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
