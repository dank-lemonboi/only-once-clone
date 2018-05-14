UPDATE products
SET sold = $2
WHERE item_id = $1
returning *;