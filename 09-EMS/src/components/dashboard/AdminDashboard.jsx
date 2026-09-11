import { useMemo, useState } from "react";
import styles from "./AdminDashboard.module.css";
import toast from "react-hot-toast";
import { useTaskContext } from "../../context/TaskContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function AdminDashboard() {
  const navigate=useNavigate()
  const { users,currentUser,logout } = useAuthContext();
  const employeeName = currentUser?.name;

  const { tasks, addTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: "",
    assignee: "Gopal",
    priority: "Medium",
  });

  let employees=users.filter((user)=> (user.role==="employee"))

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(
      (task) => task.status === "Completed",
    ).length;
    const pending = tasks.filter((task) => task.status === "Pending").length;
    const inProgress = tasks.filter(
      (task) => task.status === "In Progress",
    ).length;

    return [
      { label: "Total Tasks", value: total, accent: "blue" },
      { label: "Completed", value: completed, accent: "green" },
      { label: "Pending", value: pending, accent: "amber" },
      { label: "In Progress", value: inProgress, accent: "purple" },
    ];
  }, [tasks]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Task title is required!!!");
      return;
    }

    addTask({
      title: formData.title.trim(),
      assignee: formData.assignee,
      priority: formData.priority,
    });

    setFormData({ title: "", assignee: "Gopal", priority: "Medium" });
    toast.success(`Task assigned successfully to ${formData.assignee}`);
  }

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div>
          <p className={styles.eyebrow}>Admin Portal</p>
          <h1 className={styles.title}>Admin {employeeName}</h1>
        </div>

        <button type="button" className={styles.logoutButton} onClick={()=>{
          logout()
          navigate("/login")
        }}>
          Logout
        </button>
      </header>

      <section className={styles.summaryGrid}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${styles.summaryCard} ${styles[stat.accent]}`}
          >
            <p className={styles.summaryLabel}>{stat.label}</p>
            <h2 className={styles.summaryValue}>{stat.value}</h2>
          </div>
        ))}
      </section>

      <div className={styles.layout}>
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <h2>Create New Task</h2>

          <label className={styles.field}>
            <span>Task Title</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </label>

          <label className={styles.field}>
            <span>Assign To</span>
            <select
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
            >
              {employees.map((employee) => (
                <option key={employee.id} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Priority</span>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>

          <button type="submit" className={styles.primaryButton}>
            Assign Task
          </button>
        </form>

        <section className={styles.taskPanel}>
          <div className={styles.panelHeader}>
            <h2>Recent Tasks</h2>
          </div>

          <div className={styles.taskList}>
            {tasks.map((task) => (
              <div key={task.id} className={styles.taskItem}>
                <div>
                  <h3>{task.title}</h3>
                  <div className={styles.taskMeta}>
                    <span className={styles.assignee}>
                      Assigned to: {task.assignee}
                    </span>
                    <span
                      className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}
                    >
                      {task.priority}
                    </span>
                    <span className={styles.status}>{task.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
