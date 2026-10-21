import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const role = ref<string>(sessionStorage.getItem('user_role') || '');

    const setRole = (newRole: string) => {
        role.value = newRole;
        sessionStorage.setItem('user_role', newRole);
    }

    const clearRole = () => {
        role.value = '';
        sessionStorage.removeItem('user_role');
    }

    return { role, setRole, clearRole };
});