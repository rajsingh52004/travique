import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import "../styles/ThingsToDoCard.css";

function ThingsToDoCard({ activity }) {
  const { toggleWishlist, isSaved } = useWishlist();
  const item = { ...activity, type: "activity", name: activity.title };

  return (
    <div className="mini-card">
      <img src={activity.image} alt={activity.title} />
      <button
        className={isSaved(item) ? "mini-heart saved" : "mini-heart"}
        onClick={() => toggleWishlist(item)}
      >
        <FaHeart />
      </button>
      <div className="mini-info">
        <h3>{activity.title}</h3>
        <p><FaMapMarkerAlt /> {activity.location}</p>
        <div>
          <span><FaStar /> {activity.rating}</span>
          <b>{activity.category}</b>
        </div>
      </div>
    </div>
  );
}

export default ThingsToDoCard;