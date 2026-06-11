import { useState } from "react";
import { destinations } from "../data/travelData";
import "../styles/Compare.css";

function Compare() {
  const [first, setFirst] = useState(destinations[0]);
  const [second, setSecond] = useState(destinations[1]);

  return (
    <section className="compare-page">
      <div className="travique-container">

        <h1>Compare Destinations</h1>

        <div className="compare-selects">
          <select
            onChange={(e) =>
              setFirst(
                destinations.find(
                  (item) => item.id === Number(e.target.value)
                )
              )
            }
          >
            {destinations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          <select
            onChange={(e) =>
              setSecond(
                destinations.find(
                  (item) => item.id === Number(e.target.value)
                )
              )
            }
          >
            {destinations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="compare-table">

          <div className="compare-row">
            <div>Destination</div>
            <div>{first.title}</div>
            <div>{second.title}</div>
          </div>

          <div className="compare-row">
            <div>Country</div>
            <div>{first.country}</div>
            <div>{second.country}</div>
          </div>

          <div className="compare-row">
            <div>Rating</div>
            <div>⭐ {first.rating}</div>
            <div>⭐ {second.rating}</div>
          </div>

          <div className="compare-row">
            <div>Reviews</div>
            <div>{first.reviews}</div>
            <div>{second.reviews}</div>
          </div>

          <div className="compare-row">
            <div>Budget</div>
            <div>₹25k - ₹60k</div>
            <div>₹25k - ₹60k</div>
          </div>

          <div className="compare-row">
            <div>Best Time</div>
            <div>Oct - Mar</div>
            <div>Oct - Mar</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Compare;