import { createContext } from "react";


export const ClickContext=createContext(null)

export function ClickContextHandler({children, value}){
  return(
    <ClickContext.Provider value={value}>
    {children}
  </ClickContext.Provider>
  )
}