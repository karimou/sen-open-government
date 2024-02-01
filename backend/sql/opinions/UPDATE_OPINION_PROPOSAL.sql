UPDATE opinion_proposal
SET
    number = $2,
    content = $3,
    last_modified_on = NOW(),
    last_modified_by = $4
WHERE
    id = $1
RETURNING *;