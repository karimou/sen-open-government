
<script setup>

    import { toRefs } from 'vue';

    /* -----------
    Props init
    ----------- */
    const props = defineProps({
        proposals: Array,
        loading: {
            type: Boolean,
            default: false
        }
    });

    const { proposals, loading } = toRefs(props);
</script>

<template>
    BaseProposalsTable
</template>