INSERT INTO admin (
    user_name,
    password,
    is_admin
)
VALUES (
    $1,
    $2,
    false
)
RETURNING *;