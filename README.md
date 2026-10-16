# React Poster App

A small fullstack app for creating and viewing posts, built while following a React course.
The frontend part is buil upon a React single-page app, the backend is a simple Express REST API.

Live demo: https://postingreactapp.netlify.app
(The backend runs on a free Render instance, so the first load can take a while to load)

## Features:
- View a list of posts loaded from the backend
- Create a new post in a modal window
- Client-side routing with data loading before the page renders

## Tech stack:
- **Frontend:** React, Vite, React Router (loaders and actions), react-icons
- **Backend:** Node.js, Express
- **Hosting:** Netlify (frontend), Render (backend)

## Project structure:
```
Next_js/
├── react-course/     # React frontend
└── dummy-backend/    # Express API
```

## Run locally:
You need Node.js installed. Start the backend first, then the frontend, in two separate terminals.

**Backend**
```bash
cd dummy-backend
npm install
npm start
```
Runs on http://localhost:8080

**Frontend**
```bash
cd react-course
npm install
npm run dev
```
Runs on http://localhost:5173

## What I learned duriing the course:
- Component structure, props and state management
- Lifting state up and passing handlers as props
- Fetching data with React Router `loader` functions and `useLoaderData`
- Connecting a frontend to a REST API
- Deploying a frontend and a backend separately
