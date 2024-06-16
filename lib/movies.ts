import { release } from "os";

export type Genre = {
  id: number;
  name: string;
};

export type MovieResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
  return await response.json();
};

export const getMoviesGenRes = async () => {
  const { genres } = await tmdbFetch("genre/movie/list?language=en");
  return genres as Genre[];
};

export const getMoviesWithGenres = async (genreIds: number[]) => {
  const path = `discover/movie?with_genres=${genreIds.map(String).join(",")}`;
  const { results } = await tmdbFetch(path);
  const movies = results.map((result: MovieResult) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as MovieResult[];
};

export const getAllMovies = async () => {
  return getMoviesWithGenres([]);
};
