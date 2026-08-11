import { useContext } from "react"
import { FavouriteContext } from "../ContextAPI/FavouriteContext"
import MovieBox from "../components/MovieBox"
import styles from './Favourites.module.css'
function Favourites(){
  const {favourites,setFavourites}=useContext(FavouriteContext)
  return (
    <div className={styles.favourites}>
      {favourites.length>0?<MovieBox movies={favourites}/>:<h1 className={styles.nofav}>NO Favourites yet</h1>}
    </div>
  )
}
export default Favourites