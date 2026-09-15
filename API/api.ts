const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export interface MovieSummary {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
}

export interface MovieGenre {
  id: number;
  name: string;
}

export interface MovieDetails extends MovieSummary {
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  genres: MovieGenre[];
}

interface MovieListResponse {
  results: MovieSummary[];
}

async function fetchFromTmdb<T>(path: string): Promise<T> {
  const token = process.env.TMDB_API_AUTH;

  if (!token) {
    throw new Error("TMDB_API_AUTH is not configured");
  }

  const response = await fetch(`${TMDB_BASE_URL}${path}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getMovieList(path: string): Promise<MovieSummary[]> {
  const data = await fetchFromTmdb<MovieListResponse>(path);
  return data.results;
}

export const getbestMovies = () =>
  getMovieList("/movie/popular?with_genres=16&sort_by=popularity.desc");

export const getcomedy = () =>
  getMovieList(
    "/discover/movie?with_genres=35&without_genres=16&sort_by=popularity.desc",
  );

export const getdramaMovies = () =>
  getMovieList("/discover/movie?with_genres=18&sort_by=popularity.desc");

export const gethorror = () =>
  getMovieList("/discover/movie?with_genres=27&sort_by=popularity.desc");

export const getCartoons = () =>
  getMovieList("/discover/movie?with_genres=16&sort_by=popularity.desc");

export const getMovieDescription = (id: string): Promise<MovieDetails> =>
  fetchFromTmdb<MovieDetails>(`/movie/${encodeURIComponent(id)}`);

export const getMoviesBySearch = ({
  query,
}: {
  query: string;
}): Promise<MovieSummary[]> =>
  getMovieList(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
  );
