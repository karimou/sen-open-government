INSERT INTO organisation
(name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation_id, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), $12)
RETURNING *;