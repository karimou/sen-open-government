SELECT
    organisation.id, 
    organisation.name,
    organisation.type,
    organisation.description,
    organisation.twitter,
    organisation.facebook,
    organisation.instagram,
    organisation.website,
    organisation.address,
    organisation.contact_phone,
    organisation.contact_email,
    organisation.parent_organisation_id,
    json_build_object('id', parent.id, 'name', parent.name, 'type', parent.type) as parent_organisation,
    organisation.created_on, 
    organisation.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM organisation_member
LEFT JOIN organisation ON organisation.id = organisation_member.organisation_id
LEFT JOIN "user" ON organisation.last_modified_by = "user".id
WHERE organisation_member.person_id = $1;
