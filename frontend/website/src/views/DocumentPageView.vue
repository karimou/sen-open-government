
<script setup>
    import { RouterLink } from 'vue-router';

    import { useDocumentPagesStore } from '@/stores/documentpages';
    import { ref, onMounted } from 'vue';

    import logoDs from '@/assets/logo-DS.png';

    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import ScrollTop from 'primevue/scrolltop';

    /* -----------
    Data init
    ----------- */
    const documentPagesStore = useDocumentPagesStore();
    const isSidebarActive = ref(false);
    const isRootPage = ref(false);
    const zoomedContent = ref({});

    onMounted(() => {
        document.title = documentPagesStore.currentDocumentPage?.title;
        isRootPage.value = !!documentPagesStore.currentDocumentPage?.parent_id;
        
    });

    const zoomContent = (page) => {
        zoomedContent.value = page;
        isSidebarActive.value = true;
    };




</script>
<template>
    <nav class="flex align-items-center justify-content-center">
        <div class="logo" style="position: absolute; left: 10px">
            <!-- Logo Placeholder for Illustration -->
            <a href="https://www.demainsenegal.sn/" target="_blank"><img :src="logoDs"></a>
        </div>
        <RouterLink custom v-slot="{ href, navigate }" :to="`/document/${ documentPagesStore.currentDocumentPage.id }`">
            <a v-ripple :href="href" @click="navigate" class="title">
                {{ documentPagesStore.currentDocumentPage.title }}
            </a>
        </RouterLink>
    </nav>
    <main >
        <section>
            <div class="col-10 md:col-6 mx-auto text-center">
                <p style="white-space: pre-wrap;">{{ documentPagesStore.currentDocumentPage?.summary }}</p>
            </div>
        </section>
        <section v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children">
            <div class="col-10 md:col-6 mx-auto">
                <div class="title">{{ childPage.title }}</div>
                <p style="white-space: pre-wrap;">{{ childPage.summary }}</p>
                <Button :disabled="!childPage.content" label="En savoir plus" @click="zoomContent(childPage)" />
            </div>
        </section>
    </main>
    <Sidebar 
        v-model:visible="isSidebarActive" 
        :header="zoomedContent.title"
        class="w-11 md:w-8"
        position="right"
    >
        <p style="white-space: pre-wrap;" v-html="zoomedContent.content"/>
    </Sidebar>
	<ScrollTop />
</template>

<style scoped>
    section .title {
        font-size: 50px;
    }
</style>
