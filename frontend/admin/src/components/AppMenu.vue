<script setup>
    import { ref } from 'vue';
    import AppMenuItem from '@/components/AppMenuItem.vue';

    const menu = ref([
        {
            label: 'Accueil', 
            items: [
                {label: 'Accueil', to: '/admin'}
            ]
        },
        {
            label: 'Données du site', items: [
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
    <ul class="layout-menu">
        <template v-for="(item, i) in menu" :key="item">
            <AppMenuItem v-if="!item.separator" :item="item" :index="i"></AppMenuItem>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>

</template>