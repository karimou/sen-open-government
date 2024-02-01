SELECT
    person.id, 
    person.firstname,
    person.lastname,
    person.date_of_birth,
    person.occupation,
    person.description,
    person.facebook,
    person.instagram,
    person.twitter,
    person.website,
    person.photo,
    person.created_on, 
    person.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM organisation_member
LEFT JOIN person ON person.id = organisation_member.person_id
LEFT JOIN "user" ON person.last_modified_by = "user".id
WHERE organisation_member.organisation_id = $1
ORDER BY firstname, lastname;