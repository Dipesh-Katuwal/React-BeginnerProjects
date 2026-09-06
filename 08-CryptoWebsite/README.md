# LiveCrypto

A responsive cryptocurrency dashboard built with React and Vite. Browse market data, search for coins, sort the market list, switch between grid and list views, and open a detailed page with project information and a seven-day price chart.

## Features

- Cryptocurrency market list powered by CoinPaprika
- Search by coin name or symbol
- Sort by rank, name, price, or 24-hour volume
- Responsive grid and list layouts
- Coin logos, prices, market cap, volume, and daily change
- Coin details page with project metadata, tags, team, and useful links
- Seven-day responsive price chart built with Recharts
- Loading and error states
- Hash-based routing for GitHub Pages-friendly navigation

## Tech Stack

- React
- Vite
- React Router
- Recharts
- React Icons
- CSS Modules

## Getting Started

From this project directory:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Other Commands

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Routes

Because the app uses `HashRouter`, routes include a hash in the URL:

```text
/#/                 Market home page
/#/coin/btc-bitcoin Coin details page example
```

## API

The app uses the free CoinPaprika API:

- `GET /v1/tickers?limit=100` loads the market list
- `GET /v1/coins/:id` loads project details
- `GET /v1/tickers/:id/historical` loads seven days of daily price history

The historical chart intentionally requests one point per day. This keeps the number of requests and returned data small while still showing the seven-day trend. The API is external, so DNS, network access, rate limits, and provider availability can affect the app.

## Project Structure

```text
src/
	apis/          API request helpers
	components/    Reusable UI components
	pages/         Home and coin details pages
	utils/         Formatting helpers
	App.jsx        Router configuration
```

## Notes

- The API does not need an application key for the requests used by this learning project.
- For UI development without making requests, use local mock data and skip the fetch effect temporarily.
- The seven-day chart can show more visual spacing by resizing its chart container or displaying every X-axis label, but fake points should not be added because they would not represent real prices.
