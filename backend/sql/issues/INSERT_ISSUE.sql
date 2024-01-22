INSERT INTO issue 
(title, short_description, long_description, photo, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, NOW(), $5)
RETURNING *;
