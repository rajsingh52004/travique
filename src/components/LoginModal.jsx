import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import "../styles/LoginModal.css";

function LoginModal() {
  const { loginModalOpen, setLoginModalOpen, login } = useAuth();
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  if (!loginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-modal" onClick={() => setLoginModalOpen(false)}>
          <FaTimes />
        </button>

        <h2>{mode === "login" ? "Welcome back" : "Create account"}</h2>
        <p>Save trips, plan smarter and explore Travique.</p>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <button type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <span onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login"
            ? "Don't have an account? Register"
            : "Already have account? Login"}
        </span>
      </div>
    </div>
  );
}

export default LoginModal;