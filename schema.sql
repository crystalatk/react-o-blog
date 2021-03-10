CREATE TABLE react_o_blog (
    id serial PRIMARY KEY,
    title text NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    body text NOT NULL
);