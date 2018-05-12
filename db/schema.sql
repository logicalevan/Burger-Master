DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  burger_name VARCHAR(255),
  devoured BOOLEAN DEFAULT 0
);
