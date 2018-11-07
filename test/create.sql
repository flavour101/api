SELECT id FROM blog WHERE id='ID_ASD';
SELECT id FROM image WHERE id='ID_ASD';
SELECT id FROM recipe WHERE id='ID_ASD';
SELECT id FROM review WHERE id='ID_ASD';



INSERT INTO blog (id, title, post_date, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', '/path/to/file.md', '/path/to/thumbnail.png');



INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('5a0ed5', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-1.jpg', '2018-11-07 20:05:00.001');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('75635a', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-2.jpg', '2018-11-07 20:05:00.002');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('02810e', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-3.jpg', '2018-11-07 20:05:00.003');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('fbef86', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-4.jpg', '2018-11-07 20:05:00.004');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('912701', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-5.jpg', '2018-11-07 20:05:00.005');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('8a4cc9', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-6.jpg', '2018-11-07 20:05:00.006');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('b57813', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-7.jpg', '2018-11-07 20:05:00.007');

INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('e87dae', 'c15ae1', 'recipe', 'http://images.flavour101.com/baked-cod-with-veg-8.jpg', '2018-11-07 20:05:00.008');



INSERT INTO recipe (id, title, post_date, source, thumbnail)
VALUES ('c15ae1', 'Baked cod with mushrooms & broccoli', '2018-11-07 20:05:00.000', '/md/recipe/baked-cod-with-veg.md', 'http://images.flavour101.com/baked-cod-with-veg-thumbnail.jpg');



INSERT INTO review (id, title, post_date, lat, lng, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', 53.485154, -2.235328, '/path/to/file.md', '/path/to/thumbnail.png');



UPDATE review SET post_date='2018-11-01 08:30:00.000' WHERE id='ID_ASD';