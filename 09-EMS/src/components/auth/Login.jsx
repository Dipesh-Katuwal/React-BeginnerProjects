import styles from "./Login.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = login({ email, password });

      setEmail("");
      setPassword("");

      navigate(user.role === "admin" ? "/admin" : "/employee");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>EMS</h1>
        <p className={styles.subtitle}>Employee Management System</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              required
              id="email"
              type="email"
              value={email}
              className={styles.input}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              value={password}
              className={styles.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className={styles.button}>
            Login
          </button>
          <div className={styles.redirect}>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.signup}>
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
