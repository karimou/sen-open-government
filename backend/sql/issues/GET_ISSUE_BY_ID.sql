SELECT
    issue.id, 
    issue.title,
    issue.short_description,
    issue.long_description,
    issue.created_on, 
    issue.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM issue
LEFT JOIN "user" ON issue.last_modified_by = "user".id
WHERE issue.id = #1;
