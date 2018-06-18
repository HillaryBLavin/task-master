DROP DATABASE IF EXISTS tasks_db;
CREATE DATABASE tasks_db;

USE tasks_db;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    task_name VARCHAR(100) NOT NULL,
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);