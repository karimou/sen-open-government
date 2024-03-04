<script setup>
    import { inject, onMounted, ref, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import BaseDocumentPagesTable from '@/components/BaseDocumentPagesTable.vue';

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const dialogRef = inject('dialogRef');
    const parentId = ref(null);
    const parentTitle = ref(null);
    onMounted(() => {
        parentId.value = dialogRef.value.data?.id;
        parentTitle.value = dialogRef.value.data?.title;
    });

</script>

<template>
    <div style="width: 850px">
        <BaseDocumentPagesTable
            v-if="parentId"
            :parentId="parentId"
            :parentTitle="parentTitle"
        />
    </div>

</template>