import { useMemo } from "react";
import styles from "./EmployeeDashboard.module.css";
import { useTaskContext } from "../../context/TaskContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const quickActions = [
  "View schedule",
  "Submit leave request",
  "Open task board",
  "Update profile",
];

export function EmployeeDashboard() {
  const navigate=useNavigate()
  const { tasks, completeTask } = useTaskContext();
  const { currentUser,logout } = useAuthContext();
  const employeeName = currentUser?.name;

  if (!currentUser || !employeeName) {
    return (
      <div>
        <h1>Please log in first</h1>
      </div>
    );
  }

  const myTasks = useMemo(
    () => tasks.filter((task) => task.assignee === employeeName),
    [tasks],
  );

  const stats = useMemo(() => {
    const assigned = myTasks.length;
    const completed = myTasks.filter(
      (task) => task.status === "Completed",
    ).length;
    const pending = myTasks.filter((task) => task.status === "Pending").length;
    const inProgress = myTasks.filter(
      (task) => task.status === "In Progress",
    ).length;

    return [
      { label: "Assigned Tasks", value: assigned, accent: "blue" },
      { label: "Completed", value: completed, accent: "green" },
      { label: "Pending", value: pending, accent: "amber" },
      { label: "In Progress", value: inProgress, accent: "red" },
    ];
  }, [myTasks]);

  const activity = useMemo(
    () => [
      "Your task list is refreshed from the shared task list.",
      `${myTasks.filter((task) => task.status === "Completed").length} tasks have been completed so far.`,
      "New tasks assigned by admin appear here automatically.",
    ],
    [myTasks],
  );

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div>
          <p className={styles.eyebrow}>Employee Portal</p>
          <h1 className={styles.title}>Welcome back, {employeeName}</h1>
        </div>

        <button
          className={styles.logoutButton}
          type="button"
          onClick={() => {
            logout()
            navigate("/login");
          }}
        >
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

      <div className={styles.contentGrid}>
        <main className={styles.mainPanel}>
          <div className={styles.panelHeader}>
            <h2>My Tasks</h2>
          </div>

          <div className={styles.taskList}>
            {myTasks.map((task) => (
              <div key={task.id} className={styles.taskItem}>
                <div>
                  <h3>{task.title}</h3>
                  <div className={styles.taskMeta}>
                    <span
                      className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}
                    >
                      {task.priority}
                    </span>
                    <span className={styles.status}>{task.status}</span>
                  </div>
                </div>

                {task.status !== "Completed" && (
                  <button
                    className={styles.secondaryButton}
                    type="button"
                    onClick={() => completeTask(task.id)}
                  >
                    Submit
                  </button>
                )}
              </div>
            ))}
          </div>
        </main>

        <aside className={styles.sidePanel}>
          <section className={styles.sideCard}>
            <h3>Quick Actions</h3>
            <div className={styles.actionsList}>
              {quickActions.map((action) => (
                <button
                  key={action}
                  className={styles.actionButton}
                  type="button"
                >
                  {action}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.sideCard}>
            <h3>Recent Activity</h3>
            <ul className={styles.activityList}>
              {activity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
