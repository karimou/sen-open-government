<script setup>
    import { ref } from 'vue';
    import AppMenuItem from '@/components/AppMenuItem.vue';

    const menu = ref([
        {
            label: 'Données du site', 
            icon: 'pi pi-database',
            items: [
                {to: '/admin/elections', icon: 'pi pi-envelope', label: 'Élections'},
                {to: '/admin/organisations', icon: 'pi pi-building', label: 'Organisations'},
                {to: '/admin/persons', icon: 'pi pi-users', label: 'Personnes'},
                {to: '/admin/issues', icon: 'pi pi-question-circle', label: 'Thèmes'},
                {to: '/admin/opinions', icon: 'pi pi-megaphone', label: 'Opinions'}
            ]
        },
        {
            label: 'Administration', 
            icon: 'pi pi-cog',
            items: [
                {to: '/admin/users', icon: 'pi pi-users', label: 'Utilisateurs'}
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