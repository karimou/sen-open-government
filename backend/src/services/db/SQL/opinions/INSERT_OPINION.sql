INSERT INTO opinion 
(author_id, issue_id, summary, content, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, NOW(), $5)
RETURNING *;