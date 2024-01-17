SELECT
    opinion.id, 
    opinion.author_id,
    json_build_object('id', person.id, 'fisrtname', person.fisrtname, 'lastname', person.lastname) as author,
    opinion.issue_id,
    json_build_object('id', issue.id, 'title', issue.title) as issue,
    opinion.summary,
    opinion.content,
    person.created_on, 
    person.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM opinion
LEFT JOIN person ON opinion.author_id = person.id
LEFT JOIN issue ON opinion.issue_id = issue.id
LEFT JOIN "user" ON person.last_modified_by = "user".id
WHERE opinion.id = $1;