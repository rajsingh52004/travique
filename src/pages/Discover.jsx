import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import TrendingDestinations from "../components/TrendingDestinations";
import Footer from "../components/Footer";
import "../styles/Pages.css";
import WorldLocationSearch from "../components/WorldLocationSearch";

function Discover() {
  return (
    <>
      <section className="discover-hero">
        <div className="travique-container">
          <span className="discover-tag">
            Explore The World With Travique
          </span>

          <h1>
            Discover Amazing
            <br />
            Places Around You
          </h1>

          <p>
            Find destinations, hidden gems, hotels, restaurants and
            unforgettable experiences.
          </p>
          <WorldLocationSearch />

          
        </div>
      </section>

      <TrendingDestinations />

      <Footer />
    </>
  );
}

export default Discover;