import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import { destinations } from "../data/travelData";
import { getWeather } from "../api/weatherApi";
import "../styles/DestinationDetails.css";

function DestinationDetails() {
  const { id } = useParams();

  const [itinerary, setItinerary] = useState([]);
  const [weather, setWeather] = useState(null);
  const itineraryRef = useRef(null);

  const destination = destinations.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!destination) return;

    const loadWeather = async () => {
      const data = await getWeather(destination.title);
      setWeather(data);
    };

    loadWeather();
  }, [destination]);

  useEffect(() => {
    if (itinerary.length > 0) {
      setTimeout(() => {
        itineraryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [itinerary]);

  if (!destination) {
    return (
      <section className="destination-not-found">
        <h1>Destination Not Found</h1>
      </section>
    );
  }

  const generateItinerary = () => {
    const plans = [
      {
        day: 1,
        title: "Arrival & Local Exploration",
        desc: `Check-in, explore famous areas of ${destination.title}, enjoy local food and evening sightseeing.`,
      },
      {
        day: 2,
        title: "Top Attractions",
        desc: `Visit must-see landmarks, cultural sites and capture memorable photos in ${destination.title}.`,
      },
      {
        day: 3,
        title: "Adventure & Shopping",
        desc: `Experience local activities, shopping markets and hidden gems around ${destination.title}.`,
      },
      {
        day: 4,
        title: "Relax & Sunset Views",
        desc: `Enjoy relaxing spots, cafes, nature views and beautiful sunset locations.`,
      },
      {
        day: 5,
        title: "Departure Day",
        desc: `Final exploration, souvenir shopping and departure from ${destination.title}.`,
      },
    ];

    setItinerary(plans);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Travique Trip Plan", 20, 20);

    doc.setFontSize(16);
    doc.text(`Destination: ${destination.title}, ${destination.country}`, 20, 32);

    doc.setFontSize(12);
    doc.text(`Rating: ${destination.rating}`, 20, 42);
    doc.text(`Reviews: ${destination.reviews.toLocaleString("en-IN")}`, 20, 50);

    if (weather) {
      doc.text(`Weather: ${weather.temperature}°C`, 20, 58);
      doc.text(`Wind: ${weather.windspeed} km/h`, 20, 66);
    }

    let y = weather ? 84 : 68;

    itinerary.forEach((item) => {
      if (y > 270) {
        doc.addPage();
        y = 25;
      }

      doc.setFontSize(16);
      doc.text(`Day ${item.day}: ${item.title}`, 20, y);

      y += 10;

      doc.setFontSize(12);
      const splitText = doc.splitTextToSize(item.desc, 170);
      doc.text(splitText, 20, y);

      y += splitText.length * 8 + 12;
    });

    doc.save(`${destination.title}-Travique-Trip-Plan.pdf`);
  };

  return (
    <section className="destination-details">
      <div className="destination-hero">
        <img src={destination.image} alt={destination.title} />

        <div className="overlay">
          <h1>{destination.title}</h1>
          <p>{destination.country}</p>
        </div>
      </div>

      <div className="details-container">
        <div className="detail-card">
          <h2>About</h2>
          <p>
            {destination.title} is one of the most beautiful travel destinations.
            Explore culture, food, attractions and unforgettable experiences.
          </p>
        </div>

        <div className="detail-card">
          <h2>Best Time To Visit</h2>
          <p>October - March</p>
        </div>

        <div className="detail-card">
          <h2>Average Budget</h2>
          <p>₹25,000 - ₹60,000</p>
        </div>

        <div className="detail-card">
          <h2>Traveler Rating</h2>
          <p>⭐ {destination.rating}</p>
        </div>

        <div className="detail-card">
          <h2>Total Reviews</h2>
          <p>{destination.reviews.toLocaleString("en-IN")} reviews</p>
        </div>

        <div className="detail-card">
          <h2>Live Weather</h2>

          {weather ? (
            <>
              <p>🌡 Temperature: {weather.temperature}°C</p>
              <p>💨 Wind: {weather.windspeed} km/h</p>
            </>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>

        <div className="detail-card">
          <h2>Top Hotels</h2>

          <ul className="travel-list">
            <li>⭐ Grand Palace Hotel</li>
            <li>⭐ Luxury Suites</li>
            <li>⭐ Royal Residency</li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>Top Restaurants</h2>

          <ul className="travel-list">
            <li>🍽 Local Food Hub</li>
            <li>🍕 Premium Bistro</li>
            <li>🥘 Traditional Kitchen</li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>AI Trip Planner</h2>
          <p>Generate a smart itinerary for {destination.title}.</p>

          <button className="ai-trip-btn" onClick={generateItinerary}>
            Generate AI Itinerary
          </button>
        </div>
      </div>

      {itinerary.length > 0 && (
        <div className="itinerary-section" ref={itineraryRef}>
          <div className="travique-container">
            <h2>AI Generated Trip Plan for {destination.title}</h2>

            <button className="download-btn" onClick={downloadPDF}>
              Download PDF
            </button>

            <div className="itinerary-grid">
              {itinerary.map((item) => (
                <div className="itinerary-card" key={item.day}>
                  <span>Day {item.day}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default DestinationDetails;