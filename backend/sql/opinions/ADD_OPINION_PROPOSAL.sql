INSERT INTO opinion_proposal
(opinion_id, content, last_modified_on, last_modified_by)
VALUES
($1, $2, NOW(), $3)
RETURNING *;