CREATE TABLE products (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(300),
    item_type VARCHAR(50),
    display_photo VARCHAR,
    description VARCHAR,
    length INTEGER,
    width INTEGER,
    height INTEGER,
    weight INTEGER,
    item_number INTEGER,
    price INTEGER,
    sold BOOLEAN
)

INSERT INTO products (
    item_name,
    item_type,
    display_photo,
    description,
    length,
    width,
    height,
    weight,
    item_number,
    price,
    sold
)

-- VALUES (
--     'Scissor lamp by Elektroinstala',
--     'lamp'
--     'http://onlyonceshop.com/content/2-store/65-scissor-lamp-by-elektroinstala/industrial-scissor-lamp-bakelite-vintage-original-czechoslovakia-grey-brown-design-working-wall-light-scherenlampe-bakelit-alte-only-once-shop.png',
--     'Vintage black industrial scissor lamp was produced in Czechoslovakia in the 1950s - 1960s. The lamp shade is made of brown Bakelite. The scissor arm is extendable and can be turned sideways. The vintage lamp has been rewired with a grey triple textile core cable. To be used with E27 (220V) light bulbs (not included). The lamp is in a good restored condition.',
--     60,
--     16,
--     21,
--     1.6,
--     10015,
--     350,
--     false
-- )

-- VALUES (
--     'Napako 0521 table lamp',
--     'lamp',
--     'http://onlyonceshop.com/content/2-store/66-napako-0521-table-lamp/black-vintage-table-light-lamp-napako-hurka-design-brusel-brussel-czechoslovakia-modern-beauty-beautiful-table-light-tischlampe-lampe-only-once-shop.png',
--     'Beautiful Napako type 0521 design metal desk lamp. Design by famous designer Josef Hůrka, made in Czechoslovakia in 1960s. Original EU plug &amp; E14 socket (bulb not included). Excellent condition.',
--     20,
--     13,
--     34,
--     0.65,
--     10014,
--     250,
--     false
-- )

VALUES (
    'Industrial wall lamp',
    'lamp',
    'http://onlyonceshop.com/content/2-store/67-industrial-wall-lamp/vintage-industrial-metal-aluminium-working-lamp-original-elektrosvit-czechoslovakia-design-designer-grey-light-lamp-licht-lampe-industrie-tischlampe-clamp-klemm-only-once-shop-2.png',
    'Original industrial adjustable lamp used in factories and workshops. Designed and made in former Czechoslovakia. The light can be used as table lamp attached to the workbench. Materials: Metal, bakelite , new textile cable &amp; German plug (220V). To be used with E27 light bulbs (not included). Beautiful patina corresponding to its age and use. Partially renovated. Mounted to the table by 4 screws (can also be used as wall lamp).',
    55,
    13,
    45,
    1.6,
    10013,
    270,
    false
)