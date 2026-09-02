import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicControl } from "./components/MusicControl";
import NavBar from "./components/NavBar";
import AllSongs from "./components/AllSongs";
import Playlists from "./components/Favourites";

//routing
function Layout() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="content-container">
        <MusicPlayer />
        <MusicControl>
          <Outlet />
        </MusicControl>
      </div>
    </div>
  );
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <AllSongs /> },
      { path: "/all-songs", element: <AllSongs /> },
      { path: "/favourites", element: <Playlists /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
