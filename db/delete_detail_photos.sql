SELECT detail_photo, photos.item_id, products.item_number FROM photos
JOIN products ON photos.item_id = products.item_id;

DELETE FROM photos
WHERE item_id in (
    SELECT item_id FROM products
    WHERE item_number = $1
)
RETURNING *;