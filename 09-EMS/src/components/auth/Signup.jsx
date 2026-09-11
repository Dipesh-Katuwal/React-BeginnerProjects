import styles from "./Login.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const { signup } = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = signup({ name, email, password, role });

      setName("");
      setEmail("");
      setPassword("");
      setRole("employee");

      navigate(user.role === "admin" ? "/admin" : "/employee");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>EMS</h1>
        <p className={styles.subtitle}>Create your account</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              required
              id="name"
              type="text"
              value={name}
              className={styles.input}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="role" className={styles.label}>
              Role
            </label>
            <select
              id="role"
              value={role}
              className={styles.input}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            Sign Up
          </button>
          <div className={styles.redirect}>
            <p>
              Already have an account?{" "}
              <Link to="/login" className={styles.signup}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
