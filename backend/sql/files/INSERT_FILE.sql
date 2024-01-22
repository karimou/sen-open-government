INSERT INTO my_file 
(name, mime_type, url, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, NOW(), $4)
RETURNING *;
