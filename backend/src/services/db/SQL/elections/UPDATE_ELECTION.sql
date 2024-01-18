UPDATE election
SET
    date = $2, 
    title = $3, 
    type = $4, 
    description = $5, 
    last_modified_on = NOW(), 
    last_modified_by = $6
WHERE 
    id = $1
RETURNING *;
