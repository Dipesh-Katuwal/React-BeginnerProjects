import "./App.css";
import { EmployeeDashboard } from "./components/dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";
import { Toaster } from "react-hot-toast";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1000,
            style: {
              animation: "slideIn 0.3s ease",
            },
          }}
        />

        <HashRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/employee" element={<EmployeeDashboard />} />
          </Routes>
        </HashRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
