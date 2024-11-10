# TODO App - React

A simple TODO application built with React, allowing users to create, update, delete, and mark tasks as completed. The app communicates with a backend API built using Node.js and Sequelize.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or incomplete
- Tasks are persisted using a backend API

## Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, Sequelize, PostgreSQL (or other databases)
- **Deployment**: Render (Frontend and Backend)
  
## Installation

To run this project locally, follow the steps below:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- PostgreSQL or any other supported database for the backend

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app-react.git
cd todo-app-react
```

### 2. Install dependencies for the frontend

```bash
cd client
npm install
```

### 3. Set up the backend

1. Go to the `server` folder:

    ```bash
    cd server
    ```

2. Install dependencies for the backend:

    ```bash
    npm install
    ```

3. Set up your environment variables (use a `.env` file or set variables directly). Example `.env` file:

    ```bash
    DATABASE_URL=postgres://your-db-url
    PORT=5000
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Ensure the Sequelize models are synced with the database. You can use the following to sync the database:

    ```bash
    node server.js
    ```

### 4. Run the app

- **Frontend**: Run the React app

    ```bash
    npm start
    ```

- **Backend**: In another terminal, run the backend API server

    ```bash
    npm run dev
    ```

The React app should now be running at `http://localhost:3000`, and the backend at `http://localhost:5000`.

## Usage

- Open the application in your browser (`http://localhost:3000`).
- You can:
  - Add a new task by typing the task name and clicking "Add Task."
  - Edit a task by clicking the edit icon.
  - Mark a task as completed or incomplete by clicking the checkbox.
  - Delete a task by clicking the delete icon.

## Deployment

This project is deployed on Render for both frontend and backend.

- **Frontend**: [TODO React App - Render](https://todo-react-app-lhop.onrender.com)
- **Backend**: [Backend API - Render](https://todo-react-app-lhop.onrender.com/api/tasks)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Make sure to replace placeholders like `your-username` and database URLs with actual values related to your project setup. You can also add any other relevant information, such as how to contribute or test the project, depending on your specific needs.
