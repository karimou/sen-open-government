<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { ref, onMounted } from 'vue';

    import { API } from '@/services';

    const elections = ref([]);

    onMounted(() => {
        
        API.elections.listElections()
            .then(data => elections.value = data);

    });
    
</script>
<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Élections</h5>
                <DataTable :value="elections">
                    <Column field="id" header="#"></Column>
                    <Column field="title" header="Title"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="date" header="Date"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="article" header="Lien Article"></Column>

                </DataTable>
            </div>
        </div>
    </div>
</template>