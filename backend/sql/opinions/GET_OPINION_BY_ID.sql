WITH opinion_proposals_table as (
    SELECT
        opinion.id as opinion_id,
        json_agg(json_build_object('id', opinion_proposal.id, 'number', opinion_proposal.number, 'content', opinion_proposal.content)) FILTER (WHERE opinion_proposal.id IS NOT NULL) as proposals
    FROM opinion
    LEFT JOIN opinion_proposal ON opinion.id = opinion_proposal.opinion_id
    WHERE opinion.id = $1
    GROUP BY opinion.id
)
SELECT
    opinion.id, 
    opinion.author_id,
    json_build_object('id', person.id, 'firstname', person.firstname, 'lastname', person.lastname) as author,
    opinion.issue_id,
    json_build_object('id', issue.id, 'title', issue.title, 'photo', issue.photo) as issue,
    opinion.summary,
    opinion.content,
    opinion_proposals_table.proposals,
    opinion.created_on, 
    opinion.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM opinion
LEFT JOIN person ON opinion.author_id = person.id
LEFT JOIN issue ON opinion.issue_id = issue.id
LEFT JOIN "user" ON opinion.last_modified_by = "user".id
LEFT JOIN opinion_proposals_table ON opinion_proposals_table.opinion_id = opinion.id
WHERE opinion.id = $1;