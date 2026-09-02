import { useContext } from "react";
import { MusicPlayContext } from "./MusicPlayContext";
import styles from "./Favourites.module.css";
import { FaHeart } from "react-icons/fa";

export default function Favourites() {
  const { favoriteSongs, handlePlay, toggleFavorite } =
    useContext(MusicPlayContext);

  return (
    <div className={styles.favouritesContainer}>
      <h2>Favourites ({favoriteSongs.length})</h2>
      {favoriteSongs.length === 0 ? (
        <p className={styles.emptyMessage}>No favorite songs yet.</p>
      ) : (
        <ul className={styles.favouritesList}>
          {favoriteSongs.map((song) => (
            <li
              key={song.id}
              className={styles.favouriteItem}
              onClick={() => handlePlay(song)}
            >
              <div className={styles.favouriteInfo}>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <button
                type="button"
                className={styles.favoriteButton}
                onClick={(event) => {
                  toggleFavorite(song);
                }}
              >
                <FaHeart />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
