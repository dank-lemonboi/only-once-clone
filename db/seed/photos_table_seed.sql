CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    item_number INTEGER 
        REFERENCES products(item_number),
    detail_photo VARCHAR
)