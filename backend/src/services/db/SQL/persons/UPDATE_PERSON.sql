UPDATE person
SET
    firstname = $2,
    lastname = $3,
    gender = $4,
    date_of_birth = $5,
    description = $6,
    facebook = $8,
    instagram = $9,
    twitter = $10,
    website = $11,
    last_modified_on = NOW(),
    last_modified_by = $12
WHERE
    id = $1;