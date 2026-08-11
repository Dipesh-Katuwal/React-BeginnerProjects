const API_KEY = "7945b237225c7863d21c24bf9bd49817";
const BASE_URL = "https://api.themoviedb.org";

export async function getPopularMovies() {
  const allMovies = [];

  for (const page of [1, 2, 3, 4, 5]) {
    const response = await fetch(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );

    const data = await response.json();
    allMovies.push(...data.results);
  }

  const uniqueMovies = [
    ...new Map(allMovies.map((movie) => [movie.id, movie])).values(),
  ];

  return uniqueMovies;
}

export async function searchingMovies(searchQuery) {
  let data;
  await fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .then((result) => {
      data = result.results;
    });
  return data;
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error(`Movie request failed: ${response.status}`);
  }

  return response.json();
}
