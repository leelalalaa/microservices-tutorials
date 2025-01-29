# Full-Stack Setup Guide

## Tutorial Reference
Followed this tutorial: [YouTube Video](https://www.youtube.com/watch?v=O3BUHwfHf84&t=2195s)

---

## Important Commands 

```sh
npm init -y
npm i express mongoose dotenv 
npm i nodemon -D
npm create vite .
npm i @chakra-ui/react@v2.10.3 @emotion/react @emotion/styled framer-motion
npm i @chakra-ui/icons@v2.1.1
npm i react-router-dom 
npm i zustand 
```

---

## Installed Libraries

### 1. Express
Express is a lightweight, flexible Node.js framework for web apps and APIs.
- Handles requests and responses
- Enables routing for different endpoints
- Provides middleware for parsing JSON, logging, etc.

### 2. Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
- Provides schemas and models
- Offers validation, middleware, and query building for MongoDB documents

#### Example:
```jsx
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

User.create({ name: 'John', age: 30 }, (err, user) => {
  if (err) return console.error(err);
  console.log(user);
});
```

### 3. Dotenv
Dotenv is used to manage environment variables in Node.js.
- Loads `.env` variables into `process.env`
- Keeps sensitive data secure and out of the codebase

#### Example:
```jsx
require('dotenv').config();

const dbUrl = process.env.DB_URL;
console.log(`Database URL is ${dbUrl}`);
```

`.env` file:
```sh
DB_URL=mongodb://localhost:27017/mydb
```

### 4. Nodemon
Nodemon is a development tool that automatically restarts the server when file changes are detected.
- Monitors code changes
- Restarts the server automatically

### 5. Chakra UI
Chakra UI is a React component library for building accessible, customizable, and responsive user interfaces.
- Provides pre-built UI components

### 6. React Router DOM
React Router DOM is a library for managing routing in React apps.
- Enables navigation in Single Page Applications (SPA)
- Provides `<BrowserRouter>`, `<Route>`, and `<Link>` components

#### Example:
```jsx
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 7. Zustand
Zustand is a lightweight state management library for React.
- Manages global or local state
- Provides a simple API without Redux boilerplate

#### Example:
```jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

---

## Backend Structure

### Status Codes
- **200** - OK
- **201** - Created
- **400** - Bad Request
- **404** - Not Found
- **407** - Proxy Authentication Required
- **500** - Internal Server Error

### Backend Architecture
Each file has a **specific role** in the backend setup:

1. **`db.js` (Database Connection)**
   - Establishes a connection to **MongoDB** using Mongoose.
   - Exports the connection so other files can use it.

2. **`server.js` (Main Entry Point)**
   - Initializes the Express server.
   - Connects to the database by importing `db.js`.
   - Uses `product.route.js` to handle API routes.

3. **`product.model.js` (Database Schema & Model)**
   - Defines the **structure** of a product document in MongoDB.
   - Uses Mongoose to create a **model**.

4. **`product.controller.js` (Business Logic)**
   - Handles requests and responses for product-related operations.
   - Uses `product.model.js` to interact with the database.

5. **`product.route.js` (Routes Definition)**
   - Defines API endpoints (e.g., `/products`, `/products/:id`).
   - Calls functions from `product.controller.js` when an endpoint is accessed.

---
