WITH person_organisations as (
    SELECT
        organisation_member.person_id,
        json_agg(json_build_object('id', organisation.id, 'name', organisation.name)) FILTER (WHERE organisation.id IS NOT NULL) as organisations
    FROM organisation_member 
    LEFT JOIN organisation ON organisation_member.organisation_id = organisation.id
    GROUP BY organisation_member.person_id
)
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
    json_build_object('id', "user".id, 'username', "user".username) as user,
    person_organisations.organisations
FROM election_candidate
LEFT JOIN person ON person.id = election_candidate.person_id
LEFT JOIN "user" ON person.last_modified_by = "user".id
LEFT JOIN person_organisations ON person_organisations.person_id = person.id
WHERE election_candidate.election_id = $1
ORDER BY lastname, firstname;