# EMS

A simple Employee Management System built with React and Vite. This project demonstrates role-based access, shared state management, and task workflows for both admins and employees.

## Features

- User signup and login
- Role-based dashboards for admin and employee users
- Admin can create and assign tasks to employees
- Employee dashboard shows assigned tasks and allows task completion
- Shared task and auth state managed with React Context
- Demo data stored in localStorage so the app keeps its state on refresh
- Toast notifications for success and validation feedback

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- React Hot Toast
- localStorage for persistence

## Project Structure

- `src/App.jsx` — app routes and providers
- `src/context/AuthContext.jsx` — user authentication and signup/login logic
- `src/context/TaskContext.jsx` — task state and task management
- `src/components/auth/` — login and signup screens
- `src/components/dashboard/` — admin and employee dashboard UI
- `src/assets/` — static assets

## Run Locally

```bash
cd 09-EMS
npm install
npm run dev
```

Then open the local URL shown by Vite in your browser.

## Demo Accounts

The app includes default users in localStorage for quick testing:

- Admin: `dipesh@example.com` / `dipesh123`
- Employee: `ram@example.com` / `ram123`

## Notes

- This is a beginner-friendly demo app, not a production-grade authentication system.
- Passwords are stored locally in the browser for demonstration purposes.
- The app uses `HashRouter`, so routes work without a backend server.
