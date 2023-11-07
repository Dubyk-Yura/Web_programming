CREATE TABLE bicycles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    weight NUMERIC(5, 2) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description VARCHAR 
);

INSERT INTO bicycles (name, price, weight, type, description)
VALUES
    ('Adventure Bike', 899.99, 28.50, 'Mountain', 'High-quality mountain bike with excellent suspension for off-road adventures. It features a durable frame, wide, knobby tires, and a suspension system to handle rugged terrain. Whether you`re tackling steep hills or navigating rocky trails, this mountain bike is up for the challenge.'),
    ('Commuter Bike', 549.99, 18.00, 'City Bike', 'Compact and lightweight city bike for daily commuting. This city bike is designed for urban transportation, with a sleek frame, comfortable saddle, and efficient gear system. It`s perfect for getting around the city quickly and comfortably.'),
    ('Titan Road Bike', 1249.99, 32.00, 'Touring Bike', 'Heavy-duty touring bike designed for long-distance journeys. This touring bike is built to handle extended trips with a sturdy frame, reliable components, and comfortable features. Whether you`re exploring the countryside or embarking on a cross-country adventure, this bike has you covered.'),
    ('Basic Bicycle', 349.99, 25.00, 'Starter Bike', 'Basic entry-level bike for beginners and casual riders. This bike is a great choice for those new to cycling or looking for a simple and affordable ride. It provides a smooth and easy experience for recreational biking.'),
    ('Stunt BMX Master', 499.99, 20.50, 'BMX', 'BMX bike built for tricks, stunts, and skatepark action. This BMX bike is designed for riders who love performing tricks, jumps, and stunts. It`s durable and agile, making it the perfect choice for skatepark and dirt track adventures.');

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


