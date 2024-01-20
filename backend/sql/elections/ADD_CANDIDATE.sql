INSERT INTO election_candidate
(election_id, person_id,  last_modified_on, last_modified_by)
VALUES
($1, $2, NOW(), $3)
RETURNING *;