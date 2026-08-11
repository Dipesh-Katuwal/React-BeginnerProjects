import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavouriteContext } from "../ContextAPI/FavouriteContext";
import styles from "./FavouriteButton.module.css";

function FavouriteButton({ movie }) {
  const { favourites, setFavourites } = useContext(FavouriteContext);

  const fav = favourites.some((favourite) => favourite.id === movie.id);

  const handleFavourite = () => {
    if (!fav) {
      setFavourites([...favourites, movie]);
    } else {
      setFavourites(favourites.filter((favourite) => favourite.id != movie.id));
    }
  };

  return (
    <div className={styles.favourite}>
      <button
        className={styles.favourite_button}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleFavourite();
        }}
      >
        {fav ? <FaHeart color="red" size={20} /> : <CiHeart size={23} />}
      </button>
    </div>
  );
}

export default FavouriteButton;
