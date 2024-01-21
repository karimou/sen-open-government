<script setup>
    import { inject, onMounted, ref, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import BasePersonsTable from '@/components/BasePersonsTable.vue';

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const dialogRef = inject('dialogRef');
    const election = ref(null);
    const electionCandidates = ref([]);
    const fetchCandidates = () => {
        tableLoading.value = true;
        if (!election.value?.id) return;
        API.elections.listElectionCandidates(election.value?.id)
            .then(data => electionCandidates.value = data)
            .then(() => tableLoading.value = false);
    };
    onMounted(() => {
        election.value = dialogRef.value.data;
        fetchCandidates();
    });

    /* -----------
    Handle candidates addition
    ----------- */
    const dialog = useDialog();
    const ElectionCandidateAdditionForm = defineAsyncComponent(() => import('@/components/ElectionCandidateAdditionForm.vue'));
    const openCandidateAdditionForm = () => {
        dialog.open(ElectionCandidateAdditionForm, {
            data: { electionId: election.value?.id },
            onClose: (props) => {
                if (props?.data == 'success') fetchCandidates();
            },
            props: {
                modal: true
            }
        })
    }

    /* -----------
    Handle candidates removal
    ----------- */
    const removeSelectedCandidates = (selectedCandidates) => {
        let pairs = selectedCandidates.map(candidate => ({ electionId: election.value?.id, personId: candidate.id }));
        return API.elections.removeElectionCandidates(pairs)
    };
</script>

<template>
    <div style="width: 650px">
        <BasePersonsTable
            :persons="electionCandidates"
            :loading="tableLoading"
            :addFunction="openCandidateAdditionForm"
            :deleteFunction="removeSelectedCandidates"
            @refresh="fetchCandidates"
        />
    </div>

</template>