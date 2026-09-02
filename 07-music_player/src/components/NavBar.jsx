import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={`navbar navbar-expand-sm ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          Music Player
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className={`nav-link ${styles.link}`} to="/all-songs">
            All Songs
          </Link>
          <Link className={`nav-link ${styles.link}`} to="/favourites">
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
