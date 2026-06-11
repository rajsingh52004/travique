import { useState } from "react";
import "../styles/AITripPlanner.css";

function AITripPlanner() {
  const [form, setForm] = useState({
    destination: "Goa",
    days: 3,
    budget: 15000,
    style: "Adventure",
  });

  const [plan, setPlan] = useState([]);

  const generatePlan = (e) => {
    e.preventDefault();

    const result = Array.from({ length: Number(form.days) }, (_, index) => ({
      day: index + 1,
      title: `Day ${index + 1} in ${form.destination}`,
      desc: `Enjoy ${form.style.toLowerCase()} places, local food, sightseeing and budget-friendly experiences.`,
    }));

    setPlan(result);
  };

  return (
    <section className="ai-planner">
      <div className="travique-container planner-box">
        <div>
          <p>Travique AI Planner</p>
          <h1>Plan your trip smarter</h1>
          <span>Create a quick day-wise itinerary using React logic.</span>
        </div>

        <form onSubmit={generatePlan}>
          <input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
          <input type="number" value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })} />
          <input type="number" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          <select value={form.style} onChange={(e) => setForm({ ...form, style: e.target.value })}>
            <option>Adventure</option>
            <option>Family</option>
            <option>Luxury</option>
            <option>Budget</option>
            <option>Food</option>
          </select>
          <button>Generate Plan</button>
        </form>

        <div className="plan-result">
          {plan.map((item) => (
            <div key={item.day}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AITripPlanner;