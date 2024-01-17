SELECT
    election.id, 
    election.date,
    election.type, 
    election.description, 
    election.article_url as article, 
    election.created_on, 
    election.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM election
LEFT JOIN "user" ON election.last_modified_by = "user".id;