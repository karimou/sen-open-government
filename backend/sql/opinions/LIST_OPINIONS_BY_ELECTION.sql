
SELECT
    opinion.id, 
    opinion.author_id,
    opinion.issue_id,
    opinion.summary,
    opinion.content,
    opinion.created_on, 
    opinion.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM election_candidate
LEFT JOIN person ON election_candidate.person_id = person.id
LEFT JOIN opinion ON opinion.author_id = person.id
LEFT JOIN "user" ON opinion.last_modified_by = "user".id
WHERE election_candidate.election_id = $1;