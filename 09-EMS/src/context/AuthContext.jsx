import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const USERS_KEY = "ems_users";
const CURRENT_USER_KEY = "ems_current_user";

const defaultUsers = [
  {
    id: 1,
    name: "Dipesh",
    email: "dipesh@example.com",
    password: "dipesh123",
    role: "admin",
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@example.com",
    password: "ram123",
    role: "employee",
  },
];

function getStoredUsers() {
  try {
    const savedUsers = localStorage.getItem(USERS_KEY);

    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);

      if (Array.isArray(parsedUsers)) {
        return parsedUsers;
      }
    }
  } catch (error) {
    console.error("Failed to parse users from localStorage:", error);
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
}

function getStoredCurrentUser() {
  try {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);

    if (savedUser) {
      return JSON.parse(savedUser);
    }
  } catch (error) {
    console.error("Failed to parse current user from localStorage:", error);
  }
  return null;
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => getStoredUsers());
  const [currentUser, setCurrentUser] = useState(() => getStoredCurrentUser());

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
      return;
    }
    localStorage.removeItem(CURRENT_USER_KEY);
  }, [currentUser]);

  function signup({ name, email, password, role }) {
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === normalizedEmail,
    );

    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      role,
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return newUser;
  }

  function login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === normalizedEmail &&
        user.password === password,
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    setCurrentUser(foundUser);
    return foundUser;
  }

  function logout() {
    setCurrentUser(null);
  }

  const value = useMemo(
    () => ({
      users,
      currentUser,
      signup,
      login,
      logout,
    }),
    [currentUser, users],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside an AuthProvider");
  }

  return context;
}
