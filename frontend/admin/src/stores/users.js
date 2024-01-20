import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useUsersStore = defineStore('users', () => {

    const users = ref(null);

    const refreshUsers = async () => {

        return API.users.listUsers()
            .then(data => users.value = data);
    };

    return { users, refreshUsers };
})
