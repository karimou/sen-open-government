UPDATE person
SET
    firstname = $2,
    lastname = $3,
    gender = $4,
    date_of_birth = $5,
    occupation = $6,
    description = $7,
    facebook = $8,
    instagram = $9,
    twitter = $10,
    website = $11,
    photo = $12,
    last_modified_on = NOW(),
    last_modified_by = $13
WHERE
    id = $1
RETURNING *;