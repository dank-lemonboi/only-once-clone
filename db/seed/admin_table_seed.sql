CREATE TABLE admin (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    password VARCHAR(180),
    is_admin BOOLEAN
)