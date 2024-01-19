UPDATE opinion
SET
    author_id = $2,
    issue_id = $3,
    summary = $4,
    content = $5,
    last_modified_on = NOW(),
    last_modified_by = $6
WHERE
    id = $1
RETURNING *;