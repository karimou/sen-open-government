DELETE FROM organisation_member WHERE organisation_id = $1 AND person_id = $2 RETURNING id;