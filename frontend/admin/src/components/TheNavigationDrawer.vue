<script setup>
    import MegaMenu from 'primevue/megamenu';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { API } from '@/services';

    const logUserOut = () => {
        API.auth.logUserOut();
    };

    const menu = ref([
        {route: '/admin', label: 'Home'}
    ]);
</script>

<template>
    <button @click="logUserOut()">Logout</button>
    <MegaMenu :model="menu" orientation="vertical">
        <template #item="{ item }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </RouterLink>
            <a v-else v-ripple :href="item.url" :target="item.target">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
    </MegaMenu>

</template>