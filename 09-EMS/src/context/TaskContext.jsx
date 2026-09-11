import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ems_tasks";

const defaultTasks = [
  {
    id: 1,
    title: "Update customer onboarding checklist",
    assignee: "Gopal",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Review team attendance report",
    assignee: "Ram",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 3,
    title: "Prepare weekly status summary",
    assignee: "Shyam",
    priority: "Low",
    status: "Completed",
  },
  {
    id: 4,
    title: "Submit payroll query notes",
    assignee: "Hari",
    priority: "High",
    status: "Pending",
  },
];

function getInitialTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);

      if (Array.isArray(parsedTasks)) {
        return parsedTasks;
      }
    }
  } catch (error) {
    console.error("Failed to parse tasks from localStorage:", error);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTasks));
  return defaultTasks;
}

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => getInitialTasks());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask({ title, assignee, priority }) {
    const newTask = {
      id: Date.now(),
      title,
      assignee,
      priority,
      status: "Pending",
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function completeTask(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task,
      ),
    );
  }

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      completeTask,
    }),
    [tasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside a TaskProvider");
  }

  return context;
}
