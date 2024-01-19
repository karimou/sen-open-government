INSERT INTO person 
(firstname, lastname, gender, date_of_birth, description, facebook, instagram, twitter, website, photo, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), $11)
RETURNING *;