<script setup>
    import MegaMenu from 'primevue/megamenu';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { API } from '@/services';
    import TheNavigationDrawerMenuItem from '@/components/TheNavigationDrawerMenuItem.vue';

    const logUserOut = () => {
        API.auth.logUserOut();
    };

    const menu = ref([
        {
            label: 'Home', 
            items: [
                {label: 'Home', to: '/admin'}
            ]
        },
        {
            label: 'Data', items: [
                {to: '/admin/elections', label: 'Elections'},
                {to: '/admin/organisations', label: 'Organisations'},
                {to: '/admin/persons', label: 'Persons'},
                {to: '/admin/issues', label: 'Issues'},
                {to: '/admin/opinions', label: 'Opinions'}
            ]
        }
    ]);
</script>

<template>
    <button @click="logUserOut()">Logout</button>
    <ul class="layout-menu">
        <template v-for="(item, i) in menu" :key="item">
            <TheNavigationDrawerMenuItem v-if="!item.separator" :item="item" :index="i"></TheNavigationDrawerMenuItem>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>

</template>