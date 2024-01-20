<script setup>

    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Skeleton from 'primevue/skeleton';
    const emptyArray = new Array(5);
    
</script>
<template>

    <div class="card">
        <DataTable :value="emptyArray">
            <Column field="a">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="b">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="c">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="d">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>