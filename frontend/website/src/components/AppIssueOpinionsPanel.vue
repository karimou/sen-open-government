
<script setup>
    import Panel from 'primevue/panel';
    import Avatar from 'primevue/avatar';
    import Divider from 'primevue/divider';
    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import { toRefs, ref } from 'vue';

    import { useElectionsStore } from '@/stores/elections';
    const electionsStore = useElectionsStore();

    const props = defineProps({
        issueId: {
            type: Number
        },
        opinions: {
            type: Object,
            default: []
        },
        collapsed: {
            type: Boolean,
            default: true
        }
    });

    const { opinions, issueId, collapsed } = toRefs(props);

    const selectedOpinionVisible = ref(false);
    const selectedOpinionContent = ref(null);
    const displayOpinionContent = (opinion) => {
        selectedOpinionVisible.value = true;
        selectedOpinionContent.value = opinion.content;
    };

</script>

<template>
    <Panel 
        :collapsed="collapsed"
        toggleable class="w-full my-2"
    >
        <template #header>
            <div class="flex align-items-center gap-2">
                <Avatar 
                    :image="electionsStore.getIssueImage(issueId)" 
                    size="large" 
                    shape="rectangle" 
                />
                <span class="font-bold">{{ electionsStore.getIssueTitle(issueId) }}</span>
            </div>
        </template>
        <p
            class="m-0"
            v-for="(opinion, index) in opinions"
            style="white-space: pre-wrap;"
        >
            {{ opinion.summary }}
            <div v-if="opinion.content" class="flex justify-content-end">
                <Button text label="En savoir plus" @click="displayOpinionContent(opinion)" />
            </div>
            <Divider v-if="index != opinions.length - 1"/>
        </p>
    </Panel>
    <Sidebar 
        v-model:visible="selectedOpinionVisible" 
        header="En savoir plus"
        class="w-full md:w-20rem lg:w-30rem"
        position="right"
    >
        <p style="white-space: pre-wrap;" v-html="selectedOpinionContent"/>
    </Sidebar>
</template>