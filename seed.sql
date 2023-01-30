-- from the terminal run:
-- psql < seed.sql

DROP DATABASE IF EXISTS  blacksheepink_db;

CREATE DATABASE blacksheepink_db;

\c blacksheepink_db

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  price FLOAT CHECK (price > 0),
  dimensions VARCHAR DEFAULT NULL,
  numInStock INT NOT NULL
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  url VARCHAR NOT NULL,
  altText VARCHAR,
  productId INT NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  password VARCHAR ( 50 )  NOT NULL,
  isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cartItems (
  id SERIAL PRIMARY KEY,
  productId INT NOT NULL,
  userId INT NOT NULL,
  quantity INT, 
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE orderItems (
  id SERIAL PRIMARY KEY,
  productId INT NOT NULL,
  orderId INT NOT NULL,
  quantity INT,
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (orderId) REFERENCES orders(id)
);

INSERT INTO products
    (title, category, price, numInStock, dimensions)
  VALUES
  (
    'Black Sheep Wallet 1', 
    'accessories', 
    40.00,
    3,
    null
  ),
  (
    'Black Sheep Wallet 2', 
    'accessories', 
    40.00,
    5,
    null
  ),
  (
    'Pink Frizz', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Two-Faced Flower Child', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Side Eye Blue', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Incognito', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Cat''s Meow', 
    'canvas', 
    60.00,
  1,
  '11 x 14'
  ),
  (
    'Radicool', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Rawr', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Monster Profile', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'French Kiss', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Wynona', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Big Red', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Ginger', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  ),
  (
    'Hair Bouquet', 
    'canvas', 
    60.00,
    1,
    '11 x 14'
  );

  INSERT INTO users
    (firstName, lastName, username, email, password, isAdmin)
  VALUES
  (
    'Kristy', 
    'Moore',
    'kristymoore209',
    'kristymoore209@gmail.com',
    '$2y$12$eSZ7ih2im/HcvdWEgVEcsOgyORDAYU7SzDimfXZUwqqzypVdUwHqi',
    true
  ),
  (
    'Trisha', 
    'Johnson',
    'trishajjohnson',
    'trishajjohnson@gmail.com',
    '$2y$12$eSZ7ih2im/HcvdWEgVEcsOgyORDAYU7SzDimfXZUwqqzypVdUwHqi',
    false
  );

  INSERT INTO images
    (url, productId, altText)
  VALUES
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/IMG_5782.jpg', 
    1,  
    'Black Sheep wallet 1 image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/IMG_5811.jpg', 
    1,  
    'Black Sheep wallet 1 image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/IMG_5793-2+copy.jpg', 
    2,  
    'Black Sheep wallet 2 image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/IMG_5805.jpg', 
    2,  
    'Black Sheep wallet 2 image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas1-5.png', 
    3,  
    'Pink Frizz on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas1-2.png', 
    3,  
    'Pink Frizz on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas2-1.png', 
    4,  
    'Two-Faced Flower Child image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas2-2.png', 
    4,  
    'Two-Faced Flower Child image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas3-1.png', 
    5,  
    'Side Eye Blue on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas3-2.png', 
    5,  
    'Side Eye Blue on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas4-1.png', 
    6,  
    'Incognito on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas4-2.png', 
    6,  
    'Incognito on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas5-1.png', 
    7,  
    'Cat''s Meow on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas5-2.png', 
    7,  
    'Cat''s Meow on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas6-1.png', 
    8,  
    'Radicool on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas6-2.png', 
    8,  
    'Radicool on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas7-1.png', 
    9,  
    'Rawr on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas7-2.png', 
    9,  
    'Rawr on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas8-1.png', 
    10,  
    'Monster Profile on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas8-2.png', 
    10,  
    'Monster Profile on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas9-1.png', 
    11,  
    'French Kiss on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas9-2.png', 
    11,  
    'French Kiss on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas10-1.png', 
    12,  
    'Wynona on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas10-2.png', 
    12,  
    'Wynona on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas11-1.png', 
    13,  
    'Big Red on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas11-2.png', 
    13,  
    'Big Red on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas12-1.png', 
    14,  
    'Ginger on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas12-2.png', 
    14,  
    'Ginger on canvas image 2'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas13-1.png', 
    15,  
    'Hair Bouquet on canvas image 1'
  ),
  (
    'https://eojassets.s3.us-west-1.amazonaws.com/canvas13-2.png', 
    15,  
    'Hair Bouquet on canvas image 2'
  );