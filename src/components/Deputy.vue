<template>
    <div class="deputy">
        <Toast />

        <div class="dashboard-container">
            <header class="topbar">
                <div class="brand">
                    <i class="pi pi-shield banner-icon" style="font-size: 30px; color: #c5a880;"></i>
                    <div>
                        <span>EXECUTIVE QUALITY REVIEW</span>
                        <b>Контроль качества клиентского сервиса</b>
                    </div>
                </div>
                <div class="user">
                    <Button label="Выйти" severity="danger" variant="text" class="logout-btn" @click="handleLogout" />
                </div>
            </header>
        </div>

        <div class="dashboard-container">
            <div class="banner-header">
                <div class="banner-content">
                    <span class="banner-subtitle">ЕЖЕНЕДЕЛЬНАЯ КОНТРОЛЬНАЯ ВЫБОРКА</span>
                    <h1 class="banner-title">Контроль качества<br />клиентского сервиса</h1>
                    <p class="banner-description">
                        {{ data.metrics.total }} {{ getCallWordEnding(data.metrics.total) }} · {{ data.email }}
                    </p>
                </div>

                <div class="banner-logo-zone">
                    <div class="logo-circle">
                        <span class="logo-text">IQ</span>
                        <span class="logo-subtext">Infin Quality</span>
                    </div>
                </div>
            </div>

            <div class="metrics-grid">
                <div class="metric-card card-highlighted">
                    <span class="metric-label">Выборка недели</span>
                    <span class="metric-value">{{ data.metrics.total }}</span>
                    <span class="metric-footnote">{{ getCallWordEnding(data.metrics.total) }}</span>
                </div>

                <div class="metric-card">
                    <span class="metric-label">Проверено</span>
                    <span class="metric-value">{{ data.metrics.completed }}</span>
                    <span class="metric-footnote">{{ getCallWordEnding(data.metrics.completed) }}</span>
                </div>

                <div class="metric-card">
                    <span class="metric-label">Осталось</span>
                    <span class="metric-value">{{ data.metrics.remaining }}</span>
                    <span class="metric-footnote">{{ getCallWordEnding(data.metrics.remaining) }}</span>
                </div>

                <div class="metric-card">
                    <span class="metric-label">Прогресс</span>
                    <span class="metric-value">{{ data.metrics.percent.toFixed(1) }}%</span>
                    <span class="metric-footnote">завершено</span>
                </div>
            </div>
        </div>

        <div class="dashboard-container">
            <div class="banner-container">
                <div class="banner-header-bottom">
                    <span class="subtitle">КОНТРОЛЬНАЯ ВЫБОРКА</span>
                    <h2 class="title">{{ data.metrics.total }} {{ getCallWordEnding(data.metrics.total) }}</h2>
                </div>

                <div class="cards-grid">
                    <Card 
                        v-for="call in data.calls" 
                        :key="call.id" 
                        class="call-card"
                    >
                        <template #content>
                            <div class="card-body">
                                <div class="left-section">
                                    <div :class="['icon-wrapper', call.status === 'completed' ? 'success' : 'pending']">
                                        <i
                                            :class="call.status === 'completed' ? 'pi pi-check-circle' : 'pi pi-clock'"></i>
                                    </div>
                                    <div class="info">
                                        <h3>{{ call.operator_name }}</h3>
                                        <span class="call-id">CallId: {{ call.call_id }}</span>
                                        <div class="metrics">
                                            <span class="duration">{{ formatDuration(call.duration_seconds) }}</span>
                                            <span v-if="call.status === 'completed' && call.deputy_quality !== null"
                                                class="total font-bold text-green-600">
                                                Итог: {{ call.deputy_quality.toFixed(1) }}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Button 
                                    :label="call.status === 'completed' ? 'Посмотреть' : 'Открыть проверку'"
                                    severity="warn" 
                                    outlined 
                                    class="action-btn" 
                                    @click="openReviewDrawer(call)" 
                                />
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>

        <Drawer 
            v-model:visible="isDrawerOpen" 
            position="right" 
            :header="selectedCall ? selectedCall.operator_name : ''"
            class="review-drawer" 
            :style="{ width: '700px' }" 
            :pt="{
                header: {
                    style: { background: '#092040' }
                },
                title: {
                    style: { color: '#ffffff' }
                },
                closeButton: {
                    style: { color: '#ffffff' }
                },
                content: {
                    style: { background: ' #f3f3f3' }
                }
            }"
        >
            <div v-if="selectedCall" class="drawer-content">
                <div class="drawer-section meta-info">
                    <div class="audio-block">
                        <label class="block font-bold">Аудиозапись:</label>
                        <audio controls class="w-full">
                            <source :src="selectedCall.audio_file" type="audio/mpeg">
                            Ваш браузер не поддерживает аудиоэлемент.
                        </audio>
                    </div>

                    <div class="audio-block__info">
                        <p><strong>Оператор:</strong> {{ selectedCall.operator_name }}</p>
                        <p><strong>CallId:</strong> {{ selectedCall.call_id }}</p>
                    </div>
                </div>

                <div class="drawer-section checklist-section">
                    <h3 class="section-title">Демонстрационный чек-лист:</h3>

                    <div 
                        v-for="(item, index) in form.checklist" 
                        :key="index" 
                        class="checklist-row"
                    >
                        <span class="question-text">{{ item.question }}</span>

                        <div class="row-inputs">
                            <Select 
                                v-model="item.answer" 
                                :options="answerOptions" 
                                optionLabel="label"
                                optionValue="value" 
                                placeholder="Выберите ответ" 
                                class="answer-select" 
                            />

                            <input type="text" v-model="item.comment" placeholder="Комментарий" class="inline-comment-input" />
                        </div>
                    </div>

                    <Button label="Сохранить чек-лист" severity="secondary" class="mt-3 finish-btn" @click="saveChecklist" />
                </div>

                <div class="drawer-section manager-section">
                    <h3 class="section-title">Комментарий руководителя</h3>

                    <Textarea 
                        v-model="form.managerComment" 
                        rows="4" 
                        autoResize
                        placeholder="Введите ваш комментарий здесь..." 
                        class="w-full text-area" 
                    />

                    <Button label="Сохранить комментарий" severity="secondary" class="mt-3 finish-btn" @click="saveManagerComment" />
                </div>

                <div class="drawer-actions-bottom">
                    <Button label="Завершить проверку" severity="warn" class="finish-btn" @click="finishReview" />
                </div>
            </div>
        </Drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import 'primeicons/primeicons.css';
import type { ChecklistItem } from './interface';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
// import axios from 'axios';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const isDrawerOpen = ref(false);
const selectedCall = ref<any>(null);

const answerOptions = [
    { label: 'Да', value: 'yes' },
    { label: 'Нет', value: 'no' }
];

const rawQuestions = [
    'Оператор корректно поприветствовал клиента?',
    'Оператор представился и назвал банк?',
    'Потребность клиента была определена корректно?',
    'Оператор предоставил полную и понятную информацию?',
    'В речи отсутствовали ошибки и некорректные формулировки?',
    'Оператор соблюдал стандарты делового общения?',
    'Вопрос клиента был решён в рамках обращения?',
    'Оператор корректно завершил разговор?'
];

const form = ref({
    checklist: rawQuestions.map((q): ChecklistItem => ({
        question: q,
        answer: null,
        comment: ''
    })),
    managerComment: ''
});

const data = ref<any>({
    deputy_type: "",
    email: "",
    metrics: { total: 0, completed: 0, remaining: 0, percent: 0 },
    calls: []
});

const fetchDashboardData = async () => {
    try {
        // const response = await axios.get(`${window.location.origin}/api/deputy/dashboard?${authStore.role}`);

        // data.value = await response.json();

        if (authStore.role === 'b2b') {
            data.value = {
                deputy_type: "b2b",
                email: "Deputy B2B",
                batch: {
                    "review_week_start": "2026-09-14",
                    "source_date_from": "2026-09-14",
                    "source_date_to": "2026-09-20"
                },
                metrics: {
                    total: 3,
                    completed: 1,
                    remaining: 2,
                    percent: 33.3
                },
                calls: [
                    {
                        id: 5,
                        call_id: "DEMO-B2B-001",
                        role_code: "deputy_b2b",
                        direction: "Входящий",
                        topic: "Расчётный счёт компании",
                        operator_name: "Оператор Камил",
                        audio_file: "recordings/DEMO-B2B-001.mp3",
                        status: "completed",
                        score: 100,
                        completed_at: "2026-10-09T12:29:21.557693+00:00",
                        duration_seconds: 250.77551,
                        comment: "fdhfdh",
                        quality_points: 8.0,
                        quality_max_points: 8.0,
                        deputy_assignment_id: 5,
                        call_db_id: 5,
                        position_no: 1,
                        audio_status: "ready",
                        deputy_comment: "fdhfdh",
                        deputy_quality: 100,
                        monitoring_quality: null,
                        monitoring_comment: "",
                        monitoring_email: ""
                    },
                    {
                        id: 6,
                        call_id: "DEMO-B2B-002",
                        role_code: "deputy_b2b",
                        direction: "Исходящий",
                        topic: "Статус корпоративного платежа",
                        operator_name: "Оператор Малика",
                        audio_file: "recordings/DEMO-B2B-002.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 140.976,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        deputy_assignment_id: 6,
                        call_db_id: 6,
                        position_no: 2,
                        audio_status: "ready",
                        deputy_comment: "",
                        deputy_quality: null,
                        monitoring_quality: null,
                        monitoring_comment: "",
                        monitoring_email: ""
                    },
                    {
                        id: 7,
                        call_id: "DEMO-B2B-003",
                        role_code: "deputy_b2b",
                        direction: "Исходящий",
                        topic: "Статус корпоративного платежа",
                        operator_name: "Оператор Ойбек",
                        audio_file: "recordings/DEMO-B2B-003.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 40.359,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        deputy_assignment_id: 6,
                        call_db_id: 6,
                        position_no: 3,
                        audio_status: "ready",
                        deputy_comment: "",
                        deputy_quality: null,
                        monitoring_quality: null,
                        monitoring_comment: "",
                        monitoring_email: ""
                    }
                ]
            };
        }

        if (authStore.role === 'b2c') {
            data.value = {
                deputy_type: "b2c",
                email: "Deputy B2C",
                batch: {
                    review_week_start: "2026-09-14",
                    source_date_from: "2026-09-14",
                    source_date_to: "2026-09-20"
                },
                metrics: {
                    total: 2,
                    completed: 0,
                    remaining: 2,
                    percent: 0.0
                },
                calls: [
                    {
                        id: 3,
                        call_id: "DEMO-B2C-001",
                        role_code: "deputy_b2c",
                        direction: "Входящий",
                        topic: "Перевод между картами",
                        operator_name: "Оператор Диана",
                        audio_file: "recordings/DEMO-B2C-001.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 86.595918,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        deputy_assignment_id: 3,
                        call_db_id: 3,
                        position_no: 1,
                        audio_status: "ready",
                        deputy_comment: "",
                        deputy_quality: null,
                        monitoring_quality: null,
                        monitoring_comment: "",
                        monitoring_email: ""
                    },
                    {
                        id: 4,
                        call_id: "DEMO-B2C-002",
                        role_code: "deputy_b2c",
                        direction: "Входящий",
                        topic: "Мобильное приложение",
                        operator_name: "Оператор Тимур",
                        audio_file: "recordings/DEMO-B2C-002.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 167.706122,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        deputy_assignment_id: 4,
                        call_db_id: 4,
                        position_no: 2,
                        audio_status: "ready",
                        deputy_comment: "",
                        deputy_quality: null,
                        monitoring_quality: null,
                        monitoring_comment: "",
                        monitoring_email: ""
                    }
                ]
            };
        }

    } catch (error) {
        console.error('Не удалось загрузить данные дашборда:', error);
    }
};

onMounted(() => {
    if (!authStore.role.length) router.push('/');
    fetchDashboardData();
});

const openReviewDrawer = (call: any) => {
    selectedCall.value = call;

    form.value.managerComment = call.monitoring_comment || '';

    form.value.checklist = rawQuestions.map((q) => ({
        question: q,
        answer: null,
        comment: ''
    }));

    isDrawerOpen.value = true;
};

const saveChecklist = () => {
    toast.add({ 
        severity: 'success', 
        summary: 'Сохранено', 
        detail: 'Чек-лист успешно сохранен!', 
        life: 5000
    });
};

const saveManagerComment = () => {
    toast.add({ 
        severity: 'success', 
        summary: 'Сохранено', 
        detail: 'Комментарий руководителя сохранен!', 
        life: 5000 
    });
};

const finishReview = () => {
    toast.add({ 
        severity: 'success', 
        summary: 'Проверка завершена', 
        detail: 'Статус звонка успешно обновлен!', 
        life: 5000 
    });
};

const formatDuration = (seconds: number): string => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const getCallWordEnding = (count: number): string => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod100 >= 11 && mod100 <= 19) return 'звонков';
    if (mod10 === 1) return 'звонок';
    if (mod10 >= 2 && mod10 <= 4) return 'звонка';
    return 'звонков';
};

const handleLogout = (): void => {
    authStore.clearRole();
    router.push('/');
};
</script>

<style scoped>
@import "../assets/style/Deputy.css";
</style>
