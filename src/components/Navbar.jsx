import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGlobeAsia, FaMagic, FaHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, setLoginModalOpen } = useAuth();

  return (
    <>
      <nav className="navbar">
        <div className="travique-container nav-wrapper">
          <NavLink to="/" className="logo">Travique</NavLink>

          <div className={menuOpen ? "nav-links active" : "nav-links"}>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/hotels">Hotels</NavLink>
            <NavLink to="/restaurants">Restaurants</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/saved-trips"><FaHeart /> Saved</NavLink>

            <NavLink to="/trip-planner" className="ai-btn">
              <FaMagic /> Plan with AI
            </NavLink>
            <NavLink to="/compare">Compare</NavLink>

            <div className="currency">
              <FaGlobeAsia /> INR
            </div>

            {user ? (
              <button className="signin-btn" onClick={logout}>
                Logout
              </button>
            ) : (
              <button className="signin-btn" onClick={() => setLoginModalOpen(true)}>
                Sign In
              </button>
            )}
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <LoginModal />
    </>
  );
}

export default Navbar;