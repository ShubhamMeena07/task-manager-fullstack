// server.js - Main backend server file
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware - These run before your routes
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Parses JSON data from requests
app.use(express.static('public')); // Serves static files (HTML, CSS, JS)

// Database Connection Configuration
const dbConfig = {
  host: 'localhost',     // MySQL server location
  user: 'root',          // MySQL username
  password: 'Shub@1207meena',   // Your MySQL password
  database: 'taskmanager' // Database name
};

// Create connection pool - Better than single connection
const pool = mysql.createPool(dbConfig);

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database');
  connection.release(); // Always release connections back to pool
});

// ROUTES - API endpoints

// 1. GET all tasks
app.get('/api/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
  
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        error: 'Failed to fetch tasks',
        details: err.message 
      });
    }
    
    res.json({
      success: true,
      data: results,
      count: results.length
    });
  });
});

// 2. GET single task by ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const query = 'SELECT * FROM tasks WHERE id = ?';
  
  // Using parameterized queries prevents SQL injection
  pool.query(query, [taskId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json({
      success: true,
      data: results[0]
    });
  });
});

// 3. CREATE new task
app.post('/api/tasks', (req, res) => {
  const { title, description, priority = 'medium' } = req.body;
  
  // Input validation
  if (!title || title.trim() === '') {
    return res.status(400).json({ 
      error: 'Title is required' 
    });
  }
  
  const query = `
    INSERT INTO tasks (title, description, priority, status, created_at) 
    VALUES (?, ?, ?, 'pending', NOW())
  `;
  
  pool.query(query, [title.trim(), description || '', priority], (err, results) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ 
        error: 'Failed to create task',
        details: err.message 
      });
    }
    
    // Return the created task
    const newTaskId = results.insertId;
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: {
        id: newTaskId,
        title,
        description: description || '',
        priority,
        status: 'pending'
      }
    });
  });
});

// 4. UPDATE task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description, priority, status } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const query = `
    UPDATE tasks 
    SET title = ?, description = ?, priority = ?, status = ?, updated_at = NOW()
    WHERE id = ?
  `;
  
  pool.query(query, [title, description, priority, status, taskId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update task' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json({
      success: true,
      message: 'Task updated successfully'
    });
  });
});

// 5. DELETE task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const query = 'DELETE FROM tasks WHERE id = ?';
  
  pool.query(query, [taskId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete task' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json({
      success: true,
      message: 'Task deleted successfully'
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

// Handle undefined routes //edit
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    availableRoutes: {
      'GET /api/tasks': 'Get all tasks',
      'GET /api/tasks/:id': 'Get task by ID',
      'POST /api/tasks': 'Create new task',
      'PUT /api/tasks/:id': 'Update task',
      'DELETE /api/tasks/:id': 'Delete task'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api/tasks`);
});