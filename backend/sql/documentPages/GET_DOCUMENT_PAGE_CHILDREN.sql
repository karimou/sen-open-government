
SELECT
    id,
    title,
    summary,
    cover_image_url,
    capsule_url
FROM
    document_page
WHERE
    parent_id = $1