INSERT INTO opinion_proposal
(opinion_id, number, content, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, NOW(), $4)
RETURNING *;