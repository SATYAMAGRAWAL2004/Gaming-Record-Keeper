import React, { useState } from "react";
import authService from "../../services/authService";
import styles from "./Register.module.css"; // Import the CSS module

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // 'parent' or 'user'
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(false); // State for success feedback
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted
    setError(""); // Clear any previous errors

    try {
      await authService.register(username, password, role);
      setSuccess(true); // Set success if registration is successful
    } catch (err) {
      setError("Registration failed. Please try again."); // Handle errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        {error && <p className={styles.error}>{error}</p>} {/* Display error */}
        {success && (
          <p className={styles.success}>Registration Successful!</p>
        )}{" "}
        {/* Display success */}
        {loading && <p className={styles.loading}>Registering...</p>}{" "}
        {/* Show loading */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.select}
          >
            <option value="user">User</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
