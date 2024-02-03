<script setup>
    import { ref, computed } from 'vue';
    import Button from 'primevue/button';
    import Card from 'primevue/card';
    import Carousel from 'primevue/carousel';
    import { useElectionsStore } from '@/stores/elections';

    const electionsStore = useElectionsStore();

    const emit = defineEmits(['scroll']);

    const scrollToAuthor = (candidateId, event) => {
        emit('scroll', candidateId);
        if (event) event.target.blur();
    };

    const numCandidates = computed(() => electionsStore.currentElection.candidates?.length || 0);

    const responsiveOptions = ref([
        {
            breakpoint: '600px',
            numVisible: Math.min(3, numCandidates),
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: Math.min(4, numCandidates),
            numScroll: 2
        },
        {
            breakpoint: '992px',
            numVisible: Math.min(5, numCandidates),
            numScroll: 3
        },
    ]);

</script>
<template>
    
    <Carousel
        :value="electionsStore.currentElection.candidates"
        :numVisible="Math.min(2, numCandidates)"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplay-interval="2000"
    >
        <template #item="{ data }">
            <div 
                v-ripple
                style="max-width: 15rem;"
                class="cursor-pointer border-1 surface-border border-round m-2  p-3" 
                @click="scrollToAuthor(data.id)"
            >
                <div class="mb-3">
                    <div class="relative mx-auto">
                        <img 
                            :src="data.photo || 'https://placehold.co/150'"
                            class="w-full border-round" 
                        />
                        <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/> -->
                    </div>
                </div>
                <div class="mb-3 font-medium">{{ electionsStore.getCandidateName(data.id) }}</div>
            </div>
        </template>
    </Carousel>

    <!-- <Button 
        v-for="candidate in electionsStore.currentElection.candidates"
        class="mx-2" 
        text
        size="small"
        severity="primary"
        @click="scrollToAuthor(candidate.id, $event)"
    >
        <Avatar 
            :image="candidate.photo"
            shape="circle"
            class="mr-1"
        />
        <span class="p-button-label">{{ electionsStore.getCandidateName(candidate.id) }}</span>
    </Button> -->


</template>