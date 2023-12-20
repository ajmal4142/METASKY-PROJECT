# Awesome Dashboard App

Welcome to the Awesome Dashboard App! This project is a sleek dashboard scenario that allows users to log in, view a list of users fetched from a dummy API, and search for users by name. The app is built using Next.js and TypeScript, with state management handled by Redux and custom hooks for efficient data retrieval.

## Table of Contents

- [Store (store.tsx)](#store-storetsx)
- [Authentication Reducer (auth.tsx)](#authentication-reducer-authtsx)
- [PersonalDetails Component](#personaldetails-component)
- [MainSection Component](#mainsection-component)
- [LogIn Component](#login-component)
- [Performance and Optimization](#performance-and-optimization)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)

## Store (store.tsx)

- **Description:**

  - Manages the global state using Redux for authentication and dark mode settings.

- **Features:**
  - Combines reducers using `combineReducers` from Redux.
  - Utilizes a custom hook to access data from the API.
  - Configures the store with the combined reducer using `createStore`.

---

## Authentication Reducer (auth.tsx)

- **Description:**

  - Handles state changes related to authentication, user details, and dark mode.

- **Features:**
  - Defines actions for login success, logout, storing user details, and toggling dark mode.
  - Maintains an initial state with isLoggedIn, username, user details, and dark mode.
  - Utilizes TypeScript interfaces for state and user details.

---

## PersonalDetails Component

- **Description:**

  - Displays detailed information about a logged-in user.

- **Features:**
  - Retrieves user and dark mode status from the Redux store.
  - Uses MUI components for a clean and responsive layout.
  - Displays user details, including name, picture, location, and contact information.

---

## MainSection Component

- **Description:**

  - Represents the main section of the dashboard with user data and search functionality.

- **Features:**
  - Retrieves user data from the randomuser.me API using Axios.
  - Implements dark mode toggling and dispatches actions using Redux.
  - Provides a search feature to filter users based on various criteria.
  - Displays user cards, and a paginated table with additional details.

---

## LogIn Component

- **Description:**

  - Renders a login form for users to log in and sets authentication status.

- **Features:**
  - Manages user input for username and password.
  - Validates input and dispatches a login success action to Redux.
  - Uses local storage to persist login state.

---

## Performance and Optimization

- **Lazy Loading:**

  - Components are loaded dynamically, enhancing initial load times.

- **Code Splitting:**

  - Breaks down the app into smaller chunks for faster loading.

- **Memoization:**

  - Memoized selectors and components to prevent unnecessary re-renders.

- **Axios Interceptors:**
  - Utilizes Axios interceptors for efficient global configuration and response handling.

---

## Technologies Used

- **React.js and TypeScript:**

  - Employed for enhanced developer experience and static typing.

- **Redux:**

  - Manages state in a predictable way.

- **Material-UI (MUI):**

  - Integrates Material Design components for a modern and responsive UI.

- **Axios:**
  - Handles HTTP requests efficiently.

---

## Deployment

- **Platform:**

  - Deployed on Netlify for easy access and hosting.
  - https://metasky-project.netlify.app

- **Public Git Repo:**
  - Hosted on a public Git repository for collaborative development.
  - https://github.com/ajmal4142/metasky-project.git

---

Feel free to customize the README based on your project's specific details and additional features.
