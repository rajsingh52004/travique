import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import "../styles/RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  const { toggleWishlist, isSaved } = useWishlist();
  const item = { ...restaurant, type: "restaurant" };

  return (
    <div className="mini-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <button
        className={isSaved(item) ? "mini-heart saved" : "mini-heart"}
        onClick={() => toggleWishlist(item)}
      >
        <FaHeart />
      </button>
      <div className="mini-info">
        <h3>{restaurant.name}</h3>
        <p><FaMapMarkerAlt /> {restaurant.location}</p>
        <div>
          <span><FaStar /> {restaurant.rating}</span>
          <b>{restaurant.cuisine}</b>
        </div>
        <small>{restaurant.status}</small>
      </div>
    </div>
  );
}

export default RestaurantCard;