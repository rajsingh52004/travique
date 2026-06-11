import { restaurants } from "../data/travelData";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";
import "../styles/Pages.css";

function Restaurants() {
  return (
    <>
      <section className="page-hero">
        <h1>Top Restaurants</h1>
        <p>Discover food spots loved by travelers.</p>
      </section>

      <section className="page-section">
        <div className="travique-container page-grid">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} restaurant={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Restaurants;