import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { useEffect, useState } from "react";
import { getPopularMovies, searchingMovies } from "./components/api calls/apis";
import Loader from "./components/Loader";
import MovieDetails from './pages/MovieDetails'

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  function Layout() {
    return (
      <>
        <NavBar loadPopularMovies={loadPopularMovies} />
        {loading ? <Loader /> : <Outlet />}
      </>
    );
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/Home",
          element: <Home movies={movies} setSearch={setSearch} />,
        },
        {
          path: "/",
          element: <Home movies={movies} setSearch={setSearch} />,
        },
        { path: "/favourites", element: <Favourites /> },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  async function loadPopularMovies() {
    setLoading(true);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPopularMovies();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    const searchMovies = async () => {
      setLoading(true);
      try {
        const search_movies = await searchingMovies(search);
        setMovies(search_movies);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [search]);

  return <RouterProvider router={router} />;
}

export default App;
