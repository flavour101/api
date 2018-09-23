USE flavour101;

-- CLEAN
TRUNCATE TABLE blog;
TRUNCATE TABLE recipe;
TRUNCATE TABLE review;
TRUNCATE TABLE images;

-- TEST DATA
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('1', 'Blog 1', '2018-09-01 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('2', 'Blog 2', '2018-09-02 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('3', 'Blog 3 Unpublished', NULL, '/random.md', '/random.png');

INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('1', 'Recipe 1', '2018-09-01 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('2', 'Recipe 2', '2018-09-02 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('3', 'Recipe 2 Unpublished', NULL, '/random.md', '/random.png');

INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source, thumbnail) VALUES ('1', 'Review 1', '2018-09-01 12:30:00.000', 0.0, 0.0,'/md/random.md', '/random.png');
INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source, thumbnail) VALUES ('2', 'Review 2', '2018-09-02 12:30:00.000', 20.0, 50.0,'/md/random.md', '/random.png');
INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source, thumbnail) VALUES ('3', 'Review 3 Unpublished', NULL, 50.0, 50.0,'/md/random.md', '/random.png');

INSERT INTO images(id, reference_id, reference_type, source, post_date) VALUES ('1', '1', 'blog', '/random.png', '2018-09-01 12:30:00.000');
INSERT INTO images(id, reference_id, reference_type, source, post_date) VALUES ('2', '1', 'blog', '/random2.png', '2018-09-01 12:30:00.000');
INSERT INTO images(id, reference_id, reference_type, source, post_date) VALUES ('3', '1', 'blog', '/random3.png', '2018-09-01 12:30:00.000');

-- PROVE
SELECT * FROM blog;
SELECT * FROM recipe;
SELECT * FROM review;
SELECT * FROM images;
