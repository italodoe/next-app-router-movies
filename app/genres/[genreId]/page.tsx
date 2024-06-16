import { MovieResult, getAllMovies, getMoviesWithGenres } from "@/lib/movies";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    genreId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { genreId } = params;
  let movies: MovieResult[] = [];
  if (genreId === "all") {
    movies = await getAllMovies();
  } else {
    const numberGenreId = Number(genreId);
    if (Number.isNaN(numberGenreId)) return notFound();
    movies = await getMoviesWithGenres([numberGenreId]);
  }

  console.log({ movies });

  return (
    <main className="flex flex-col">
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </main>
  );
}
