# Music Player

A local music player built with React and Vite. Browse the bundled songs, play a track, adjust playback, and save songs to a favourites list.

## Features

- Browse a library of 10 locally bundled songs
- Play and pause the selected song
- Skip to the previous or next song
- Seek through a song with a progress slider
- Adjust playback volume
- Highlight the currently selected song
- Add and remove songs from Favourites
- Navigate between All Songs and Favourites pages with React Router

## Routes

| Path          | Page                  |
| ------------- | --------------------- |
| `/`           | All songs             |
| `/all-songs`  | All songs             |
| `/favourites` | Saved favourite songs |

## Concepts practised

- React Context API for shared playback and favourites state
- Custom hooks for providing the song library
- `useRef` and the HTML audio element for playback control
- `useEffect` for audio events, progress updates, and volume changes
- Controlled range inputs for seeking and volume
- React Router pages and navigation
- CSS Modules and reusable components

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

Other available scripts are `npm run lint` and `npm run preview`.

## Project structure

- `src/App.jsx` - application layout and routes
- `src/components/AllSongs.jsx` - song library and favourite controls
- `src/components/Favourites.jsx` - saved songs page
- `src/components/MusicPlayer.jsx` - audio playback and player controls
- `src/components/MusicPlayContext.jsx` - shared playback and favourites state
- `src/hooks/useMusic.js` - local song data
- `public/songs/` - bundled audio files

## Notes

- The song list is currently hardcoded in `src/hooks/useMusic.js`.
- The audio files are included for local learning and demonstration. Confirm that you have permission to redistribute them before publishing this project publicly.
