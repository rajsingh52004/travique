import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("traviqueUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (formData) => {
    const newUser = {
      id: Date.now(),
      name: formData.name || "Travique User",
      email: formData.email,
    };

    setUser(newUser);
    localStorage.setItem("traviqueUser", JSON.stringify(newUser));
    setLoginModalOpen(false);
    toast.success("Login successful");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("traviqueUser");
    toast.success("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginModalOpen, setLoginModalOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);