UPDATE election
SET
    date = $2, 
    type = $3, 
    description = $4, 
    article_url = $5, 
    last_modified_on = NOW(), 
    last_modified_by = $6
WHERE 
    id = $1
RETURNING *;
