CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    item_id INTEGER 
        REFERENCES products(item_id),
    detail_photo VARCHAR
)