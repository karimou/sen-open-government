import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    
    const user = ref(null);

    const isAuthenticated = () => {
        return !!user.value;
    };

    const loadUser = () => {
        user.value = localStorage.getItem('user');
    };

    const storeUser = (userData) => {
        user.value = userData;
        localStorage.setItem('user', userData);
    };

    const removeUser = () => {
        user.value = null;
        localStorage.removeItem('user');
    }

    return { user, isAuthenticated, storeUser, loadUser, removeUser }
})