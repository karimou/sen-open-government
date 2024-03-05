
SELECT
    id,
    title,
    summary,
    content,
    cover_image_url,
    capsule_url
FROM
    document_page
WHERE
    parent_id = $1