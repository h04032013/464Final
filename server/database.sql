CREATE DATABASE todolist;

-- Schema for table in database
CREATE TABLE list(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);