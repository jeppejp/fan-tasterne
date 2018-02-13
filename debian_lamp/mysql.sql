CREATE DATABASE test;
USE test;
CREATE TABLE tilmeldte (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) NOT NULL,pay int(3),reg_date TIMESTAMP);

CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'user'@'localhost';
