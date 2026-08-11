# Calculator

A small calculator built with React and Vite. It focuses on interactive components and local state.

## Features

- Enter numbers and arithmetic operators with buttons
- Evaluate an expression with `=`
- Clear the current expression with `C`
- Display the current value in a separate input component

## Concepts practised

- `useState` for calculator state
- Passing event handlers through props
- Reusable button and input components
- Rendering a button grid from component data
- CSS Modules and Bootstrap styling

## Run locally

```bash
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run lint`, and `npm run preview`.

## Project structure

- `src/App.jsx` - calculator state and button behavior
- `src/components/Button.jsx` - individual calculator button
- `src/components/ButtonContainer.jsx` - calculator button layout
- `src/components/InputField.jsx` - calculator display
- `src/components/*.module.css` - component styles

## Learning note

This is intentionally a simple learning implementation. A future version could add decimal handling, keyboard input, validation, and safer expression parsing.
