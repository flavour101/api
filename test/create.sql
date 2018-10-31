SELECT id FROM blog WHERE id='ID_ASD';
SELECT id FROM image WHERE id='ID_ASD';
SELECT id FROM recipe WHERE id='ID_ASD';
SELECT id FROM review WHERE id='ID_ASD';



INSERT INTO blog (id, title, post_date, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', '/path/to/file.md', '/path/to/thumbnail.png');



INSERT INTO image (id, reference_id, reference_type, source, post_date)
VALUES ('ID_ASD', 'REFERENCE_ID', 'REFERENCE_TYPE', '/path/to/file.md', '2018-09-01 12:30:00.000');



INSERT INTO recipe (id, title, post_date, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', '/path/to/file.md', '/path/to/thumbnail.png');



INSERT INTO review (id, title, post_date, lat, lng, source, thumbnail)
VALUES ('ID_ASD', 'TITLE', '2018-09-01 12:30:00.000', 53.485154, -2.235328, '/path/to/file.md', '/path/to/thumbnail.png');
