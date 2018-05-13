DELETE FROM products
WHERE item_number = $1
RETURNING *;