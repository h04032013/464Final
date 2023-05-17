CREATE DATABASE todolist;

CREATE TABLE list(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);