
<script setup>

    import Steps from 'primevue/steps';
    import Dropdown from 'primevue/dropdown';

    import { onMounted, ref, inject } from 'vue';

    import AppOpinionsCsvImportStepFileParsing from '@/components/AppOpinionsCsvImportStepFileParsing.vue';
    import AppOpinionsCsvImportStepDataUpload from './AppOpinionsCsvImportStepDataUpload.vue';
    import { usePersonsStore } from '@/stores/persons';

    const dialogRef = inject('dialogRef');

    const personsStore = usePersonsStore();


    const steps = ref([
        {label: 'Choisir un candidat'},
        {label: 'Charger le fichier'},
        {label: 'Vérifier vos données et uploader'}
    ]);

    const activeStep = ref(0);

    const personId = ref(null);

    const parsedLines = ref([]);

    onMounted(() => {
        personId.value = dialogRef.value.data?.personId;
        if (!personsStore.persons) personsStore.refreshPersons();
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
    <div style="width: 850px">
        <h5>Importer un CSV d'opinions</h5>

        <Steps
            :model="steps"
            v-model:activeStep="activeStep"
            :readonly="false"
        />
        <div >
            <div 
                class="field md:col-6"
                v-if="activeStep == 0"
            >
                <Dropdown
                    v-model="personId"
                    :options="personsStore.persons"
                    optionLabel="firstname"
                    optionValue="id"
                    placeholder="Choisir une personne"
                    class="w-full"
                    filter
                >
                    <template #value="slotProps">
                        <span v-if="slotProps.value">
                            {{ personsStore.personsNames[slotProps.value] }}
                        </span>
                        <span v-else>
                            {{  slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <span v-if="slotProps.option">
                            {{ slotProps.option.firstname }} {{ slotProps.option.lastname }}
                        </span>
                        <span v-else>
                            {{  slotProps.placeholder }}
                        </span>
                    </template>
                </Dropdown>
            </div>
            <AppOpinionsCsvImportStepFileParsing 
                v-else-if="activeStep == 1"
                @complete="onParseComplete($event)"
            />
            <AppOpinionsCsvImportStepDataUpload
                v-else-if="activeStep == 2"
                :parsedLines="parsedLines"
                :authorId="personId"
            />

        </div>
    </div>
</template>