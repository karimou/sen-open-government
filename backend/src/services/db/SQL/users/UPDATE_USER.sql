UPDATE "user"
SET
    username = $2,
    email = $3,
    phone = $4,
    password = $5,
    last_modified_on = NOW(),
    last_modified_by = $6
WHERE
    id = $1
RETURNING *;