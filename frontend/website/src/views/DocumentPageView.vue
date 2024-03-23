
<script setup>
    import { RouterLink } from 'vue-router';

    import { useDocumentPagesStore } from '@/stores/documentpages';
    import { ref, onMounted, watch, computed, reactive } from 'vue';

    import logoDs from '@/assets/logo-DS.png';

    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import ScrollTop from 'primevue/scrolltop';
    import Image from 'primevue/image';
    import Card from 'primevue/card';

    import AppFooter from '@/components/AppFooter.vue';
    import { vScroll } from '@vueuse/components'
    
    /* -----------
    Data init
    ----------- */
    const documentPagesStore = useDocumentPagesStore();

    onMounted(() => {
        document.title = documentPagesStore.currentDocumentPage?.title;
    });

    const isSidebarActive = ref(false);
    const zoomedSection = ref({});
    const zoomSection = (page) => {
        zoomedSection.value = page;
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
    const introRef = ref(null);
    watch(scrollToPageId, () => {
        if (!scrollToPageId.value) {
            introRef.value?.scrollIntoView({ behavior: 'smooth' })
        } else {
            sectionRefs.value[scrollToPageId.value]?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    /* -----------
    Zoomed section cover - Config & Parallax
    ----------- */
    const zoomedSectionSidebar = ref(null);
    const parallaxY = ref(0);
    const onZoomedSectionSidebarScroll = ({ y }) => {
        parallaxY.value = y.value;
    }

    const backgroundImageStyle = computed(() => ({
        objectFit: 'cover', 
        height: '300px', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `50% calc(50% - ${ Math.min(Number(parallaxY.value / 2), 150) }px)`
    }));



</script>
<template>
    <nav class="flex align-items-center justify-content-center gap-10 md:gap-0">
        <div class="md:w-1 ml-2">
            <a href="https://www.demainsenegal.sn/" target="_blank">
                <img :src="logoDs" class="w-11 h-11" style="max-height: 60px;">
            </a>
        </div>
        <div class="hidden md:flex overflow-scroll w-11 h-full align-items-center">
            <div
                class="flex align-items-center justify-content-center uppercase text-center px-4"
                style="height: 100%; text-wrap: nowrap; color: #777"
            >
                <a v-ripple @click="scrollToPage()" class="cursor-pointer">Résumé</a>
            </div>
            <div
                class="flex align-items-center justify-content-center uppercase border-left-1 text-center px-4 hover:border-bottom-4"
                style="height: 50%; text-wrap: nowrap; color: #777"
                v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children" 

            >
                <a v-ripple @click="scrollToPage(childPage.id)" class="cursor-pointer">{{ childPage.title }}</a>
            </div>
        </div>
        <div class="w-1 ml-auto mr-2 md:hidden">
            <Button size="large" text icon="pi pi-bars" @click="displayTableOfContents()"/>
        </div>
    </nav>
    <main style="max-width: 1090px;">
        <section>
            <div class="col-11 md:col-8 mx-auto text-center">
                <div class="text-6xl" :ref="(el) => introRef = el">{{ documentPagesStore.currentDocumentPage.title }}</div>
                <p style="white-space: pre-wrap;">{{ documentPagesStore.currentDocumentPage?.summary }}</p>
                <Button 
                    text 
                    v-if="documentPagesStore.currentDocumentPage?.content" 
                    label="En savoir plus" 
                    @click="zoomSection(documentPagesStore.currentDocumentPage)" 
                />
            </div>
        </section>
        <section 
            v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children"
            :style="{ backgroundColor: (index % 2 == 0) ? '#f2f2f5' : '#fff' }"
            class="py-2"
            
        >
            <div class="col-11 md:col-8 lg-col-7 mx-auto" >
                <div 
                    class="text-5xl text-center" 
                    :ref="(el) => sectionRefs[childPage?.id] = el"
                >{{ childPage.title }}</div>

                <div class="flex grid align-items-center" :class="{'flex-row-reverse': index % 2 == 0 }">
                    <div 
                        class="md:col-6"
                        v-if="childPage?.cover_image_url"
                    >
                        <Image 
                            :src="childPage?.cover_image_url" 
                            alt="Image" 
                            imageClass="w-full border-round"
                        />
                    </div> 

                    <div 
                        :class="{'md:col-6': childPage?.cover_image_url, 'text-right': index % 2 == 0, 'text-left': index % 1 == 0 }"
                    >

                        <p style="white-space: pre-wrap;">{{ childPage?.summary }}</p>
                        <Button 
                            text 
                            label="En savoir plus" 
                            @click="zoomSection(childPage)" 
                        />
                        <!-- v-if="childPage?.content" -->
                    </div>
                </div>
            </div>
        </section>
        <AppFooter />
    </main>
    <Sidebar 
        v-model:visible="isSidebarActive" 
        :header="zoomedSection?.title"
        class="md:w-8 w-full px-0"
    >
        <template #container="{ closeCallback }">
            <div >
                <Button 
                    style="position: absolute; right: 20px; top: 10px"
                    @click="closeCallback" 
                    icon="pi pi-times" 
                    class="h-2rem w-2rem " 
                    severity="danger" rounded
                />
            </div>
            <div 
                ref="zoomedSectionSidebar"
                style="overflow: auto;"
                v-scroll="onZoomedSectionSidebarScroll"
            >
            
                <div 
                    v-if="zoomedSection?.cover_image_url"
                    alt="Image" 
                    class="w-full"
                    :style="{...backgroundImageStyle, backgroundImage: `url(${ zoomedSection?.cover_image_url })` }"
                />
                <div class="px-4 mx-auto" style="max-width: 790px;" >
                    <h2>{{ zoomedSection?.title }}</h2>
                    <hr/>
                    <p style="white-space: pre-wrap;" v-html="zoomedSection?.content"/>
                </div>
            </div>
        </template>

    </Sidebar>
    <Sidebar 
        v-model:visible="isTableOfContentsSidebarActive" 
        class="w-11 md:hidden"
        position="left"
    >
        <div class="grid">
            <div 
                class="sm:col-6"
                v-for="(childPage, index) in  documentPagesStore.currentDocumentPage?.children" 
            >
                <Card
                    v-ripple 
                    class="cursor-pointer my-2"
                    @click="scrollToPage(childPage.id); isTableOfContentsSidebarActive = false;"
                >
                    <template #header>
                        <Image 
                            v-if="childPage?.cover_image_url"
                            :src="childPage?.cover_image_url" 
                            alt="Image" 
                            imageClass="w-full border-round"
                        />
                    </template>
                    <template #title>{{ childPage.title }}</template>
                </Card>
            </div>
        </div>
    </Sidebar>
	<ScrollTop />
</template>
