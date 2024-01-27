
export interface User {
    id: number;
    username: string;
}

export interface Person {
    id: number
    firstname: string
    lastname: string
    gender: 'M' | 'F'
    date_of_birth: Date
    description: string
    facebook: string
    instagram: string
    website: string
    twitter: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined
}

export interface Issue {
    id: number
    title: string
    short_description: string
    long_description: string
    photo: string
}

export interface Organisation {
    id: number
    name: string
}