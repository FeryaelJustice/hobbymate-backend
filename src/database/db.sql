CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users (name, email) VALUES ('John Doe', 'john@gmail.com'), ('Jane Doe', 'jane@gmail.com');

SELECT * FROM users;