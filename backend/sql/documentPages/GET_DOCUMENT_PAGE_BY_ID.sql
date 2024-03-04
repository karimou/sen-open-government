WITH RECURSIVE children_pages as (
	SELECT
		id,
		title,
		summary,
		cover_image_url,
		capsule_url,
		parent_id
	FROM
		document_page
	WHERE
		id = $1
	UNION ALL
		SELECT
			document_page.id,
			document_page.title,
			document_page.summary,
			document_page.cover_image_url,
			document_page.capsule_url,
			document_page.parent_id
		FROM
			document_page
		INNER JOIN children_pages t ON t.id = document_page.parent_id
	)
SELECT
    document_page.id, 
    document_page.title,
    document_page.summary,
    document_page.content,
    document_page.cover_image_url,
    document_page.capsule_url,
    document_page.parent_id,
    json_agg(c.*) as children,
    document_page.created_on, 
    document_page.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM document_page
LEFT JOIN "user" ON document_page.last_modified_by = "user".id
LEFT JOIN LATERAL (SELECT id, title FROM children_pages) c ON true
WHERE document_page.id = $1
GROUP BY document_page.id, "user".id;
