UPDATE issue
SET
    title = $2,
    short_description = $3,
    long_description = $4,
    photo = $5,
    last_modified_on = NOW(),
    last_modified_by = $6
WHERE
    id = $1
RETURNING *;