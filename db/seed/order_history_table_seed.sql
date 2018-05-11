CREATE TABLE orderhistory (
order_number VARCHAR(180),
order_total VARCHAR(50),
item_id INTEGER
    REFERENCES products(item_id)
)