import { hotels } from "../data/travelData";
import HotelCard from "../components/HotelCard";
import Footer from "../components/Footer";
import "../styles/Pages.css";

function Hotels() {
  return (
    <>
      <section className="page-hero">
        <h1>Popular Hotels</h1>
        <p>Find stays for every budget and travel style.</p>
      </section>

      <section className="page-section">
        <div className="travique-container page-grid">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Hotels;