USE flavour101;

-- CLEAN
TRUNCATE TABLE blog;
TRUNCATE TABLE recipe;
TRUNCATE TABLE review;
TRUNCATE TABLE image;

-- TEST DATA
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('1', 'Blog 1', '2018-09-01 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('2', 'Blog 2', '2018-09-02 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO blog(id, title, post_date, source, thumbnail) VALUES ('3', 'Blog 3 Unpublished', NULL, '/random.md', '/random.png');

INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('1', 'Recipe 1', '2018-09-01 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('2', 'Recipe 2', '2018-09-02 12:30:00.000', '/md/random.md', '/random.png');
INSERT INTO recipe(id, title, post_date, source, thumbnail) VALUES ('3', 'Recipe 2 Unpublished', NULL, '/random.md', '/random.png');

INSERT INTO review(id, title, post_date, lat, lng, source, thumbnail) VALUES ('1', 'Review 1', '2018-09-01 12:30:00.000', 53.485154, -2.235328,'/md/random.md', '/random.png');
INSERT INTO review(id, title, post_date, lat, lng, source, thumbnail) VALUES ('2', 'Review 2', '2018-09-02 12:30:00.000', 53.485559, -2.234963,'/md/random.md', '/random.png');
INSERT INTO review(id, title, post_date, lat, lng, source, thumbnail) VALUES ('3', 'Review 3 Unpublished', NULL, 50.0, 50.0,'/md/random.md', '/random.png');

INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('1', '1', 'blog', '/images/banner.jpeg', '2018-09-01 12:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('2', '1', 'blog', '/images/bp-frontend.svg', '2018-09-01 10:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('3', '1', 'blog', '/random3.png', '2018-09-01 16:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('4', '2', 'blog', '/random4.png', '2018-09-02 12:40:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('5', '2', 'blog', '/random5.png', '2018-09-02 11:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('6', '2', 'blog', '/random6.png', '2018-09-02 16:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('7', '2', 'blog', '/random7.png', '2018-09-02 12:50:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('8', '3', 'blog', '/random8.png', '2018-09-05 10:30:00.000');
INSERT INTO image(id, reference_id, reference_type, source, post_date) VALUES ('9', '4', 'blog', '/random9.png', '2018-09-06 16:30:00.000');

-- PROVE
SELECT * FROM blog;
SELECT * FROM recipe;
SELECT * FROM review;
SELECT * FROM image;
