WITH opinion_proposals_count_table as (
    SELECT
        opinion.id,
        COALESCE(COUNT(opinion_proposal.id), 0) as num_proposals
    FROM opinion
    LEFT JOIN opinion_proposal ON opinion.id = opinion_proposal.opinion_id
    GROUP BY opinion_id
)
SELECT
    opinion.id, 
    opinion.author_id,
    opinion.issue_id,
    opinion.summary,
    opinion.content,
    opinion_proposals_count_table.num_proposals,
    opinion.created_on, 
    opinion.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM election_candidate
LEFT JOIN person ON election_candidate.person_id = person.id
LEFT JOIN opinion ON opinion.author_id = person.id
LEFT JOIN opinion_proposals_count_table ON opinion_proposals_count_table.opinion_id = opinion.id
LEFT JOIN "user" ON opinion.last_modified_by = "user".id
WHERE election_candidate.election_id = $1;