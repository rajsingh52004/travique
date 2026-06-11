import { activities } from "../data/travelData";
import ThingsToDoCard from "../components/ThingsToDoCard";
import Footer from "../components/Footer";
import "../styles/Pages.css";

function ThingsToDo() {
  return (
    <>
      <section className="page-hero">
        <h1>Things To Do</h1>
        <p>Activities, tours and experiences for your next trip.</p>
      </section>

      <section className="page-section">
        <div className="travique-container page-grid">
          {activities.map((item) => (
            <ThingsToDoCard key={item.id} activity={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ThingsToDo;