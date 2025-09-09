-- -- schema.sql - Database setup script
-- -- Run this in your MySQL client or phpMyAdmin

-- -- Create database
-- CREATE DATABASE IF NOT EXISTS taskmanager;
-- USE taskmanager;

-- -- Create tasks table
-- CREATE TABLE IF NOT EXISTS tasks (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
--     status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- -- Insert sample data for testing
-- INSERT INTO tasks (title, description, priority, status) VALUES
-- ('Learn Node.js', 'Complete the Node.js tutorial and build a project', 'high', 'in_progress'),
-- ('Setup MySQL', 'Install and configure MySQL database', 'medium', 'completed'),
-- ('Create API endpoints', 'Build REST API for task management', 'high', 'pending'),
-- ('Frontend development', 'Create HTML forms and JavaScript interactions', 'medium', 'pending');

-- Useful queries for development:

-- View all tables in database
-- SHOW TABLES;

-- View table structure
-- DESCRIBE tasks;

-- View all tasks
-- SELECT * FROM tasks;

-- View tasks by status
-- SELECT * FROM tasks WHERE status = 'pending';

-- Count tasks by priority
-- SELECT priority, COUNT(*) as count FROM tasks GROUP BY priority;

-- Delete all tasks (use carefully!)
-- DELETE FROM tasks;

-- Reset auto increment
-- ALTER TABLE tasks AUTO_INCREMENT = 1;