DELETE from products
where item_number = $1
RETURNING *;