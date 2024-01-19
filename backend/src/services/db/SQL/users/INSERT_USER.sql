INSERT INTO "user"
(username, email, phone, password, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, NOW(), $5)
RETURNING *;