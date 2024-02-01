
SELECT
    opinion_proposal.id, 
    opinion_proposal.content,
    opinion_proposal.created_on, 
    opinion_proposal.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM opinion_proposal
LEFT JOIN "user" ON opinion_proposal.last_modified_by = "user".id
WHERE opinion_proposal.opinion_id = $1;