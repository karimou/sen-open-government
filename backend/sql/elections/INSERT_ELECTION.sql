INSERT INTO election
(date, title, type, description, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, NOW(), $5)
RETURNING *;