SELECT id FROM blog WHERE id='ID_ASD';
SELECT id FROM image WHERE id='ID_ASD';
SELECT id FROM recipe WHERE id='ID_ASD';
SELECT id FROM review WHERE id='ID_ASD';



INSERT INTO blog (id, title, post_date, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', '/path/to/file.md', '/path/to/thumbnail.png');



INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('3212c9', '6d18cc', 'recipe', 'http://images.flavour101.com/roast-beef-1.jpg', '2018-11-01 09:01:00.000');



INSERT INTO recipe (id, title, post_date, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', '/path/to/file.md', '/path/to/thumbnail.png');



INSERT INTO review (id, title, post_date, lat, lng, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', 53.485154, -2.235328, '/path/to/file.md', '/path/to/thumbnail.png');



UPDATE review SET post_date='2018-11-01 08:30:00.000' WHERE id='ID_ASD';