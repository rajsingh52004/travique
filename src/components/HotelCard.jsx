import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import "../styles/HotelCard.css";

function HotelCard({ hotel }) {
  const { toggleWishlist, isSaved } = useWishlist();
  const item = { ...hotel, type: "hotel" };

  return (
    <div className="mini-card">
      <img src={hotel.image} alt={hotel.name} />
      <button
        className={isSaved(item) ? "mini-heart saved" : "mini-heart"}
        onClick={() => toggleWishlist(item)}
      >
        <FaHeart />
      </button>
      <div className="mini-info">
        <h3>{hotel.name}</h3>
        <p><FaMapMarkerAlt /> {hotel.location}</p>
        <div>
          <span><FaStar /> {hotel.rating}</span>
          <b>₹{hotel.price}/night</b>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;