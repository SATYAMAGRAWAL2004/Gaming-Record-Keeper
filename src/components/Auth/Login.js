import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    setTimeout(() => {
      navigate(`/`);
    }, 1000);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputField}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <Link to="/register" className={styles.switchLink}>
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
