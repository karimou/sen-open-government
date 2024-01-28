INSERT INTO person 
(firstname, lastname, gender, date_of_birth, occupation, description, facebook, instagram, twitter, website, photo, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), $12)
RETURNING *;