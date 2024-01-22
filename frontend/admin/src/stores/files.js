import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useFilesStore = defineStore('files', () => {

    const files = ref(null);

    const refreshFiles = async () => {

        return API.files.listFiles()
            .then(data => files.value = data);
    };

    return { files, refreshFiles };
})
