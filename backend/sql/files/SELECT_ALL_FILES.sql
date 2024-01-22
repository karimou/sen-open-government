SELECT
    my_file.id, 
    my_file.name,
    my_file.mime_type,
    my_file.url,
    my_file.created_on, 
    my_file.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM my_file
LEFT JOIN "user" ON my_file.last_modified_by = "user".id;
