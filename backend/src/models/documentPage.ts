import { json } from "stream/consumers";
import { getClient, loadQueries } from "../services/db";
import { User } from '../types';

const documentPageQueries = loadQueries('documentPages');

class DocumentPage {

    id: number
    title: string
    summary: string
    content: string
    cover_image_url: string
    capsule_url: string
    parent_id: number
    parent: DocumentPage
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor(params: { [key: string]: any } , user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;

    }
    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: documentPageQueries.INSERT_DOCUMENT_PAGE,
            values: [this.title, this.summary, this.content, this.cover_image_url, this.capsule_url, this.cover_image_url, this.parent_id, this.last_modified_by?.id]
        }

        let documentPage = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!documentPage) throw(new Error('[MyModel] retrieving obj failed'));
    
        this.id = documentPage.id;
        this.last_modified_on = documentPage.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();
        let query = {
            text: documentPageQueries.UPDATE_DOCUMENT_PAGE,
            values: [this.id, this.title, this.summary, this.content, this.cover_image_url, this.capsule_url, this.cover_image_url, this.parent_id, this.last_modified_by?.id]
        }

        let documentPage = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!documentPage) throw(new Error('[documentPage] update failed'));

        Object.assign(this, documentPage);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: documentPageQueries.DELETE_DOCUMENT_PAGES_BY_IDS,
            values: [ids]
        }

        let documentPages = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!documentPages) throw(new Error('[documentPage] documentPages deletion failed'));

    }
    static async getById(id: number | string): Promise<DocumentPage> {
        let client = await getClient();

        let query = {
            text: documentPageQueries.GET_DOCUMENT_PAGE_BY_ID,
            values: [id]
        }

        let documentPage = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!documentPage) throw(new Error('[documentPage] retrieving documentPage failed'));
        
        return new DocumentPage({...documentPage}, documentPage.user);

    }
    static async getDocumentChildren(id: number | string): Promise<Array<DocumentPage>> {
        let client = await getClient();

        let query = {
            text: documentPageQueries.GET_DOCUMENT_PAGE_CHILDREN,
            values: [id]
        }

        let documentPages = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!documentPages) throw(new Error('[documentPage] retrieving documentPage children failed'));
        
        return documentPages.map(documentPage => new DocumentPage(documentPage , documentPage.user));

    }
    static async list(): Promise<Array<DocumentPage>> {
        let client = await getClient();

        let query = {
            text: documentPageQueries.SELECT_ALL_ROOT_DOCUMENT_PAGES,
            values: []
        }

        let documentPages = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!documentPages) throw(new Error('[documentPage] retrieving list failed'));
        
        return documentPages.map(documentPage => new DocumentPage(documentPage , documentPage.user));

    }

}

export default DocumentPage;