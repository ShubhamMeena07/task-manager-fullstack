# Task Manager Fullstack

A simple fullstack task manager app using Node.js, Express, MySQL, and CORS.

## Features

- View all tasks
- View a single task by ID
- Create new tasks
- Update existing tasks
- Delete tasks

## Technologies Used

- Node.js
- Express
- MySQL
- CORS

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL installed and running

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/task-manager-fullstack.git
   cd task-manager-fullstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MySQL:**
   - Create a database named `taskmanager`
   - Create a table named `tasks` with columns:
     ```sql
     CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       priority VARCHAR(50),
       status VARCHAR(50) DEFAULT 'pending',
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
     );
     ```

4. **Update your MySQL credentials in `server.js` if needed.**

5. **Start the server:**
   ```bash
   npm start
   ```

6. **API Endpoints:**
   - `GET /api/tasks` - Get all tasks
   - `GET /api/tasks/:id` - Get task by ID
   - `POST /api/tasks` - Create new task
   - `PUT /api/tasks/:id` - Update task
   - `DELETE /api/tasks/:id` - Delete task

## How to View Data in MySQL

1. Open MySQL command line:
   ```bash
   mysql -u root -p
   ```
2. Select your database:
   ```sql
   USE taskmanager;
   ```
3. View tasks:
   ```sql
   SELECT * FROM tasks;
   ```

## License

This project is licensed under the ISC License.

---

**Now add and commit your README:**
```powershell
git add README.md
git commit -m "Add README"
git push
```

Your project is now ready for GitHub!# Task Manager Fullstack

A simple fullstack task manager app using Node.js, Express, MySQL, and CORS.

## Features

- View all tasks
- View a single task by ID
- Create new tasks
- Update existing tasks
- Delete tasks

## Technologies Used

- Node.js
- Express
- MySQL
- CORS

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL installed and running

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/task-manager-fullstack.git
   cd task-manager-fullstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MySQL:**
   - Create a database named `taskmanager`
   - Create a table named `tasks` with columns:
     ```sql
     CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       priority VARCHAR(50),
       status VARCHAR(50) DEFAULT 'pending',
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
     );
     ```

4. **Update your MySQL credentials in `server.js` if needed.**

5. **Start the server:**
   ```bash
   npm start
   ```

6. **API Endpoints:**
   - `GET /api/tasks` - Get all tasks
   - `GET /api/tasks/:id` - Get task by ID
   - `POST /api/tasks` - Create new task
   - `PUT /api/tasks/:id` - Update task
   - `DELETE /api/tasks/:id` - Delete task

## How to View Data in MySQL

1. Open MySQL command line:
   ```bash
   mysql -u root -p
   ```
2. Select your database:
   ```sql
   USE taskmanager;
   ```
3. View tasks:
   ```sql
   SELECT * FROM tasks;
   ```

## License

This project is licensed under the ISC License.

---

**Now add and commit your README:**
```powershell
git add README.md
git commit -m "Add README"
git push
```

Your project is now ready

