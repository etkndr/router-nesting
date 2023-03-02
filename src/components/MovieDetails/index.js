import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie.id === +movieId);

  return (
    <div className="comp purple">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;
