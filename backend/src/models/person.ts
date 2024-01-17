import { getClient, loadQueries } from '../services/db';
import { User } from '../types';

const personQueries = loadQueries('persons');

class Person {
    id: number
    name: string
    type: 'party' | 'association' | 'coalition'
    description: string
    twitter: string
    facebook: string
    instagram: string
    website: string
    address: string
    contact_phone: string
    contact_email: string
    parent_organisation_id: number
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor(params: { [key: string]: any }, user?: User) {

    }
}

export default Person;