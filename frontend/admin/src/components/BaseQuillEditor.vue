
<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import BaseQuillEditorGridBlot from '@/components/BaseQuillEditorBlots/Grid.js';
    
    
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    import { ref } from 'vue';


    /* -----------
    Props and Model init
    ----------- */
    const content = defineModel({ type: String });
    const props = defineProps({
        id: {
            type: String
        },
        editorHeight: {
            type: String,
            default: '300px'
        }
    });

    /* -----------
    Quill initialisation
    ----------- */
    const quill = ref();
    const onQuillEditorReady = (quillInstance) => quill.value = quillInstance;

    BaseQuillEditorGridBlot.register();

    const toolbarOptions = ref([
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': []}],
        ['link' ,'video'],
        ['divRow'],
        ['clean']                                         // remove formatting button
    ]);



</script>
<template>
    <div>
        <QuillEditor 
            v-model:content="content"
            content-type="html"
            :toolbar="toolbarOptions"
            @ready="onQuillEditorReady"
        />
            <!-- :style="{ height: editorHeight }" -->
    
    </div>
    
</template>
<style>
.ql-toolbar .ql-divRow:before {
  content: 'Grille';
}
.my-col {
    border: 1px solid red;
    padding: 10px;
    margin: 5px;
    flex: 1;
}
.my-row {
    border: 1px solid green;
    margin: 0 5px;
    padding: 10px;
    display: flex;
    flex-grow: 0;
}
</style>