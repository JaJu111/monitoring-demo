<template>
    <div class="login-page">
        <div class="top-banner">
            <div class="banner-content">
                <i class="pi pi-shield banner-icon"></i>
                <h1>Панель управления Мониторинга</h1>
                <p>Пожалуйста, введите данные и выберите роль для продолжения работы</p>
            </div>
        </div>

        <div class="login-form-container">
            <Card class="login-card">
                <template #title>
                    <span class="card-title">Авторизация</span>
                </template>

                <template #content>
                    <form @submit.prevent="handleLogin" class="form-layout">
                        <div class="field login-field">
                            <label for="email" class="block mb-2 font-medium">Корп почта</label>
                            <InputText id="email" v-model="email" placeholder="example@bank.com" fluid required />
                        </div>

                        <div class="field password-field">
                            <label for="password" class="block mb-2 font-medium">Пароль</label>
                            <Password id="password" v-model="password" placeholder="Введите пароль" :feedback="false" toggleMask fluid required />
                        </div>

                        <div class="field roles-field" :class="{ 'role-invalid': isRoleError }">
                            <label class="block mb-2 font-medium">Выберите роль</label>
                            <SelectButton 
                                v-model="selectedRole" 
                                :options="roles" 
                                optionLabel="label"
                                optionValue="value" 
                                aria-labelledby="basic" 
                                :unselectable="false" 
                                fluid 
                                @change="isRoleError = false"
                            >
                                <template #option="slotProps">
                                    <div class="role-option">
                                        <i :class="slotProps.option.icon"></i>
                                        <span>{{ slotProps.option.label }}</span>
                                    </div>
                                </template>
                            </SelectButton>

                            <small v-if="isRoleError" class="error-text">Пожалуйста, выберите роль для входа</small>
                        </div>

                        <Button 
                            type="submit" 
                            label="Войти" 
                            :disabled="!email.length || !password.length || !selectedRole" 
                            icon="pi pi-sign-in" 
                            class="submit-btn" fluid 
                        />
                    </form>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { useAuthStore } from '@/stores/auth';
import type { RoleOption } from './interface';

const router = useRouter();
const authStore = useAuthStore();

const email = ref<string>('');
const password = ref<string>('');
const selectedRole = ref<string>('');
const isRoleError = ref<boolean>(false);

const roles = ref<RoleOption[]>([
    { label: 'Admin', value: 'admin', icon: 'pi pi-user-edit' },
    { label: 'B2B', value: 'b2b', icon: 'pi pi-briefcase' },
    { label: 'B2C', value: 'b2c', icon: 'pi pi-users' },
    { label: 'Monitoring', value: 'monitoring', icon: 'pi pi-chart-line' }
]);

const routeMap: Record<string, string> = {
    admin: '/admin',
    b2b: '/deputy',
    b2c: '/deputy',
    monitoring: '/history'
};

const handleLogin = async (): Promise<void> => {
    const role = selectedRole.value;
    
    if (!role) {
        isRoleError.value = true;
        return;
    }

    isRoleError.value = false;

    const user = {
        email: email.value,
        password: password.value,
        role: selectedRole.value
    }
    
    // console.log(user);

    try {
        const targetRoute = routeMap[role];
        
        if (targetRoute) {
            router.push(targetRoute);
            authStore.setRole(role);
        } else {
            console.error(`Неизвестная роль: ${role}`);
        }
    } catch (error) {
        console.error('Ошибка авторизации:', error);
    }
};
</script>

<style scoped>
@import "../assets/style/Login.css";
</style>
