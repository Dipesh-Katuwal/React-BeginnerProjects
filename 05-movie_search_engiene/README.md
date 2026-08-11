# Movie Search Engine

A movie discovery app built with React, Vite, React Router, and the [TMDB API](https://www.themoviedb.org/documentation/api). Browse popular movies, search by title, open a details page, and save favourites.

## Features

- Load popular movies when the app opens
- Search for movies by title
- View poster, release date, and rating cards
- Open a dedicated movie details page
- View overview, genres, runtime, ratings, financials, and external links
- Add and remove movies from a favourites list
- Navigate between Home and Favourites pages
- Show a loading spinner while requests are running

## Routes

| Path              | Page                      |
| ----------------- | ------------------------- |
| `/` or `/Home`    | Popular movies and search |
| `/favourites`     | Saved favourite movies    |
| `/movie/:movieId` | Details for one movie     |

## API setup

The app uses TMDB for movie data and poster images. The current API helper contains an API key directly in the source code. Before publishing this repository publicly, move it to an environment variable and rotate the exposed key if it is active.

For a safer local setup:

1. Create a `.env` file in this project.
2. Add `VITE_TMDB_API_KEY=your_api_key`.
3. Update the API helper to read `import.meta.env.VITE_TMDB_API_KEY`.
4. Add `.env` to `.gitignore`.

## Concepts practised

- Fetching data with async functions and `useEffect`
- Loading and error state
- React Router routes, links, parameters, and nested layout content
- Context API for favourites
- CSS Modules for page and component styles
- Reusable movie cards and API helper functions

## Run locally

```bash
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run lint`, and `npm run preview`.

## Project structure

- `src/App.jsx` - router, movie state, loading state, and searches
- `src/pages/` - Home, Favourites, and Movie Details pages
- `src/components/api calls/apis.js` - TMDB requests
- `src/components/MovieCard.jsx` - movie summary card
- `src/ContextAPI/FavouriteContext.jsx` - favourites state
- `src/**/*.module.css` - component and page styles

## Credits

- Movie data and images: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built for React learning and experimentation
