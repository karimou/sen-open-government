
import { ref } from 'vue';
import { defineStore } from "pinia";

export const useDocumentPagesStore = defineStore('documentpages', () => {

    const currentDocumentPage = ref(null);

    const storeCurrentDocumentPage = (documentPage) => {
        currentDocumentPage.value = documentPage;
    };

    return { 
        currentDocumentPage, 
        storeCurrentDocumentPage
    };
});