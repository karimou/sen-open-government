DELETE FROM "user" WHERE id = ANY($1) RETURNING id;