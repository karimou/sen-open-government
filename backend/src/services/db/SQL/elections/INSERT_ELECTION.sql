INSERT INTO election
(date, title, type, description, article_url, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, $5, NOW(), $6)
RETURNING *;