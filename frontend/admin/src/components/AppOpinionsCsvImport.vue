
<script setup>

    import Steps from 'primevue/steps';
    import { onMounted, ref, inject } from 'vue';

    import AppOpinionsCsvImportStepFileParsing from '@/components/AppOpinionsCsvImportStepFileParsing.vue';

    const dialogRef = inject('dialogRef');


    const steps = ref([
        {label: 'Choisir un candidat'},
        {label: 'Charger le fichier'},
        {label: 'Vérifier vos données et uploader'}
    ]);

    const activeStep = ref(0);

    const personId = ref(null);
    const issueId = ref(null);

    const parsedLines = ref([]);

    onMounted(() => {
        personId.value = dialogRef.value.data?.personId;
        issueId.value = dialogRef.value.data?.issueId;
    });


    const next = () => {
        if (activeStep.value == 2) return;
        activeStep.value++;
    };

    const previous = () => {
        if (activeStep.value == 0) return;
        activeStep.value--;
    };

    const onParseComplete = (lines) => {
        console.log('onParseComplete', lines)
        parsedLines.value = lines;
        next();
    };

</script>

<template>
    <div style="width: 650px">
        <h5>Importer un CSV d'opinions</h5>

        <Steps
            :model="steps"
            v-model:activeStep="activeStep"
            :readonly="false"
        />
        <div v-if="activeStep == 1">
            
            <AppOpinionsCsvImportStepFileParsing 
                @complete="onParseComplete($event)"
            />

        </div>
        <div v-else-if="activeStep == 2">
            {{ parsedLines }}
        </div>

    </div>
</template>