
<script setup>
    import { RouterLink } from 'vue-router';

    import { useDocumentPagesStore } from '@/stores/documentpages';
    import { ref, onMounted, watch } from 'vue';

    import logoDs from '@/assets/logo-DS.png';

    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import ScrollTop from 'primevue/scrolltop';

    /* -----------
    Data init
    ----------- */
    const documentPagesStore = useDocumentPagesStore();

    onMounted(() => {
        document.title = documentPagesStore.currentDocumentPage?.title;
        
    });

    const isSidebarActive = ref(false);
    const zoomedContent = ref({});
    const zoomContent = (page) => {
        zoomedContent.value = page;
        isSidebarActive.value = true;
    };

    /* -----------
    Content sidebar
    ----------- */
    const isTableOfContentsSidebarActive = ref(false);
    const displayTableOfContents = () => {
        isTableOfContentsSidebarActive.value = true;

    }

    /* -----------
    Scroll to section
    ----------- */

	const scrollToPageId = ref(null);

    const scrollToPage = (pageId) => {
        scrollToPageId.value = pageId;
    };
    const sectionRefs = ref({});
    watch(scrollToPageId, () => {
        if (!scrollToPageId.value) return;
        sectionRefs.value[scrollToPageId.value]?.scrollIntoView({ behavior: 'smooth' });
    });


</script>
<template>
    <nav class="flex align-items-center justify-content-center gap-10 md:gap-0">
        <div class="md:w-1 ml-2">
            <!-- Logo Placeholder for Illustration -->
            <a href="https://www.demainsenegal.sn/" target="_blank">
                <img :src="logoDs" class="w-11 h-11" style="max-height: 70px;">
            </a>
        </div>
        <div class="hidden md:flex overflow-scroll w-11 h-full">
            <div
                class="flex align-items-center justify-content-center uppercase text-center px-4"
                style="height: 100%; text-wrap: nowrap;"
            >
                <a v-ripple @click="scrollToPage()" class="cursor-pointer">Introduction</a>
            </div>
            <div
                class="flex align-items-center justify-content-center uppercase border-left-1 text-center px-4 hover:border-bottom-4"
                style="height: 100%; text-wrap: nowrap;"
                v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children" 
            >
                <a v-ripple @click="scrollToPage(childPage.id)" class="cursor-pointer">{{ childPage.title }}</a>
            </div>
        </div>
        <div class="w-1 ml-auto mr-2 md:hidden">
            <Button size="large" text icon="pi pi-bars" @click="displayTableOfContents()"/>
        </div>
    </nav>
    <main >
        <section>
            <div class="col-10 md:col-6 mx-auto">
                <div class="text-6xl">{{ documentPagesStore.currentDocumentPage.title }}</div>
                <p style="white-space: pre-wrap;">{{ documentPagesStore.currentDocumentPage?.summary }}</p>
            </div>
        </section>
        <section 
            v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children"
            
        >
            <div class="col-10 md:col-6 mx-auto" :ref="(el) => sectionRefs[childPage.id] = el">
                <div class="text-5xl">{{ childPage.title }}</div>
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
    <Sidebar 
        v-model:visible="isTableOfContentsSidebarActive" 
        header="Contenu"
        class="w-11 md:hidden"
        position="right"
    >
            <div
                class="uppercase my-4 text-1-xl"
            >
                <a v-ripple @click="scrollToPage(); isTableOfContentsSidebarActive = false;" class="cursor-pointer">Introduction</a>
            </div>
            <div
                class="uppercase my-4 text-1-xl"
                v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children" 
            >
                <a v-ripple @click="scrollToPage(childPage.id); isTableOfContentsSidebarActive = false;" class="cursor-pointer">{{ childPage.title }}</a>
            </div>
    </Sidebar>
	<ScrollTop />
</template>
