import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      authService
        .getUserDetails(token)
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const { token } = await authService.login(username, password);
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
