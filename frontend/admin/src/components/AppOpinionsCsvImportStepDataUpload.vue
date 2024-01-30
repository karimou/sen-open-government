<script setup>

    import { toRefs, ref, onMounted, computed } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';
    import Tag from 'primevue/tag';

    import { useIssuesStore } from '@/stores/issues';

    import { API } from '@/services/api';

    const issuesStore = useIssuesStore();

    const uploadingDict = ref({});
    const uploadedDict = ref({});

    onMounted(async () => {
        if (!issuesStore.issues) await issuesStore.refreshIssues();
    });

    const props = defineProps({
        parsedLines: {
            type: Array,
            default: []
        },
        authorId: {
            type: Number
        }
    });

    const { parsedLines, authorId } = toRefs(props);

    const opinions = computed(() => parsedLines.value.map(line => {
        let issue = issuesStore.issuesByTitle[line['Thème']];
        return {
            issue_id: issue?.id,
            issue: line['Thème'],
            author_id: authorId.value,
            summary: line['Opinion'],
            uploaded: false,
            uploading: false
        }
    }));

    const upload = async () => {

        for (let i = 0; i < opinions.value.length; i++) {
            let opinion = opinions.value[i];
            if (!opinion.issue_id) continue;
            if (!opinion.author_id) continue;
            uploadingDict.value[i] = true;
            await API.opinions.addOpinion(opinion)
                .then(_result => {
                    uploadingDict.value[i] = false;
                    uploadedDict.value[i] = true;
                });
        }
    }
</script>

<template>
    <DataTable 
        :value="opinions"
        v-if="opinions.length > 0"
    >
        <template #header>
            <div class="flex flex-wrap justify-content-end">
                <Button icon="pi pi-save" raised label="Uploader" @click="upload()"/>
            </div>
        </template>
        <Column headerStyle="width: 50px">
            <template #body="{ index }">
                <i class="pi pi-spin pi-spinner" v-if="uploadingDict[index]" />
                <i class="pi pi-check" v-if="uploadedDict[index]" style="color: green" />
            </template>
        </Column>
        <Column field="id" header="#">

            <template #body="{ index }">
                {{ index + 1 }}
            </template>
        </Column>
        <Column headerStyle="width: 200px" field="issue" header="Thème">
            <template #body="{ data }">
                <Tag :severity="data.issue_id ? 'success' : 'danger'" :value="data.issue" />
            </template>
        </Column>
        <Column field="content" header="Opinion" />

    </DataTable>

</template>
