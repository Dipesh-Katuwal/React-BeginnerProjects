# React Beginner Projects

A collection of small React applications built while learning React, component design, state management, forms, API requests, routing, and shared application state.

All projects use [Vite](https://vite.dev/) for local development and production builds. Each project is a separate application with its own `package.json` and dependencies.

## Projects

| Project                                             | What I practiced                                                                                               |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [01 Calculator](./01-calculator)                    | Component composition, `useState`, click handlers, and conditional logic                                       |
| [02 Todo App](./02-todo_app)                        | Forms, lists, controlled state, and reusable components                                                        |
| [03 Weather App](./03-weather_app)                  | `useEffect`, asynchronous requests, geocoding, and API data                                                    |
| [04 Simple Social Media](./04-simple_social_media)  | Context API, `useReducer`, forms with refs, and shared state                                                   |
| [05 Movie Search Engine](./05-movie_search_engiene) | API integration, loading states, React Router, Context API, and CSS Modules                                    |
| [06 Memory Card Game](./06-memory-card-game)        | State-driven game logic, shuffle logic, match detection, score tracking, and win state UI                      |
| [07 Music Player](./07-music_player)                | HTML audio playback, Context API, custom hooks, range inputs, routing, and favourites                          |
| [08 Crypto Website](./08-CryptoWebsite)             | CoinPaprika API data, search, sorting, responsive layouts, dynamic routes, and Recharts                        |
| [09 EMS](./09-EMS)                                  | Authentication, role-based dashboards, task assignment, employee task completion, and localStorage persistence |

The projects become progressively more involved, so they can be explored in order or opened independently.

## Requirements

- Node.js 18 or newer
- npm
- A modern web browser

## Run a project

Open a terminal in a project directory, install its dependencies, and start Vite:

```bash
cd 01-calculator
npm install
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`. Stop the server with `Ctrl+C`.

Replace `01-calculator` with any project directory from the table above.

## Common commands

Run these commands inside an individual project:

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run the project's configured linter
```

## Learning goals

- Break a user interface into focused React components.
- Pass data and event handlers through props.
- Manage local state with React hooks.
- Render lists and handle user input.
- Fetch and display data from external APIs.
- Share state with Context API and reducers.
- Add client-side pages with React Router.
- Build and style applications with Bootstrap and CSS Modules.
- Create a small interactive game using state, matching logic, and game-over UI.
- Control local audio with the HTML audio element and React refs.
- Build a music library with playback controls, progress tracking, volume, and favourites.
- Build a cryptocurrency dashboard with search, sorting, grid/list views, and responsive cards.
- Fetch coin metadata and seven-day historical prices from an external API.
- Render responsive data visualizations with Recharts.
- Build a simple employee management system with signup/login, role-based authorization, and task workflows.
- Manage shared application state with Context API while persisting demo data in localStorage.

## Notes

- Dependencies are installed separately in each project.
- `node_modules` and generated build output should not be committed.
- The movie project currently contains a TMDB API key in its source code. Before publishing this repository publicly, move that key to an environment variable and rotate the exposed key if it is active.
- The music project includes bundled MP3 files for local demonstration. Confirm that you have permission to redistribute them before publishing this repository publicly.
- The crypto project uses the free CoinPaprika API and may be affected by network availability, DNS issues, provider rate limits, or API changes.
- These applications are learning exercises and can be extended with validation, persistence, tests, and improved accessibility.

## License

This repository is a personal learning project. Add a license before redistributing the code.
