import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("traviqueWishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("traviqueWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (item) => {
    const exists = wishlist.find((trip) => trip.id === item.id && trip.type === item.type);

    if (exists) {
      setWishlist(wishlist.filter((trip) => !(trip.id === item.id && trip.type === item.type)));
      toast.success("Removed from saved trips");
    } else {
      setWishlist([...wishlist, item]);
      toast.success("Added to saved trips");
    }
  };

  const isSaved = (item) => {
    return wishlist.some((trip) => trip.id === item.id && trip.type === item.type);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isSaved }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);