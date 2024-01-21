<script setup>
    import { ref } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import FileUpload from 'primevue/fileupload';

    const uploading = ref(false);
    const onUpload = () => {
        console.log('onUpload');
    }

    const images = ref([]);

    const onFileSelected = (event) => {
        var f =  event.target.files[0];
        var reader = new FileReader();
        uploading = true;
        reader.onload = (function (file) {
            return function(e) {
                try {
                    let [extension, type, mimetype] = getFileParams(getFileSignature(e.target.result));
                    console.log([extension, type, mimetype])
                    //if (!extension) {throw 'Type of file not supported'}
                    if (file.size > 200000000) {throw 'File is too big'}
                    
                    //   file.name, // file will be saved as testBucket/contacts.csv
                    // 	Body: e.target.result,
                    
                } catch (e) {
                    
                    console.log(e);

                }
            };
        })(f);
        reader.readAsArrayBuffer(f);
    };
    
</script>

<template>
    <div>
        <Dropdown
            v-model="images"
            class="w-full"
            
        />
        <FileUpload 
            mode="basic" 
            name="file" 
            chooseLabel="Ajouter une image"
            class="p-button-text"
            url="/api/v1/files/upload" 
            accept="image/*" 
            :maxFileSize="1000000" 
            @upload="onUpload" 
        />
    </div>
</template>