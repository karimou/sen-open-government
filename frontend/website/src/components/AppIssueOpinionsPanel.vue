
<script setup>
    import Panel from 'primevue/panel';
    import Avatar from 'primevue/avatar';
    import Divider from 'primevue/divider';
    import { toRefs } from 'vue';

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
        >
            {{ opinion.summary }}
            <Divider v-if="index != opinions.length - 1"/>
        </p>
    </Panel>
</template>