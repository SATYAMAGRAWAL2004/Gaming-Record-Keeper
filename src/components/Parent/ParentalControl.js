import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Use authentication context
import styles from "./ParentalControl.module.css"; // Import CSS module

const ParentalControl = () => {
  const { user } = useContext(AuthContext); // Get the current logged-in user
  const [timeLimit, setTimeLimit] = useState(60); // Default time limit in minutes
  const [weekendLimit, setWeekendLimit] = useState(120);
  const [appLocked, setAppLocked] = useState(false);

  const handleTimeLimitChange = (e) => {
    setTimeLimit(e.target.value);
  };

  const handleWeekendLimitChange = (e) => {
    setWeekendLimit(e.target.value);
  };

  const handleLockApp = () => {
    setAppLocked(!appLocked);
  };

  return (
    <div className={styles.parentalControlContainer}>
      <h1 className={styles.pageTitle}>Parental Control</h1>

      {/* Time Limit Section */}
      <div className={styles.controlSection}>
        <h2 className={styles.sectionTitle}>Set Daily Time Limits</h2>
        <div className={styles.timeLimitControl}>
          <label className={styles.label}>Weekday Time Limit (minutes):</label>
          <input
            type="number"
            value={timeLimit}
            onChange={handleTimeLimitChange}
            className={styles.input}
          />
        </div>
        <div className={styles.timeLimitControl}>
          <label className={styles.label}>Weekend Time Limit (minutes):</label>
          <input
            type="number"
            value={weekendLimit}
            onChange={handleWeekendLimitChange}
            className={styles.input}
          />
        </div>
      </div>

      {/* Lock Control Section */}
      <div className={styles.controlSection}>
        <h2 className={styles.sectionTitle}>App Lock</h2>
        <div className={styles.lockControl}>
          <p className={styles.lockStatus}>
            {appLocked
              ? "The app is currently locked."
              : "The app is unlocked."}
          </p>
          <button
            className={`${styles.lockButton} ${
              appLocked ? styles.unlock : styles.lock
            }`}
            onClick={handleLockApp}
          >
            {appLocked ? "Unlock App" : "Lock App"}
          </button>
        </div>
      </div>

      {/* Unlock Requests Section */}
      <div className={styles.controlSection}>
        <h2 className={styles.sectionTitle}>Unlock Requests</h2>
        <div className={styles.requests}>
          <p>No unlock requests at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default ParentalControl;
