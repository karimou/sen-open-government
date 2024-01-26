SELECT
    person.id, 
    person.firstname,
    person.lastname,
    person.description,
    person.facebook,
    person.instagram,
    person.twitter,
    person.website,
    person.photo,
    person.created_on, 
    person.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM election_candidate
LEFT JOIN person ON person.id = election_candidate.person_id
LEFT JOIN "user" ON person.last_modified_by = "user".id
WHERE election_candidate.election_id = $1
ORDER BY lastname, firstname;