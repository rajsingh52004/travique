import { FaStar } from "react-icons/fa";
import "../styles/ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.name}</h3>
      <span><FaStar /> {review.rating}</span>
      <p>{review.message}</p>
    </div>
  );
}

export default ReviewCard;