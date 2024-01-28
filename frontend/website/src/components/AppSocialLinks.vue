
<script setup>
    import { toRefs } from 'vue';
    import Button from 'primevue/button';

    const props = defineProps({
        website: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        }
    });

    const { website, facebook, twitter, instagram } = toRefs(props);

    const goToUrl = (url) => window.open(url, '_blank');

</script>
<template>
    <div class="flex justify-content-center">
        <Button icon="pi pi-link" text v-if="website" @click="goToUrl(website)"/>
        <Button icon="pi pi-facebook" text v-if="facebook" @click="goToUrl(facebook)"/>
        <Button icon="pi pi-twitter" text v-if="twitter" @click="goToUrl(twitter)"/>
        <Button icon="pi pi-instagram" text v-if="instagram" @click="goToUrl(instagram)"/>
    </div>


</template>