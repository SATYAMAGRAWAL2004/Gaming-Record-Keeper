import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";
import GameTracking from "./components/Game/GameTracking";
import ParentalControl from "./components/Parent/ParentalControl";
import HomePage from "./components/Home/HomePage"; // Import Home Page
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Add Home Page Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game-tracking" element={<GameTracking />} />
          <Route path="/parental-control" element={<ParentalControl />} />
          <Route
            path="/game-tracking"
            element={
              <PrivateRoute>
                <GameTracking />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
