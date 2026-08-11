import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar({loadPopularMovies}) {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.bg_body_tertiary}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.name}`} to="/Home" onClick={()=>{
          loadPopularMovies();
        }}>
          MovieS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={styles.navbar_nav}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home" onClick={()=>{
                loadPopularMovies();
              }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
