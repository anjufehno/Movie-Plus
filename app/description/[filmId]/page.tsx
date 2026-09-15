import Image from "next/image";
import { getMovieDescription } from "@/API/api";
import AboutMeButton from "@/components/AboutMeButton";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

type MovieDescriptionPageProps = {
  params: {
    filmId: string;
  };
};

export default async function MovieDescriptionPage({
  params,
}: MovieDescriptionPageProps) {
  const movie = await getMovieDescription(params.filmId);
  const genres = movie.genres.map((genre) => genre.name).join(", ");

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

      <main className="mx-auto grid w-full max-w-5xl flex-1 gap-10 px-4 py-12 md:grid-cols-[auto_1fr] md:items-start">
        <div className="flex justify-center">
          {movie.poster_path ? (
            <Image
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={`${movie.title} poster`}
              width={330}
              height={495}
              className="h-auto w-[280px] rounded object-cover md:w-[330px]"
              priority
            />
          ) : (
            <div className="flex h-[495px] w-[330px] items-center justify-center rounded bg-neutral-900 text-neutral-400">
              Poster unavailable
            </div>
          )}
        </div>

        <article className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold md:text-4xl">
            {movie.title}
          </h1>

          <dl className="grid gap-4 text-neutral-200">
            <div>
              <dt className="font-medium text-white">Release date</dt>
              <dd>{movie.release_date || "Unknown"}</dd>
            </div>

            <div>
              <dt className="font-medium text-white">Genres</dt>
              <dd>{genres || "Not specified"}</dd>
            </div>
          </dl>

          <section>
            <h2 className="mb-2 text-xl font-medium">Overview</h2>
            <p className="max-w-2xl leading-7 text-neutral-300">
              {movie.overview || "No description is available for this movie."}
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
