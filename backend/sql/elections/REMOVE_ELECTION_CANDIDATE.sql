DELETE FROM election_candidate WHERE election_id = $1 AND person_id = $2 RETURNING id;