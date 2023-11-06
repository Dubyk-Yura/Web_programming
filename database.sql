CREATE TABLE bicycles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    weight NUMERIC(5, 2) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE bicycleTypes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(150) NOT NULL
);

INSERT INTO bicycleTypes (title, description)
VALUES
    ('Mountain Bicycles', 'Sturdy and equipped for off-road trails, featuring wide, knobby tires and suspension systems.'),
    ('Electric Bicycles', 'Equipped with a motor to assist pedaling, making cycling easier, especially on hills.'),
    ('BMX Bicycles', 'Small, strong, and ideal for tricks and stunts in skateparks and on dirt jumps.'),
    ('Road Bicycles', 'Lightweight, fast, and designed for speed and long-distance riding on smooth roads.'),
    ('Cruiser Bicycles', 'Comfortable and stylish, perfect for leisurely rides on the beach or around the neighborhood.'),
    ('Hybrid Bicycles', 'Versatile bikes that combine features of road and mountain bikes for various terrains.'),
    ('Folding Bicycles', 'Compact and portable bikes that can be easily folded and carried on public transportation.');

