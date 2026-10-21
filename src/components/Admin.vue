<template>
    <Toast/>

    <div class="top-banner__content">
        <div class="top-banner__container">
            <div class="top-banner">
                <div class="banner-content">
                    <h2>Админ-панель</h2>
                    <p>Роль: <span>{{ authStore.role }}</span> | Пользователи, роли, прогресс и история мониторинга</p>
                </div>
                <div class="banner-actions">
                    <Button label="Операторы" icon="pi pi-users" text class="banner-btn" @click="router.push('/operators')" />
                    <Button label="Выйти" icon="pi pi-sign-out" severity="danger" outlined class="logout-btn" @click="handleLogout" />
                </div>
            </div>
        </div>
    </div>

    <div class="admin-panel">
        <div class="admin-panel__container">
            <div class="table-container mb-4">
                <Card>
                    <template #title>
                        <div class="table-header">
                            <h3>Список пользователей и мониторинг ролей</h3>
                            <div class="header-controls">
                                <span class="p-input-icon-left search-wrapper">
                                    <i class="pi pi-search" />
                                    <InputText v-model="searchQuery" placeholder="Поиск пользователя..." class="search-input" />
                                </span>
                                <Button label="Добавить роль" icon="pi pi-user-plus" class="create-btn" @click="isDialogVisible = true" />
                            </div>
                        </div>
                    </template>

                    <template #content>
                        <DataTable 
                            :value="filteredUsers" 
                            stripedRows 
                            responsiveLayout="scroll"
                            class="p-datatable-custom"
                        >
                            <template #empty>
                                <div class="empty-message-cell">
                                    По вашему поиску не найдено пользователей...
                                </div>
                            </template>
                            <Column field="name" header="Пользователь">
                                <template #body="slotProps">
                                    <div class="user-cell">
                                        <i class="pi pi-user user-avatar"></i>
                                        <span>{{ slotProps.data.name }}</span>
                                    </div>
                                </template>
                            </Column>
                            <Column field="email" header="Корп почта" class="text-center"></Column>
                            <Column field="role" header="Роль">
                                <template #body="slotProps">
                                    <Tag :value="slotProps.data.role.toUpperCase()"
                                        :severity="getRoleSeverity(slotProps.data.role)" />
                                </template>
                            </Column>
                            <Column field="status" header="Статус">
                                <template #body="slotProps">
                                    <span :class="['status-badge', slotProps.data.status]">
                                        {{ slotProps.data.status === 'active' ? 'Активен' : 'Не активен' }}
                                    </span>
                                </template>
                            </Column>
                            <!-- <Column field="email" header="Корп почта" class="text-center"></Column> -->
                            <Column field="onReview" header="На проверке" sortable class="text-center"></Column>
                            <Column field="completed" header="Завершено" sortable class="text-center"></Column>
                            <Column field="quality" header="Quality %" sortable>
                                <template #body="slotProps">
                                    <div class="quality-cell">
                                        <span class="quality-text">{{ slotProps.data.quality }}%</span>
                                        <div class="progress-bar-container">
                                            <div class="progress-bar" :style="{ width: slotProps.data.quality + '%' }">
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </Column>
                            <Column field="totalDone" header="Выполнено" sortable class="text-center"></Column>
                            <Column header="Действия" class="text-center">
                                <template #body="slotProps">
                                    <Button 
                                        v-if="slotProps.data.role !== 'admin'" 
                                        icon="pi pi-trash" 
                                        outlined 
                                        rounded 
                                        severity="danger" 
                                        @click="confirmDelete(slotProps.data)" 
                                    />
                                </template>
                            </Column>
                        </DataTable>
                    </template>
                </Card>
            </div>

            <Dialog 
                v-model:visible="isDialogVisible" 
                modal 
                header="Добавить новый роль" 
                :style="{ width: '490px' }"
                class="custom-dialog" 
                :draggable="false"
            >
                <form @submit.prevent="addUser" class="add-user-form">
                    <div class="form-grid">
                        <div class="field-group">
                            <label for="new-name" class="block mb-2 font-medium">Имя пользователя</label>
                            <InputText id="new-name" v-model="newUser.name" placeholder="Иван Иванов" fluid required />
                        </div>
                        <div class="field-group">
                            <label for="new-username" class="block mb-2 font-medium">Корп почта</label>
                            <InputText id="new-username" v-model="newUser.email" placeholder="example@bank.com" fluid required />
                        </div>
                        <div class="field-group">
                            <label for="new-password" class="block mb-2 font-medium">Пароль</label>
                            <Password id="new-password" v-model="newUser.password" placeholder="Введите пароль" :feedback="false" toggleMask fluid required />
                        </div>
                        <div class="field-group" :class="{ 'role-invalid': isRoleError }">
                            <label class="block mb-2 font-medium">Выберите роль</label>
                            <SelectButton v-model="newUser.role" :options="availableRoles" optionLabel="label" optionValue="value" fluid @change="isRoleError = false" />
                            <small v-if="isRoleError" class="error-text">Выберите роль</small>
                        </div>
                    </div>
                    <div class="form-actions">
                        <Button type="submit" label="Создать аккаунт" icon="pi pi-user-plus" class="create-btn" />
                    </div>
                </form>
            </Dialog>
            
            <Dialog 
                v-model:visible="isDeleteDialogVisible" 
                modal 
                header="Внимание!" 
                class="custom-dialog" 
                :style="{ width: '400px' }" 
                :draggable="false"
            >
                <p 
                    v-if="userToDelete"
                    style="text-align: left; font-size: 14px;"
                >
                    Вы действительно хотите удалить пользователя <strong>{{ userToDelete.name }}</strong>?
                </p>
                <template #footer>
                    <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
                        <Button label="Отмена" text severity="secondary" @click="isDeleteDialogVisible = false" />
                        <Button label="Да" severity="danger" @click="deleteUser" />
                    </div>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref, computed, onMounted } from 'vue';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import type { UserRow } from './interface';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const searchQuery = ref<string>('');
const isRoleError = ref<boolean>(false);
const isDialogVisible = ref<boolean>(false);

// Новые реактивные переменные для модалки удаления
const isDeleteDialogVisible = ref<boolean>(false);
const userToDelete = ref<UserRow | null>(null);

const users = ref<UserRow[]>([
    { id: 1, name: 'Жалол', role: 'admin', status: 'active', email: 'jalol@bank.com', onReview: 0, completed: 0, quality: 0, totalDone: 0 },
    { id: 2, name: 'Маркетинг', role: 'admin', status: 'active', email: 'marketing@bank.com', onReview: 0, completed: 0, quality: 0, totalDone: 0 },
    { id: 3, name: 'Сарвар', role: 'monitoring', status: 'active', email: 'sarvar@bank.com', onReview: 12, completed: 115, quality: 88, totalDone: 97 },
    { id: 4, name: 'Оля', role: 'b2b', status: 'active', email: 'olya@bank.com', onReview: 2, completed: 19, quality: 92, totalDone: 21 },
    { id: 5, name: 'Темур', role: 'b2c', status: 'active', email: 'temur@bank.com', onReview: 8, completed: 64, quality: 75, totalDone: 72 },
    { id: 6, name: 'Вильдан', role: 'monitoring', status: 'offline', email: 'vildan@bank.com', onReview: 0, completed: 83, quality: 91, totalDone: 83 },
    { id: 7, name: 'Дима', role: 'monitoring', status: 'active', email: 'dima@bank.com', onReview: 4, completed: 45, quality: 89, totalDone: 20 }
]);

const newUser = ref({ name: '', email: '', password: '', role: '' });

const availableRoles = ref([
    { label: 'Admin', value: 'admin' },
    { label: 'B2B', value: 'b2b' },
    { label: 'B2C', value: 'b2c' },
    { label: 'Monitoring', value: 'monitoring' }
]);

onMounted(() => {
    if (!authStore.role.length) router.push('/');
});

const filteredUsers = computed(() => {
    if (!searchQuery.value) return users.value;
    return users.value.filter(user =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const getRoleSeverity = (role: string) => {
    switch (role) {
        case 'admin': return 'danger';
        case 'monitoring': return 'info';
        case 'b2b': return 'success';
        case 'b2c': return 'warn';
        default: return 'secondary';
    }
};

const addUser = (): void => {
    if (!newUser.value.role) {
        isRoleError.value = true;
        return;
    }
    isRoleError.value = false;

    const userLogData = {
        name: newUser.value.name,
        email: newUser.value.email,
        password: newUser.value.password,
        role: newUser.value.role
    };

    // console.log(userLogData);

    const createdUser: UserRow = {
        id: users.value.length ? Math.max(...users.value.map(u => u.id)) + 1 : 1,
        name: newUser.value.name,
        role: newUser.value.role as 'admin' | 'b2b' | 'b2c' | 'monitoring',
        email: newUser.value.email,
        status: 'active',
        onReview: 0,
        completed: 0,
        quality: 0,
        totalDone: 0
    };

    users.value.push(createdUser);
    isDialogVisible.value = false;
    newUser.value = { name: '', email: '', password: '', role: '' };

    toast.add({ 
        severity: 'success', 
        summary: 'Успешно добавлен!', 
        detail: 'В списке пользователей мониторинга добавлено новый роль!', 
        life: 5000
    });
};

const confirmDelete = (data: UserRow): void => {
    userToDelete.value = data;
    isDeleteDialogVisible.value = true;
};

const deleteUser = (): void => {
    if (!userToDelete.value) return;

    users.value = users.value.filter(user => user.id !== userToDelete.value!.id);

    toast.add({ 
        severity: 'success', 
        summary: 'Успешно удалено!', 
        detail: `Пользователь ${userToDelete.value.name}`, 
        life: 5000 
    });
    
    isDeleteDialogVisible.value = false;
    userToDelete.value = null;
};

const handleLogout = (): void => {
    authStore.clearRole();
    router.push('/');
};
</script>

<style scoped>
@import "../assets/style/Admin.css";
</style>