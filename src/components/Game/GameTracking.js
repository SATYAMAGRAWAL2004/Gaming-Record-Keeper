import React, { useState, useEffect } from "react";
import styles from "./GameTracking.module.css";

const GameTracking = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isTracking) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000); // Update every second
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTracking, startTime]);

  const handleStart = () => {
    setIsTracking(true);
    setStartTime(Date.now() - elapsedTime); // Adjust startTime to continue from last pause
  };

  const handlePause = () => {
    setIsTracking(false);
  };

  const handleReset = () => {
    setIsTracking(false);
    setElapsedTime(0);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      {/* Background Image */}
      <div className={styles.pageBackground}></div>

      {/* Game Tracking Container */}
      <div className={styles.gameTrackingContainer}>
        <h1 className={styles.pageTitle}>Game Tracking</h1>

        <div className={styles.timerDisplay}>
          <h2 className={styles.timeLabel}>Elapsed Time</h2>
          <p className={styles.timeValue}>{formatTime(elapsedTime)}</p>
        </div>

        <div className={styles.controls}>
          {isTracking ? (
            <button className={styles.controlButton} onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className={styles.controlButton} onClick={handleStart}>
              Start
            </button>
          )}
          <button
            className={`${styles.controlButton} ${styles.resetButton}`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameTracking;
