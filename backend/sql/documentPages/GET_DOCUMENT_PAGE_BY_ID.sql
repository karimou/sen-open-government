
SELECT
    document_page.id, 
    document_page.title,
    document_page.summary,
    document_page.content,
    document_page.cover_image_url,
    document_page.capsule_url,
    document_page.parent_id,
    document_page.created_on, 
    document_page.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM document_page
LEFT JOIN "user" ON document_page.last_modified_by = "user".id
WHERE document_page.id = $1;
