UPDATE organisation
SET
    name = $2,
	type = $3,
	description = $4,
	twitter = $5,
	facebook = $6,
	instagram = $7,
	website = $8,
	address = $9,
	contact_phone = $10,
	contact_email = $11,
	parent_organisation_id = $12,
	last_modified_on = NOW(),
	last_modified_by = $13
WHERE id = $1;