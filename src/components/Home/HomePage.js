import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { FaGamepad, FaUserShield, FaHome } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext

const HomePage = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Get the authentication status and logout function

  return (
    <div className={styles.container}>
      <div className={styles.authButtonContainer}>
        <div className={styles.authButtons}>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className={styles.authButton}>
                Login
              </Link>
              <Link to="/register" className={styles.authButton}>
                Sign Up
              </Link>
            </>
          ) : (
            <button className={styles.authButton} onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
      <header className={styles.header}>
        <FaHome className={styles.logoIcon} />
        <h1>Gaming Record Keeper</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.card}>
          <FaGamepad className={styles.icon} />
          <h2>Track Game Usage</h2>
          <p>Track and manage your gaming time easily and efficiently.</p>
          <Link to="/game-tracking" className={styles.link}>
            Start Tracking
          </Link>
        </div>
        <div className={styles.card}>
          <FaUserShield className={styles.icon} />
          <h2>Parental Controls</h2>
          <p>Set time limits and lock the app to control gaming time.</p>
          <Link to="/parental-control" className={styles.link}>
            Manage Controls
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Gaming Record Keeper. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
