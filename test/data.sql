USE flavour101;

-- CLEAN
TRUNCATE TABLE blog;
TRUNCATE TABLE recipe;
TRUNCATE TABLE review;

-- TEST DATA
INSERT INTO blog(id, title, post_date, source) VALUES (1, 'Blog 1', '2018-09-01 12:30:00.000', '/random.md');
INSERT INTO blog(id, title, post_date, source) VALUES (2, 'Blog 2', '2018-09-02 12:30:00.000', '/random.md');
INSERT INTO blog(id, title, post_date, source) VALUES (3, 'Blog 3 Unpublished', NULL, '/random.md');

INSERT INTO recipe(id, title, post_date, source) VALUES (1, 'Recipe 1', '2018-09-01 12:30:00.000', '/random.md');
INSERT INTO recipe(id, title, post_date, source) VALUES (2, 'Recipe 2', '2018-09-02 12:30:00.000', '/random.md');
INSERT INTO recipe(id, title, post_date, source) VALUES (3, 'Recipe 2 Unpublished', NULL, '/random.md');

INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source) VALUES (1, 'Review 1', '2018-09-01 12:30:00.000', 0.0, 0.0,'/random.md');
INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source) VALUES (2, 'Review 2', '2018-09-02 12:30:00.000', 20.0, 50.0,'/random.md');
INSERT INTO review(id, title, post_date, x_coordinate, y_coordinate, source) VALUES (3, 'Review 3 Unpublished', NULL, 50.0, 50.0,'/random.md');

-- PROVE
SELECT * FROM blog;
SELECT * FROM recipe;
SELECT * FROM review;