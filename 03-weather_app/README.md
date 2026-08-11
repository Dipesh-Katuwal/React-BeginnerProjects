# Weather App

A React weather lookup app that converts a city name into coordinates and then requests current weather data from Open-Meteo.

## Features

- Start with Kathmandu as the default city
- Search for another city
- Geocode city names with the Open-Meteo Geocoding API
- Display the selected city's weather data
- Handle empty input and unknown cities

## Data source

This project uses the free [Open-Meteo API](https://open-meteo.com/). The Geocoding API finds a location, then the Forecast API uses its latitude and longitude. No API key is required for the current implementation.

## Concepts practised

- `useState` for city, weather, and error state
- `useEffect` for requests when the city changes
- Chaining asynchronous API requests
- Conditional rendering for weather and error states
- Passing state setters into child components

## Run locally

```bash
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run lint`, and `npm run preview`.

## Project structure

- `src/App.jsx` - city state and Open-Meteo requests
- `src/components/GetCity.jsx` - city input
- `src/components/WatherCard.jsx` - weather display
- `src/components/*.module.css` - component styles

## Possible improvements

The next improvements could include request cancellation, a visible loading state, stronger network-error handling, unit selection, and weather condition icons.
