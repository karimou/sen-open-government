SELECT
    "user".id, 
    "user".username,
    "user".email,
    "user".phone,
    "user".joined_on, 
    "user".last_modified_on, 
    json_strip_nulls(json_build_object('id', modification_author.id, 'username', modification_author.username)) as user
FROM "user"
LEFT JOIN "user" modification_author ON "user".last_modified_by = modification_author.id
WHERE user.id = $1;