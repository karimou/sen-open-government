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
    const organisation = ref(null);
    const organisationMembers = ref([]);
    const fetchMembers = () => {
        tableLoading.value = true;
        if (!organisation.value?.id) return;
        API.organisations.listOrganisationMembers(organisation.value?.id)
            .then(data => organisationMembers.value = data)
            .then(() => tableLoading.value = false);
    };
    onMounted(() => {
        organisation.value = dialogRef.value.data;
        fetchMembers();
    });

    /* -----------
    Handle candidates addition
    ----------- */
    const dialog = useDialog();
    const OrganisationMemberAdditionForm = defineAsyncComponent(() => import('@/components/OrganisationMemberAdditionForm.vue'));
    const openCandidateAdditionForm = () => {
        dialog.open(OrganisationMemberAdditionForm, {
            data: { organisationId: organisation.value?.id },
            onClose: (props) => {
                if (props?.data == 'success') fetchMembers();
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
        let pairs = selectedCandidates.map(candidate => ({ organisationId: organisation.value?.id, personId: candidate.id }));
        return API.organisations.removeOrganisationMembers(pairs)
    };
</script>

<template>
    <div style="width: 850px">
        <BasePersonsTable
            :persons="organisationMembers"
            :loading="tableLoading"
            :hideDescription="true"
            :addFunction="openCandidateAdditionForm"
            :deleteFunction="removeSelectedCandidates"
            @refresh="fetchMembers"
        />
    </div>

</template>