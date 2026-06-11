import { createContext, useContext } from "react";
import { destinations, hotels, restaurants, activities, reviews } from "../data/travelData";

const TravelContext = createContext();

export function TravelProvider({ children }) {
  return (
    <TravelContext.Provider value={{ destinations, hotels, restaurants, activities, reviews }}>
      {children}
    </TravelContext.Provider>
  );
}

export const useTravel = () => useContext(TravelContext);