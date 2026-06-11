import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="travique-container footer-grid">

        <div className="footer-brand">
          <h2>Travique</h2>

          <p>
            Smart travel discovery, planning, budgeting,
            destination comparison and AI-powered trip
            building platform.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <a href="/discover">Discover</a>
          <a href="/hotels">Hotels</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/reviews">Reviews</a>
        </div>

        <div>
          <h4>Tools</h4>

          <a href="/smart-trip-builder">
            Smart Builder
          </a>

          <a href="/compare">
            Compare Destinations
          </a>

          <a href="/trip-planner">
            AI Planner
          </a>
        </div>

        <div>
          <h4>Contact</h4>

          <a
            href="mailto:rajsingh2781979@gmail.com?subject=Travique Inquiry"
            className="footer-link"
          >
            <FaEnvelope />
            rajsingh2781979@gmail.com
          </a>

          <a
            href="tel: +918358849865"
            className="footer-link"
          >
            <FaPhoneAlt />
            +91 8358849865
          </a>

          <a
            href="https://www.instagram.com/_raj510"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaInstagram />
            _raj510
          </a>

          <a
            href="https://www.linkedin.com/in/rajsingh0105"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
            LinkedIn Profile
          </a>

          <div className="footer-location">
            <FaMapMarkerAlt />
            Bangalore, Karnataka, India
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Travique. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;