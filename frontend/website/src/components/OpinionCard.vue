
<script setup>
	import { computed, onMounted, toRefs } from 'vue';
	import Card from 'primevue/card';
    
    const props = defineProps({
        opinion: {
            type: Object,
        }
    });

    const { opinion } = toRefs(props);


</script>


<template>
    <Card
    >
        <template #content>
            {{ opinion.summary }}
        </template>
    </Card>
</template>