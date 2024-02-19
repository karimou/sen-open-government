
<script setup>
    import Panel from 'primevue/panel';
    import Avatar from 'primevue/avatar';
    import Badge from 'primevue/badge';
    import { toRefs, computed, onMounted, ref } from 'vue';

    import { useElectionsStore } from '@/stores/elections';
    import AppOpinion from '@/components/AppOpinion.vue';
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

    const opinionsTotalProposals = computed(() => {
        return opinions.value?.map(opinion => Number(opinion.num_proposals))
            .filter(num => !!num)
            .reduce((result, x) => result + x, 0)
    });


    const isPanelCollapsed = ref(false);
    onMounted(() => {
        isPanelCollapsed.value = collapsed.value;
    });
    const togglePanel = () => isPanelCollapsed.value = !isPanelCollapsed.value;

</script>

<template>
    <Panel 
        :collapsed="isPanelCollapsed"
        toggleable class="w-full my-2"
    >
        <template #header>
            <div class="flex align-items-center gap-2 cursor-pointer" @click="togglePanel()">
                <Avatar 
                    :image="electionsStore.getIssueImage(issueId)" 
                    size="large" 
                    shape="rectangle" 
                />
                <span class="font-bold">{{ electionsStore.getIssueTitle(issueId) }}</span>
                <Badge :value="opinionsTotalProposals" severity="success"></Badge>
            </div>
        </template>
        <AppOpinion
            v-for="(opinion, index) in opinions"
            :opinion="opinion"
            :includeDivider="index != opinions.length - 1"
        />
    </Panel>
</template>