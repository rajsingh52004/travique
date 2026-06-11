import { useState } from "react";
import { FaCalculator, FaSuitcaseRolling, FaShieldAlt, FaRobot } from "react-icons/fa";
import "../styles/SmartTools.css";

function SmartTools() {
  const [hotel, setHotel] = useState(3000);
  const [food, setFood] = useState(1200);
  const [transport, setTransport] = useState(1000);
  const [days, setDays] = useState(3);

  const total = (Number(hotel) + Number(food) + Number(transport)) * Number(days);

  return (
    <section className="smart-tools">
      <div className="travique-container">
        <div className="section-heading center">
          <p>Unique Travique tools</p>
          <h2>Daily-life travel features</h2>
          <span>Useful tools that make travel planning easier and safer.</span>
        </div>

        <div className="tools-grid">
          <div className="tool-card planner-card">
            <FaRobot />
            <h3>AI Trip Planner</h3>
            <p>Enter destination, budget and days to create a day-wise itinerary.</p>
            <button>Plan with AI</button>
          </div>

          <div className="tool-card budget-card">
            <FaCalculator />
            <h3>Budget Calculator</h3>

            <input type="number" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder="Hotel cost/day" />
            <input type="number" value={food} onChange={(e) => setFood(e.target.value)} placeholder="Food cost/day" />
            <input type="number" value={transport} onChange={(e) => setTransport(e.target.value)} placeholder="Transport/day" />
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)} placeholder="Days" />

            <h4>Total: ₹{total.toLocaleString()}</h4>
          </div>

          <div className="tool-card">
            <FaSuitcaseRolling />
            <h3>Packing Checklist</h3>
            <ul>
              <li>Weather based clothes</li>
              <li>Power bank & charger</li>
              <li>Medicines & ID proof</li>
              <li>Emergency cash</li>
            </ul>
          </div>

          <div className="tool-card">
            <FaShieldAlt />
            <h3>Emergency Travel Hub</h3>
            <ul>
              <li>Nearby hospital</li>
              <li>Police station</li>
              <li>Pharmacy</li>
              <li>ATM & embassy info</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartTools;