UPDATE election
SET
    date = $2, 
    type = $3, 
    description = $4, 
    last_modified_on = NOW(), 
    last_modified_by = $5
WHERE 
    id = $1
RETURNING *;
