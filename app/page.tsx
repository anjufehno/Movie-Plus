import AuthButton from "../components/AuthButton";
import AboutMeButton from "../components/AboutMeButton";
import {
  getbestMovies,
  getcomedy,
  getdramaMovies,
  gethorror,
  getCartoons,
  type MovieSummary,
} from "@/API/api";
import MovieCard from "@/components/MovieCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type MovieSectionProps = {
  title: string;
  movies: MovieSummary[];
  startIndex?: number;
};

function MovieSection({
  title,
  movies,
  startIndex = 5,
}: MovieSectionProps) {
  const visibleMovies = movies.slice(startIndex, startIndex + 5);

  return (
    <section className="w-full">
      <h2 className="mb-6 text-center text-2xl font-thin md:text-3xl lg:text-4xl">
        {title}
      </h2>

      <ul className="flex flex-wrap justify-center gap-5">
        {visibleMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function Index() {
  const isSupabaseConnected = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const [bestMovies, comedy, dramaMovies, horror, cartoons] =
    await Promise.all([
      getbestMovies(),
      getcomedy(),
      getdramaMovies(),
      gethorror(),
      getCartoons(),
    ]);

  const sections = [
    { title: "Best movies", movies: bestMovies },
    { title: "Comedy movies", movies: comedy },
    { title: "Drama movies", movies: dramaMovies },
    { title: "Horror movies", movies: horror },
    { title: "Cartoons", movies: cartoons, startIndex: 10 },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black text-white">
      <nav className="w-full border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-3">
            <AboutMeButton />
            {isSupabaseConnected && <AuthButton />}
          </div>

          <Header />
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-10">
        {sections.map((section) => (
          <MovieSection key={section.title} {...section} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
