import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useWishlist } from "../context/WishlistContext";
import "../styles/DestinationCard.css";
import { useNavigate } from "react-router-dom";

function DestinationCard({ destination }) {
  const { toggleWishlist, isSaved } = useWishlist();
  const navigate = useNavigate();

  const item = {
    ...destination,
    type: "destination",
    name: destination.title,
  };

  return (
    <motion.div
  className="destination-card"
  whileHover={{ y: -10 }}
  onClick={() =>
    navigate(`/destination/${destination.id}`)
  }
>
      <div className="destination-img-box">
        <img src={destination.image} alt={destination.title} />

        <button
          className={isSaved(item) ? "save-btn saved" : "save-btn"}
          onClick={() => toggleWishlist(item)}
        >
          <FaHeart />
        </button>

        <span className="destination-tag">{destination.tag}</span>
      </div>

      <div className="destination-info">
        <h3>{destination.title}</h3>

        <p className="location">
          <FaMapMarkerAlt /> {destination.country}
        </p>

        <div className="rating-row">
          <span>
            <FaStar /> {destination.rating}
          </span>

          <small>
            {(destination.reviews || 0).toLocaleString("en-IN")} reviews
          </small>
        </div>
      </div>
    </motion.div>
  );
}

export default DestinationCard;