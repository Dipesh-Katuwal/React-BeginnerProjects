import MovieCard from "./MovieCard"
import styles from './MovieBox.module.css'

function MovieBox({movies}){
  return (
    <div className={styles.movie_box}>
      {
        movies.map(movie => {
        return <MovieCard movie={movie} key={movie.id}></MovieCard>
      })
      }
    </div>
  )
}

export default MovieBox