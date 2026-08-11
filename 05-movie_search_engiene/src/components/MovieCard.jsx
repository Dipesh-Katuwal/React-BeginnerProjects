import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : null;

  return (
    <>
      <Link to={`/movie/${movie.id}`} className={styles.movie_link}>
        <div className={styles.movie_card}>
          <div className={styles.poster_frame}>
            <FavouriteButton movie={movie} className={styles.fav} />
            {posterUrl ? (
              <img
                className={styles.poster}
                src={posterUrl}
                alt={`${movie.title} poster`}
              />
            ) : (
              <div className={styles.poster_fallback}>No poster available</div>
            )}
            <div className={styles.details_overlay}>
              <p className={styles.rating}>
                ⭐{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </p>
            </div>
          </div>
          <div className={styles.card_content}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.release_date}>
              {movie.release_date || "Release date unavailable"}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
