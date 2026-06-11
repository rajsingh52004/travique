import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { hotels, restaurants, activities } from "../data/travelData";
import "../styles/TravelShowcase.css";

function TravelShowcase() {
  return (
    <section className="travel-showcase">
      <div className="travique-container">
        <div className="section-heading">
          <p>Explore Travique</p>
          <h2>Hotels, restaurants & things to do</h2>
          <span>Everything you need for your next trip in one smart platform.</span>
        </div>

        <div className="showcase-block">
          <h3>Popular Hotels</h3>
          <div className="showcase-grid">
            {hotels.map((hotel) => (
              <div className="showcase-card" key={hotel.id}>
                <img src={hotel.image} alt={hotel.name} />
                <button className="showcase-heart"><FaHeart /></button>
                <div className="showcase-info">
                  <h4>{hotel.name}</h4>
                  <p><FaMapMarkerAlt /> {hotel.location}</p>
                  <div className="showcase-row">
                    <span><FaStar /> {hotel.rating}</span>
                    <b>₹{hotel.price}/night</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-block">
          <h3>Top Restaurants</h3>
          <div className="showcase-grid">
            {restaurants.map((item) => (
              <div className="showcase-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <button className="showcase-heart"><FaHeart /></button>
                <div className="showcase-info">
                  <h4>{item.name}</h4>
                  <p><FaMapMarkerAlt /> {item.location}</p>
                  <div className="showcase-row">
                    <span><FaStar /> {item.rating}</span>
                    <b>{item.cuisine}</b>
                  </div>
                  <small>{item.status}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-block">
          <h3>Things To Do</h3>
          <div className="showcase-grid">
            {activities.map((item) => (
              <div className="showcase-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <button className="showcase-heart"><FaHeart /></button>
                <div className="showcase-info">
                  <h4>{item.title}</h4>
                  <p><FaMapMarkerAlt /> {item.location}</p>
                  <div className="showcase-row">
                    <span><FaStar /> {item.rating}</span>
                    <b>{item.category}</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelShowcase;