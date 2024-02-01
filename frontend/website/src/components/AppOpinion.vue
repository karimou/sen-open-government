
<script setup>

    import { toRefs, ref } from 'vue';
    import Sidebar from 'primevue/sidebar';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';

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

    const opinionContent = ref('opinionContentopinionContentopinionContentopinionContent');
    const isContentVisible = ref(false);
    const displayContent = () => {
        isContentVisible.value = true;
    };

    const areProposalsVisible = ref(false);
    const opinionProposals = ref('opinionProposalsopinionProposalsopinionProposalsopinionProposals');
    const displayProposals = () => {
        areProposalsVisible.value = true;
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
        class="w-full md:w-30rem lg:w-40rem"
        position="left"
    >
        <p style="white-space: pre-wrap;" v-html="opinionContent"/>
    </Sidebar>
    <Sidebar 
        v-model:visible="areProposalsVisible" 
        header="Propositions"
        class="w-full md:w-30rem lg:w-40rem"
        position="right"
    >
        <p style="white-space: pre-wrap;" v-html="opinionProposals"/>
    </Sidebar>
</template>