import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useDocumentPagesStore = defineStore('documentpages', () => {

    const documentPages = ref(null);

    const refreshDocumentPages = async () => {

        return API.documentPages.listDocumentPages()
            .then(data => documentPages.value = data);
    };

    return { documentPages, refreshDocumentPages };
})
