import { useState } from "react";
import "../styles/SmartTripBuilder.css";

function SmartTripBuilder() {
  const [trip, setTrip] = useState({
    destination: "",
    days: 5,
    people: 2,
    budget: 50000,
  });

  const [result, setResult] = useState(null);

  const generateTrip = () => {
    const hotelCost = trip.days * 2500 * trip.people;
    const foodCost = trip.days * 800 * trip.people;
    const transportCost = trip.days * 500;
    const total = hotelCost + foodCost + transportCost;

    setResult({
      hotelCost,
      foodCost,
      transportCost,
      total,
    });
  };

  return (
    <section className="smart-builder">
      <div className="travique-container">

        <h1>Smart Trip Builder</h1>
        <p>
          Build your complete trip in seconds.
        </p>

        <div className="builder-form">
          <input
            type="text"
            placeholder="Destination"
            value={trip.destination}
            onChange={(e) =>
              setTrip({
                ...trip,
                destination: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Days"
            value={trip.days}
            onChange={(e) =>
              setTrip({
                ...trip,
                days: Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            placeholder="People"
            value={trip.people}
            onChange={(e) =>
              setTrip({
                ...trip,
                people: Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            placeholder="Budget"
            value={trip.budget}
            onChange={(e) =>
              setTrip({
                ...trip,
                budget: Number(e.target.value),
              })
            }
          />

          <button onClick={generateTrip}>
            Generate Smart Trip
          </button>
        </div>

        {result && (
          <div className="trip-result">

            <div className="trip-card">
              <h3>🏨 Hotel</h3>
              <p>₹{result.hotelCost.toLocaleString()}</p>
            </div>

            <div className="trip-card">
              <h3>🍽 Food</h3>
              <p>₹{result.foodCost.toLocaleString()}</p>
            </div>

            <div className="trip-card">
              <h3>🚕 Transport</h3>
              <p>₹{result.transportCost.toLocaleString()}</p>
            </div>

            <div className="trip-card total-card">
              <h3>Total Cost</h3>
              <p>₹{result.total.toLocaleString()}</p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

export default SmartTripBuilder;