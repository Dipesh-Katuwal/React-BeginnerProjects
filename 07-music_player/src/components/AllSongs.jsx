import { useContext } from "react";
import { useMusic } from "../hooks/useMusic";
import styles from "./AllSongs.module.css";
import { MusicPlayContext } from "./MusicPlayContext";
import { GiMusicalNotes } from "react-icons/gi";
import { CiPlay1 } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function AllSongs() {
  const { songs } = useMusic();
  const { handlePlay, selectedSong, favoriteSongs, toggleFavorite } =
    useContext(MusicPlayContext);

  return (
    <div className={styles.allSongsContainer}>
      <h2>All Songs ({songs.length})</h2>
      <ul className={styles.songsList}>
        {songs.map((song) => (
          <li
            key={song.id}
            className={
              selectedSong?.id === song.id
                ? styles.glowsongItem
                : styles.songItem
            }
            onClick={() => {
              handlePlay(song);
            }}
          >
            <div className={styles.songInfo}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <small>
                {Math.floor(song.duration / 60)}:
                {String(song.duration % 60).padStart(2, "0")}
              </small>
            </div>
            <span className={styles.note}>
              {selectedSong?.id === song.id ? <GiMusicalNotes /> : <CiPlay1 />}
            </span>
            <button
              type="button"
              className={styles.favoriteButton}
              onClick={(event) => {
                event.stopPropagation();
                toggleFavorite(song);
              }}
            >
              {favoriteSongs.some(
                (favoriteSong) => favoriteSong.id === song.id,
              ) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
