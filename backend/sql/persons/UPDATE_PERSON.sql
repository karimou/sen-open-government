UPDATE person
SET
    firstname = $2,
    lastname = $3,
    gender = $4,
    date_of_birth = $5,
    description = $6,
    facebook = $7,
    instagram = $8,
    twitter = $9,
    website = $10,
    photo = $11,
    last_modified_on = NOW(),
    last_modified_by = $12
WHERE
    id = $1
RETURNING *;