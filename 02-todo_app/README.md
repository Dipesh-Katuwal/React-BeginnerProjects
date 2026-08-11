# Todo App

A simple todo list built with React and Vite. The app keeps tasks in component state and separates the interface into small components.

## Features

- Add a new todo item
- Display todo items in a list
- Delete items from the list
- Show an empty-list message when there are no todos
- Display a footer with the current list state

## Concepts practised

- `useState` for managing an array of todos
- Form submission and input handling
- Conditional rendering
- Rendering lists with stable keys
- Passing state and setter functions to child components
- CSS Modules, Bootstrap, and React Icons

## Run locally

```bash
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run lint`, and `npm run preview`.

## Project structure

- `src/App.jsx` - owns the todo list state
- `src/components/InputTodo.jsx` - todo form
- `src/components/TodoItems.jsx` - todo list
- `src/components/TodoItem.jsx` - individual todo item
- `src/components/Message.jsx` - empty-list message
- `src/components/Footer.jsx` - list footer
- `src/components/*.module.css` - component styles

## Possible improvements

Useful next steps would be editing tasks, marking tasks complete, saving todos to `localStorage`, and adding form validation.
