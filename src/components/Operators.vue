<template>
    <Toast />

    <div class="top-banner__content">
        <div class="top-banner__container">
            <div class="top-banner">
                <div class="banner-content">
                    <h2>Операторы</h2>
                    <p>Статистика качества по сотрудникам Контакт-центра</p>
                </div>

                <div class="banner-actions">
                    <Button 
                        label="Админ-панель" 
                        icon="pi pi-user-edit" 
                        text class="banner-btn" 
                        @click="router.push('/admin')" 
                    />

                    <Button 
                        label="Выйти" 
                        icon="pi pi-sign-out" 
                        severity="danger" 
                        outlined 
                        class="logout-btn" 
                        @click="handleLogout" 
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="top-banner__container">
        <div class="summary-section">
            <div class="summary-header">
                <div class="summary-header__controls">
                    <div>
                        <h3>Сводка по операторам</h3>
                        <p class="summary-subtitle">B2C — оценки Monitoring. B2B — оценки Monitoring.</p>
                    </div>
                    
                    <div class="summary-header__controls-right">
                        <DatePicker 
                            ref="datepickerRef"
                            v-model="selectedPeriod" 
                            selectionMode="range" 
                            :manualInput="false"
                            :minDate="minSelectableDate"
                            :maxDate="maxSelectableDate"
                            placeholder="Выбрать период" 
                            dateFormat="dd.mm.yy"
                            showIcon
                            iconDisplay="input"
                            @date-select="handleDateSelect"
                        />

                        <Select 
                            v-model="selectedRole" 
                            :options="roleOptions" 
                            optionLabel="label" 
                            optionValue="value" 
                            placeholder="Все направления" 
                            class="w-full md:w-56" 
                        />

                        <Button 
                            label="Обновить" 
                            icon="pi pi-refresh" 
                            severity="secondary" 
                            @click="refreshData" 
                        />
                    </div>
                </div>

                <div class="summary-cards">
                    <div class="summary-card">
                        <span class="card-title">Операторов</span>
                        <span class="card-value">{{ totalOperators }}</span>
                    </div>
                    <div class="summary-card">
                        <span class="card-title">Завершено проверок</span>
                        <span class="card-value">{{ totalCompleted }}</span>
                    </div>
                    <div class="summary-card">
                        <span class="card-title">Средний Quality</span>
                        <span class="card-value">{{ avgQuality }}%</span>
                    </div>
                    <div class="summary-card">
                        <span class="card-title">Среднее прослушивание B2C</span>
                        <span class="card-value">{{ b2cAvgDone }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="stats-info">
        <div class="top-banner__container">
            <div class="stats-section">
                <div class="stats-header">
                    <h3>Статистика операторов</h3>
                    <p class="stats-subtitle">Показатели обновляются из текущей SQLite DEMO-базы</p>
                </div>

                <DataTable 
                    :value="users" 
                    stripedRows 
                    responsiveLayout="scroll" 
                    class="p-datatable-custom mt-3"
                >
                    <template #empty>
                        <div class="p-3 text-center text-muted">
                            По вашему вопросу нет ни одного человека
                        </div>
                    </template>

                    <Column field="name" header="Оператор">
                        <template #body="slotProps">
                            <div class="user-cell">
                                <i class="pi pi-user user-avatar"></i>
                                <span>{{ slotProps.data.name }}</span>
                            </div>
                        </template>
                    </Column>

                    <Column field="role" header="Направление">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.role.toUpperCase()"
                                :severity="getRoleSeverity(slotProps.data.role)" />
                        </template>
                    </Column>

                    <Column field="completed" header="Проверено" sortable class="text-center"></Column>

                    <Column field="totalDone" header="Выполнено" sortable class="text-center"></Column>

                    <Column field="quality" header="Quality %" sortable>
                        <template #body="slotProps">
                            <div class="quality-cell">
                                <span class="quality-text">{{ slotProps.data.quality }}%</span>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" :style="{ width: slotProps.data.quality + '%' }"></div>
                                </div>
                            </div>
                        </template>
                    </Column>

                    <Column field="listenedProgress" header="Прослушано %" sortable>
                        <template #body="slotProps">
                            <span class="font-semibold">{{ slotProps.data.listenedProgress }}%</span>
                        </template>
                    </Column>

                    <Column field="lastCheck" header="Последняя проверка" class="text-center">
                        <template #body="slotProps">
                            <span class="text-sm text-secondary">{{ slotProps.data.lastCheck || '—' }}</span>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Button from 'primevue/button';
import type { UserRow } from './interface';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import DatePicker from 'primevue/datepicker';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const selectedRole = ref<string | null>(null);
const usersData = ref<UserRow[]>([
    { id: 1, name: 'Jaloliddin', role: 'b2b', status: 'active', onReview: 5, completed: 42, quality: 99, totalDone: 127, listenedProgress: 100 },
    { id: 2, name: 'Sarvar', role: 'b2b', status: 'active', onReview: 12, completed: 115, quality: 88, totalDone: 97, listenedProgress: 80 },
    { id: 3, name: 'Dmitriy', role: 'b2b', status: 'offline', onReview: 2, completed: 19, quality: 92, totalDone: 21, listenedProgress: 95 },
    { id: 4, name: 'Lutfullo', role: 'b2c', status: 'active', onReview: 8, completed: 64, quality: 75, totalDone: 72, listenedProgress: 50 },
    { id: 5, name: 'Vildan', role: 'b2c', status: 'active', onReview: 0, completed: 83, quality: 91, totalDone: 83, listenedProgress: 85 }
]);

const datepickerRef = ref<any>(null);
const absoluteToday = new Date();

// Динамические ограничения, которые будут меняться при кликах
const minSelectableDate = ref<Date | undefined>(undefined);
const maxSelectableDate = ref<Date | undefined>(absoluteToday);

// Инициализация: от 6 дней назад до сегодня
const today = new Date();
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(today.getDate() - 6);
const selectedPeriod = ref<[Date | null, Date | null]>([sevenDaysAgo, today]);

// Функция контроля выбора дат
const handleDateSelect = (selectedDate: Date): void => {
    const period = selectedPeriod.value;

    // ШАГ 1: Пользователь кликнул на ПЕРВУЮ дату (выбор только начался)
    if (period && period[0] && !period[1]) {
        // Устанавливаем минимальную дату для второго клика равной первой дате
        minSelectableDate.value = selectedDate;

        // Рассчитываем максимальную дату: первая дата + 6 дней
        const maxLimit = new Date(selectedDate);
        maxLimit.setDate(maxLimit.getDate() + 6);

        // Корректируем, чтобы ограничение +6 дней не уходило в будущее дальше сегодняшнего дня
        if (maxLimit > absoluteToday) {
            maxSelectableDate.value = absoluteToday;
        } else {
            maxSelectableDate.value = maxLimit;
        }
    } 
    // ШАГ 2: Пользователь кликнул на ВТОРУЮ дату (период полностью выбран)
    else if (period && period[0] && period[1]) {
        // Закрываем календарь
        if (datepickerRef.value) {
            datepickerRef.value.overlayVisible = false;
        }
        // СБРАСЫВАЕМ ограничения обратно в исходное состояние для следующего открытия
        minSelectableDate.value = undefined;
        maxSelectableDate.value = absoluteToday;
    }
};

const roleOptions = ref([
    { label: 'Все направления', value: null },
    { label: 'B2B', value: 'b2b' },
    { label: 'B2C', value: 'b2c' }
]);

onMounted(() => {
    if (!authStore.role.length) router.push('/');
});

const users = computed(() => {
    if (!selectedRole.value) return usersData.value;

    return usersData.value.filter(user => user.role === selectedRole.value);
});

const refreshData = (): void => {
    toast.add({ 
        severity: 'info', 
        summary: 'Подождите!', 
        detail: 'Данные обновляются...', 
        life: 5000 
    });
};

const totalOperators = computed(() => users.value.length);

const totalCompleted = computed(() => {
    return users.value.reduce((sum, user) => sum + user.completed, 0);
});

const avgQuality = computed(() => {
    if (!users.value.length) return 0;
    const totalQuality = users.value.reduce((sum, user) => sum + user.quality, 0);
    return Math.round(totalQuality / users.value.length);
});

const b2cAvgDone = computed(() => {
    const b2cUsers = users.value.filter(user => user.role === 'b2c');
    if (!b2cUsers.length) return 0;
    const totalB2cDone = b2cUsers.reduce((sum, user) => sum + user.totalDone, 0);
    return Math.round(totalB2cDone / b2cUsers.length);
});

const getRoleSeverity = (role: string) => {
    switch (role) {
        case 'b2b': return 'danger';
        default: return 'info';
    }
};

const handleLogout = (): void => {
    authStore.clearRole();
    router.push('/');
};
</script>

<style scoped>
@import "../assets/style/Operators.css";
</style>
