INSERT INTO person 
(firstname, lastname, gender, date_of_birth, description, article_url, facebook, instagram, twitter, website, last_modified_on, last_modified_by)
VALUES
($1, $2, $3, $4, %5, $6, $7, $8, $9, $10, NOW(), $11);