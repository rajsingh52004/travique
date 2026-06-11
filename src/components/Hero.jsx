import { useEffect, useRef, useState } from "react";
import { FaSearch, FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import SearchTabs from "./SearchTabs";
import "../styles/Hero.css";

function Hero() {
  const [activeTab, setActiveTab] = useState("Search All");
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 70, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-title"
      >
        Where to?
      </motion.h1>

      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <motion.div
        className="hero-search"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder={`Search ${activeTab.toLowerCase()}, destinations, hotels...`}
        />

        <button>Search</button>
      </motion.div>

      <div className="travique-container">
        <div className="hero-banner" ref={bannerRef}>
          <div className="hero-banner-image">
            <div className="floating-card top-card">
              <FaLocationArrow />
              <span>Smart nearby places</span>
            </div>

            <div className="floating-card bottom-card">
              <FaCalendarAlt />
              <span>Plan your weekend</span>
            </div>
          </div>

          <div className="hero-banner-content">
            <p className="small-tag">Travique AI Trip Planner</p>
            <h2>Find experiences for everything you love</h2>
            <p>
              Discover hotels, restaurants, activities, safety tips, travel budget
              and smart daily-life planning in one place.
            </p>
            <button>Start Planning</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;