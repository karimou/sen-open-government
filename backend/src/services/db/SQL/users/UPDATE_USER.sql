UPDATE "user"
SET
    username = $2,
    email = $3,
    phone = $4,
    last_modified_on = NOW(),
    last_modified_by = $5
WHERE
    id = $1
RETURNING *;