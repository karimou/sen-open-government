
<script setup>

    import { toRefs, ref } from 'vue';
    import Sidebar from 'primevue/sidebar';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';
    import ProgressSpinner from 'primevue/progressspinner';
    import { API } from '@/services/api';
    import Card from 'primevue/card';

    import { useElectionsStore } from '@/stores/elections';

    const electionsStore = useElectionsStore();

    const props = defineProps({
        opinion: {
            type: Object
        },
        includeDivider: {
            type: Boolean,
            default: true
        }
    });

    const { opinion, includeDivider } = toRefs(props);

    const opinionContent = ref(null);
    const opinionProposals = ref(null);
    const isDataLoaded = ref(false);
    const loading = ref(false);
    const fetchOpinionData = () => {
        loading.value = true;
        API.opinions.getOpinion(opinion.value.id)
            .then((data) => {
                isDataLoaded.value = true;
                opinionContent.value = data.content;
                opinionProposals.value = data.proposals || [];
                loading.value = false;
            })
    };

    const isContentVisible = ref(false);
    const displayContent = () => {
        isContentVisible.value = true;
        if (!isDataLoaded.value) fetchOpinionData();
    };

    const areProposalsVisible = ref(false);
    const displayProposals = () => {
        areProposalsVisible.value = true;
        if (!isDataLoaded.value) fetchOpinionData();
    };

    const shareWhatsapp = (proposal) => {
        let candidateName = electionsStore.getCandidateName(opinion.value?.author_id);
        let currentUrl = window.location.href;
        window.location.href = `whatsapp://send?text=Je vous partage cette proprosition du candidat ${ candidateName }:%0A"${ encodeURIComponent(proposal.content) }"%0A%0A${encodeURIComponent(currentUrl)}`;
    }

</script>

<template>
    <p
        class="m-0"
        style="white-space: pre-wrap;"
    >
        {{ opinion.summary }}
        <div class="flex justify-content-between mt-2">
            <div v-if="opinion.has_content">
                <Button text label="En savoir plus" @click="displayContent()" />
            </div>
            <div v-if="opinion.num_proposals > 0" >
                <Button outlined label="Propositions" @click="displayProposals()" severity="success" :badge="opinion.num_proposals" badgeSeverity="success"/>
            </div>
        </div>
        <Divider v-if="includeDivider"/>
    </p>
    <Sidebar 
        v-model:visible="isContentVisible" 
        header="En savoir plus"
        class="w-11 md:w-8 lg:w-5"
        position="left"
    >
        <ProgressSpinner 
            v-if="loading"
            style="width: 50px; height: 50px" 
            strokeWidth="8" 
        />
        <p v-else style="white-space: pre-wrap;" v-html="opinionContent"/>
    </Sidebar>
    <Sidebar 
        v-model:visible="areProposalsVisible" 
        class="w-11 md:w-8 lg:w-5"
        position="right"
    >
        <ProgressSpinner 
            v-if="loading"
            style="width: 50px; height: 50px" 
            strokeWidth="3" 
        />
        <div v-else>
            <Card v-for="proposal in opinionProposals" class="mb-2">
                <template #title>Proposition #{{ proposal.number }}</template>
                <template #content>
                    <Divider />
                    <p class="m-0" style="white-space: pre-wrap;" v-html="proposal.content"/>
                </template>
                <template #footer>
                    <div class="flex mt-1 justify-content-end">
                        <Button outlined icon="pi pi-whatsapp" severity="success" @click="shareWhatsapp(proposal)"/>
                    </div>
                </template>
            </Card>
        </div>
    </Sidebar>
</template>