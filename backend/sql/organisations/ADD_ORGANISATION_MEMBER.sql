INSERT INTO organisation_member
(organisation_id, person_id, role, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, NOW(), $4)
ON CONFLICT (organisation_id, person_id) DO NOTHING
RETURNING *;