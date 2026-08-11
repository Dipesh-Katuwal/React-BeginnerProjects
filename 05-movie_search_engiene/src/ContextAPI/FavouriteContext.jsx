import { createContext,useState } from "react";

export const FavouriteContext= createContext(null) //creating context object

export function FavouriteProvider({children}){
  const [favourites,setFavourites]=useState([])
  return (
  <FavouriteContext.Provider value={{favourites,setFavourites}}>
      {children}
    </FavouriteContext.Provider>
  )
}