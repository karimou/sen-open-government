
<script setup>
	import { computed, toRefs } from 'vue';
	import Card from 'primevue/card';
    
    const props = defineProps({
        candidate: {
            type: Object,
        }
    });

    const { candidate } = toRefs(props);

    const candidateName = computed(() => {
		if (!candidate.value) return;
		return `${ candidate.value.firstname } ${ candidate.value.lastname }`;
    });

</script>


<template>
    <Card
    >
        <template #header>
                <img :src="candidate.photo" 
                    style="max-width: 100%;"
                    :imageStyle="{maxWidth: '100%'}"
                />
        </template>
        <template #title>{{ candidateName }}</template>
        <template #subtitle> Card subtitle </template>
        <template #content>
            {{ candidate.description }}
        </template>
    </Card>
</template>