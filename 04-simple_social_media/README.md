# Simple Social Media

A small social-media-style React interface for creating, viewing, and deleting posts. It introduces shared state across multiple components.

## Features

- View the default sample posts
- Switch between Home and Create Post views
- Create a post with a title, body, tags, reactions, and user ID
- Delete posts from the feed
- Display tags and reaction counts on each post

## Concepts practised

- Context API for sharing post data
- `useReducer` for add and delete actions
- `useContext` in nested components
- `useRef` for reading form values
- Conditional rendering based on the selected tab
- Reusable components and Bootstrap icons

## Run locally

```bash
npm install
npm run dev
```

Other scripts are `npm run build`, `npm run lint`, and `npm run preview`.

## Project structure

- `src/App.jsx` - application layout and selected tab
- `src/store/post-list-store.jsx` - post context, reducer, and initial data
- `src/components/CreatePost.jsx` - post creation form
- `src/components/PostList.jsx` - feed of posts
- `src/components/Post.jsx` - individual post and delete action
- `src/components/Sidebar.jsx` - navigation between views

## Learning note

Posts currently live only in memory, so refreshing the page restores the default sample posts. A useful next step would be persisting the post list and adding validation for required fields.
