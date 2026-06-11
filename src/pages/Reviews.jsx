import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/travelData";
import Footer from "../components/Footer";
import "../styles/Pages.css";

function Reviews() {
  return (
    <>
      <section className="page-hero">
        <h1>Traveler Reviews</h1>
        <p>Real travel stories and ratings.</p>
      </section>

      <section className="page-section">
        <div className="travique-container page-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Reviews;