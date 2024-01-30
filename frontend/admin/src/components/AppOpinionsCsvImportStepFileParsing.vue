<script setup>

    import { ref } from 'vue';
    import FileUpload from 'primevue/fileupload';
    import Button from 'primevue/button';
    import Badge from 'primevue/badge';
    import Message from 'primevue/message';
    import Papa from 'papaparse';


    const emit = defineEmits(['start', 'complete']);

    const fields = ref(['Thème', 'Opinion']);

    const errorMessage = ref(null);
    const parsedLines = ref([]);
    
    const onSelectedFiles = ({files}) => {
        parsedLines.value = [];
        emit('start');
        files.forEach(file => Papa.parse(file, {
            header: true,
            complete: (results, _file) => {
                parsedLines.value = parsedLines.value.concat(results?.data || []);
                emit('complete', parsedLines.value);
            },
            error: (error, _file) => {
                errorMessage.value = error;
            },
        }));
    };

    const formatSize = (bytes) => {
        const k = 1024;
        const dm = 3;
        
        return bytes;
    };

</script>

<template>

    <FileUpload 
        name="file" 
        accept="text/csv" 
        :maxFileSize="1000000" 
        @select="onSelectedFiles"
    >
        <template #header="{ chooseCallback, clearCallback, files }">
            <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                <div class="flex gap-2">
                    <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                    <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
                </div>
            </div>
        </template>
        <template #content="{ files, removeFileCallback }">
            <div v-if="files.length > 0">
                <h5>Pending</h5>
                <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                        <div>
                            <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Pending" severity="warning" />
                        <Button icon="pi pi-times" @click="removeFileCallback(index)" outlined rounded  severity="danger" />
                    </div>
                </div>
            </div>
            <Message v-if="errorMessage" severity="error">{{ errorMessage }}</Message>
        </template>
        <template #empty>
            <div class="flex align-items-center justify-content-center flex-column">
                <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                <p class="mt-4 mb-0">
                    Déposez vos fichiers CSV contenant les opinions à charger ići..
                    Un fichier CSV avec les colonnes suivantes est attendu: {{ fields.join(', ') }}..
                </p>
            </div>
        </template>
    </FileUpload>

</template>
