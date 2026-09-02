import { createContext } from "react";
import { useState } from "react";
import { useMusic } from "../hooks/useMusic";

export const MusicPlayContext = createContext(null);

export const MusicPlayProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const { songs } = useMusic();

  const handlePlay = (song) => {
    setSelectedSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (selectedSong.id - 2 >= 0) {
      setSelectedSong(songs[selectedSong.id - 2]);
    } else {
      setSelectedSong(songs[songs.length - 1]);
    }
  };

  const handleNext = () => {
    if (selectedSong.id > songs.length - 1) {
      setSelectedSong(songs[0]);
    } else {
      setSelectedSong(songs[selectedSong.id]);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const toggleFavorite = (song) => {
    setFavoriteSongs((currentFavorites) => {
      const isFavorite = currentFavorites.some(
        (favoriteSong) => favoriteSong.id === song.id,
      );

      return isFavorite
        ? currentFavorites.filter((favoriteSong) => favoriteSong.id !== song.id)
        : [...currentFavorites, song];
    });
  };

  return (
    <MusicPlayContext.Provider
      value={{
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
        favoriteSongs,
        toggleFavorite,
      }}
    >
      {children}
    </MusicPlayContext.Provider>
  );
};
