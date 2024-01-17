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
    row_to_json(parent) as parent_organisation,
    organisation.created_on, 
    organisation.last_modified_on, 
    json_build_object('id', "user".id, 'username', "user".username) as user
FROM organisation
LEFT JOIN "user" ON organisation.last_modified_by = "user".id
LEFT JOIN organisation as parent ON organisation.parent_organisation_id = organisation.id;
