SELECT
    election.id, 
    election.date,
    election.type, 
    election.description, 
    election.article_url as article, 
    election.created_on as createdOn, 
    election.last_modified_on as lastModifiedOn, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM election
LEFT JOIN "user" ON election.last_modified_by = "user".id
WHERE election.id = $1;