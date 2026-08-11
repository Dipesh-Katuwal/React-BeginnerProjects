import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../components/api calls/apis";
import styles from "./MovieDetails.module.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (requestError) {
        setError(requestError.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <p className={styles.message}>{error}</p>;
  }

  if (!movie) {
    return <p className={styles.message}>Loading movie details...</p>;
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "Not available";

  return (
    <main className={styles.details_page}>
      {backdropUrl && (
        <div
          className={styles.backdrop}
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}
      <section className={styles.hero}>
        <div className={styles.poster_frame}>
          {posterUrl ? (
            <img
              className={styles.poster}
              src={posterUrl}
              alt={`${movie.title} poster`}
            />
          ) : (
            <div className={styles.poster_fallback}>No poster available</div>
          )}
        </div>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{movie.status || "Movie details"}</p>
          <h1>{movie.title}</h1>
          {movie.tagline && <p className={styles.tagline}>{movie.tagline}</p>}
          <p className={styles.overview}>
            {movie.overview || "No overview available."}
          </p>
          <div className={styles.actions}>
            {movie.homepage && (
              <a href={movie.homepage} target="_blank" rel="noreferrer">
                Official site
              </a>
            )}
            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                IMDb
              </a>
            )}
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </strong>
          <span>Rating / 10</span>
        </div>
        <div>
          <strong>{movie.vote_count?.toLocaleString() || "N/A"}</strong>
          <span>Votes</span>
        </div>
        <div>
          <strong>{runtime}</strong>
          <span>Runtime</span>
        </div>
        <div>
          <strong>{movie.release_date || "N/A"}</strong>
          <span>Release date</span>
        </div>
      </section>

      <section className={styles.info_grid}>
        <div className={styles.info_section}>
          <h2>Details</h2>
          <dl>
            <div>
              <dt>Original title</dt>
              <dd>{movie.original_title || "N/A"}</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>{movie.original_language?.toUpperCase() || "N/A"}</dd>
            </div>
            <div>
              <dt>Genres</dt>
              <dd>
                {movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}
              </dd>
            </div>
            <div>
              <dt>Popularity</dt>
              <dd>{movie.popularity?.toFixed(1) || "N/A"}</dd>
            </div>
          </dl>
        </div>
        <div className={styles.info_section}>
          <h2>Financials</h2>
          <dl>
            <div>
              <dt>Budget</dt>
              <dd>
                {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
              </dd>
            </div>
            <div>
              <dt>Revenue</dt>
              <dd>
                {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
              </dd>
            </div>
            <div>
              <dt>Companies</dt>
              <dd>
                {movie.production_companies
                  ?.map((company) => company.name)
                  .join(", ") || "N/A"}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
