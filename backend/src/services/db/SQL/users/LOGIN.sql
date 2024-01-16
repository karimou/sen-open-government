SELECT "user".id, "user".username
FROM "user" 
WHERE "user".email = $1 AND "user".password = $2;