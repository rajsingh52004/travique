import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import Footer from "../components/Footer";
import "../styles/Pages.css";

function SavedTrips() {
  const { wishlist } = useWishlist();

  return (
    <>
      <section className="page-hero">
        <h1>Saved Trips</h1>
        <p>Your favorite destinations, hotels and experiences.</p>
      </section>

      <section className="page-section">
        <div className="travique-container page-grid">
          {wishlist.length === 0 ? (
            <h2>No saved trips yet.</h2>
          ) : (
            wishlist.map((item) => (
              <div className="simple-card" key={`${item.type}-${item.id}`}>
                <img src={item.image} alt={item.name || item.title} />
                <div>
                  <h3>{item.name || item.title}</h3>
                  <p><FaMapMarkerAlt /> {item.country || item.location}</p>
                  <span><FaStar /> {item.rating}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SavedTrips;