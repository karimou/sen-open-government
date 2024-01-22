<script setup>
    import { ref, onMounted } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import FileUpload from 'primevue/fileupload';
    import { useFilesStore } from '@/stores/files';
    import Image from 'primevue/image';

    const loading = ref(false);

    const image = defineModel('image');

    const images = ref([]);

    const filesStore = useFilesStore();
    onMounted(() => {
        loading.value = true;
        filesStore.refreshFiles()
            .then(() => loading.value = false);
    });

    
</script>

<template>
    <div class="grid">
        <div class="col-6">
            <Dropdown
                :options="filesStore.files"
                v-model="image"
                class="w-full"
                optionLabel="name"
                optionValue="url"
                placeholder="Choisir une image"
                :loading="loading"
                showClear
            />
            <Image 
                :src="image"
                style="max-width: 100%;"
                :imageStyle="{maxWidth: '100%'}"
            />
        </div>
        <div class="col-6">
            <FileUpload 
                mode="advanced" 
                name="file" 
                chooseLabel="Ajouter une image"
                class="p-button-text"
                url="/api/v1/files/upload" 
                accept="image/*" 
                :maxFileSize="1000000" 
                showUploadButton
                @upload="filesStore.refreshFiles" 
                
            />
        </div>
    </div>
</template>