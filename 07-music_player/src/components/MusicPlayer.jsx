import { useContext, useRef } from "react";
import styles from "./MusicPlayer.module.css";
import { MusicPlayContext } from "./MusicPlayContext";
import { useEffect } from "react";
import { CiVolumeHigh } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { TbPlayerPause } from "react-icons/tb";

export function MusicPlayer() {
  const audioRef = useRef(null);
  const {
    isPlaying,
    handlePlay,
    selectedSong,
    togglePlay,
    handlePrevious,
    handleNext,
    handleVolumeChange,
    currentTime,
    setCurrentTime,
    volume,
  } = useContext(MusicPlayContext);

  useEffect(() => {
    if (!audioRef.current || !selectedSong) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, selectedSong]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate); // listens to audio's built-in event (fires every ~250ms as playback progresses)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [selectedSong, setCurrentTime]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [selectedSong, volume]);

  return (
    <div className={styles.musicPlayerContainer}>
      {selectedSong === null ? (
        <h2>select song to play</h2>
      ) : (
        <div className={styles.player}>
          <audio ref={audioRef} src={selectedSong.url}></audio>

          <div className={styles.song_info}>
            <h1 className={styles.title}>{selectedSong.title}</h1>
            <small className={styles.artist}>{selectedSong.artist}</small>
          </div>
          <div className={styles.progress}>
            <span>
              {Math.floor(currentTime / 60)}:
              {String(Math.floor(currentTime % 60)).padStart(2, "0")}
            </span>
            <input
              type="range"
              min="0"
              max={selectedSong.duration}
              value={currentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }}
            />
            <small>
              {Math.floor(selectedSong.duration / 60)}:
              {String(selectedSong.duration % 60).padStart(2, "0")}
            </small>
          </div>
          <div className={styles.play_pause}>
            <button
              className={styles.previous_button}
              onClick={() => {
                handlePrevious();
              }}
            >
              <MdSkipPrevious />
            </button>
            <button
              className={styles.play_button}
              onClick={() => {
                togglePlay();
              }}
            >
              {isPlaying ? <TbPlayerPause /> : <CiPlay1 />}
            </button>
            <button
              className={styles.next_button}
              onClick={() => {
                handleNext();
              }}
            >
              <MdSkipNext />
            </button>
          </div>
          <div className={styles.volume_div}>
            <CiVolumeHigh />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
            />
          </div>
        </div>
      )}
    </div>
  );
}
