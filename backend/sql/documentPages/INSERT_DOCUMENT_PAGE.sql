INSERT INTO document_page
(title, summary, content, cover_image_url, capsule_url, parent_id, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, $5, $6, NOW(), $7)
RETURNING *;
 