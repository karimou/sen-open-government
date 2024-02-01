
<script setup>

    import { toRefs, ref } from 'vue';
    import Sidebar from 'primevue/sidebar';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';
    import ProgressSpinner from 'primevue/progressspinner';
    import { API } from '@/services/api';
    import Card from 'primevue/card';

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


</script>

<template>
    <p
        class="m-0"
        style="white-space: pre-wrap;"
    >
        {{ opinion.summary }}
        <div class="flex justify-content-between">
            <div v-if="opinion.has_content">
                <Button text label="En savoir plus" @click="displayContent()" />
            </div>
            <div v-if="opinion.num_proposals > 0" >
                <Button text label="Propositions" @click="displayProposals()" severity="success" :badge="opinion.num_proposals" badgeSeverity="success"/>
            </div>
        </div>
        <Divider v-if="includeDivider"/>
    </p>
    <Sidebar 
        v-model:visible="isContentVisible" 
        header="En savoir plus"
        class="w-full md:w-8 lg:w-5"
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
        class="w-full md:w-8 lg:w-5"
        position="right"
    >
        <ProgressSpinner 
            v-if="loading"
            style="width: 50px; height: 50px" 
            strokeWidth="8" 
        />
        <div v-else>
            <Card v-for="proposal in opinionProposals">
                <template #title>Proposition #{{ proposal.number }}</template>
                <template #content>
                    <p class="m-0" style="white-space: pre-wrap;" v-html="proposal.content"/>
                </template>
            </Card>
        </div>
    </Sidebar>
</template>