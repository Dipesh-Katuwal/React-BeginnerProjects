import { useState } from "react";

/**
 * Custom Hook: useMusic
 *
 * Manages all music-related data and state.
 * Currently returns hardcoded songs with actual MP3 file references.
 *
 * URL Format Explanation:
 * - Use forward slashes only: /songs/filename.mp3
 * - The "/" refers to the public folder in Vite
 * - This works both in development and production
 * - NEVER use backslashes or absolute file paths!
 */

export const useMusic = () => {
  const [songs] = useState([
    {
      id: 1,
      title: "Alag Aasmaan",
      artist: "Anuv Jain",
      url: "/songs/Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3",
      duration: 226,
    },
    {
      id: 2,
      title: "Downers At Dusk",
      artist: "Talha Anjum",
      url: "/songs/Downers At Dusk - Talha Anjum  Prod. by Umair (Official Music Video) (1).mp3",
      duration: 256,
    },
    {
      id: 3,
      title: "Flash",
      artist: "Cigarettes After Sex",
      url: "/songs/Flash - Cigarettes After Sex.mp3",
      duration: 274,
    },
    {
      id: 4,
      title: "Hataash",
      artist: "Prince Deukadi",
      url: "/songs/Hataash - Prince Deukadi.mp3",
      duration: 260,
    },
    {
      id: 5,
      title: "Running Up That Hill",
      artist: "Kate Bush",
      url: "/songs/Kate Bush - Running Up That Hill - Official Music Video.mp3",
      duration: 298,
    },
    {
      id: 6,
      title: "Hey There Delilah",
      artist: "Plain White T's",
      url: "/songs/Plain White T's - Hey There Delilah (Lyrics).mp3",
      duration: 232,
    },
    {
      id: 7,
      title: "Sweet",
      artist: "Cigarettes After Sex",
      url: "/songs/Sweet - Cigarettes After Sex.mp3",
      duration: 291,
    },
    {
      id: 8,
      title: "August",
      artist: "Taylor Swift",
      url: "/songs/Taylor Swift  august (Official Lyric Video).mp3",
      duration: 261,
    },
    {
      id: 9,
      title: "Firfirey",
      artist: "Yabesh Thapa",
      url: "/songs/Yabesh Thapa - Firfirey  OFFICIAL MUSIC VIDEO.mp3",
      duration: 256,
    },
    {
      id: 10,
      title: "Kasari",
      artist: "Yabesh Thapa",
      url: "/songs/Yabesh Thapa - Kasari  कसर.mp3",
      duration: 251,
    },
  ]);

  return { songs };
};
