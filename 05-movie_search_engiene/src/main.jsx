import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavouriteContext } from "./ContextAPI/FavouriteContext.jsx";
import { FavouriteProvider } from "./ContextAPI/FavouriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <FavouriteProvider>
        <App/>
      </FavouriteProvider>
  </StrictMode>,
);
