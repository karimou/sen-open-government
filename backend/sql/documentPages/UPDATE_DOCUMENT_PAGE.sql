UPDATE document_page
SET
    title = $2, 
    summary = $3, 
    content = $4, 
    cover_image_url = $5, 
    capsule_url = $6, 
    parent_id = $7, 
    last_modified_on = NOW(), 
    last_modified_by = $8
WHERE 
    id = $1
RETURNING *;
