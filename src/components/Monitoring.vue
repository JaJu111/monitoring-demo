<template>
    <div class="deputy">
        <Toast />

        <div class="dashboard-container">
            <header class="topbar">
                <div class="brand">
                    <i class="pi pi-shield banner-icon" style="font-size: 30px; color: #c5a880;"></i>
                    <div>
                        <span>Контроль качества звонков</span>
                        <b>Прослушивание, оценка качества и комментарии сотрудников</b>
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
                    <span class="banner-subtitle">Пользователь:</span>
                    <h1 class="banner-title">{{ authStore.role }}</h1>
                    <p class="banner-description">В списке: {{ responseData.assigned_count }}</p>
                </div>

                <div class="banner-logo-zone">
                    <div class="logo-circle">
                        <span class="logo-text">IQ</span>
                        <span class="logo-subtext">Infin Quality</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="dashboard-container pt-3">
            <Tabs v-model:value="activeTab">
                <TabList>
                    <Tab value="active">
                        <span>На проверке</span>
                        <Badge v-if="activeTab === 'active'" :value="responseData.active_count" severity="warn" :style="{ marginLeft: '10px' }" />
                    </Tab>

                    <Tab value="completed">
                        <span>Завершённые</span>
                        <Badge v-if="activeTab === 'completed'" :value="responseData.completed_count" severity="success" :style="{ marginLeft: '10px' }" />
                    </Tab>

                    <Tab value="history">
                        <span>Все звонки</span>
                        <Badge v-if="activeTab === 'history'" :value="responseData.total" :style="{ backgroundColor: '#0f4496', color: '#fff', marginLeft: '10px' }" />
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel v-model:value="activeTab">
                        <div v-if="!pendingCalls.length" class="empty-state">
                            Нет звонков на проверке
                        </div>

                        <div v-else class="call-card">
                            <div v-for="call in pendingCalls" :key="call.id" class="call-card-container">
                                <div class="call-meta-info">
                                    <div class="call-meta-info__left">
                                        <div class="call-meta-info__top">
                                            <h4>{{ call.call_id }}</h4>
                                            <Badge v-if="call.status === 'completed'" value="Завершён" severity="success" />
                                        </div>

                                        <div class="call-meta-info__right">
                                            <p><strong>ID:</strong> {{ call.id }}</p>
                                            <p><strong>Длительность:</strong> {{ formatDuration(call.duration_seconds) }} сек.</p>
                                            <p><strong>Оператор:</strong> {{ call.operator_name }}</p>
                                        </div>
                                    </div>

                                    <div class="call-meta-info__right">
                                        <p><strong>Тема:</strong> {{ call.topic }}</p>
                                        <p>
                                            <strong>Прослушано:</strong>
                                            {{ call.listened_percent }}% ({{ call.listened_seconds }} / {{ formatDuration(call.duration_seconds) }} сек.)
                                        </p>
                                    </div>
                                </div>

                                <div class="audio-block">
                                    <audio controls preload="metadata" @timeupdate="onTimeUpdate($event, call)" class="w-full mb-2">
                                        <source :src="call.audio_file" type="audio/mpeg">
                                        Ваш браузер не поддерживает аудиоэлемент.
                                    </audio>

                                    <div class="progress-container">
                                        <ProgressBar :value="call.listened_percent">
                                            <template #default>
                                                {{ call.listened_percent }}%
                                            </template>
                                        </ProgressBar>
                                    </div>
                                </div>

                                <div class="comment-action-section form-layout">
                                    <div class="action-buttons">
                                        <div class="manager-comment-block">
                                            <label>Комментарий менеджера:</label>

                                            <textarea 
                                                v-model="call.comment"
                                                placeholder="Введите комментарий по результатам проверки звонка..."
                                                rows="1" 
                                                autoResize 
                                                class="manager-textarea"
                                            ></textarea>
                                        </div>

                                        <Button 
                                            label="Сохранить" 
                                            icon="pi pi-save" 
                                            class="btn-save-custom" 
                                            :disabled="call.listened_percent === 100"
                                            @click="saveChecklist(call)" 
                                        />

                                        <Button 
                                            label="Завершить" 
                                            icon="pi pi-check"
                                            severity="success" 
                                            :disabled="call.listened_percent === 100" 
                                            @click="completeChecklist(call)" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ProgressBar from 'primevue/progressbar';
import Badge from 'primevue/badge';
import type { Operator } from './interface';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
// import axios from 'axios';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const responseData = ref({
    calls: [] as Operator[],
    assigned_count: 0,
    active_count: 0,
    completed_count: 0,
    total: 0,
    percent: 0
});

const activeTab = ref('active');

const fetchCalls = async (viewType: string) => {
    try {
        // const response = await axios.get(`${window.location.origin}/api/calls?view=${viewType}`);

        // responseData.value = response.data;

        if (viewType === 'active') {
            responseData.value = {
                calls: [
                    {
                        id: 1,
                        call_id: "DEMO-MON-001",
                        role_code: "monitoring",
                        direction: "Исходящий",
                        topic: "Уточнение по заявке",
                        operator_name: "Оператор Бекзод",
                        audio_file: "recordings/DEMO-MON-001.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 181.342041,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        file_name: "DEMO-MON-001",
                        external_call_id: "DEMO-MON-001",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: null,
                        listened_seconds: 0,
                        listened_percent: 21.0
                    },
                    {
                        id: 2,
                        call_id: "DEMO-MON-002",
                        role_code: "monitoring",
                        direction: "Исходящий",
                        topic: "Уточнение по заявке",
                        operator_name: "Оператор Али",
                        audio_file: "recordings/DEMO-MON-002.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 25.173587,
                        comment: "test comments",
                        quality_points: null,
                        quality_max_points: null,
                        file_name: "DEMO-MON-002",
                        external_call_id: "DEMO-MON-002",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: null,
                        listened_seconds: 0,
                        listened_percent: 63.0
                    }
                ] as Operator[],
                assigned_count: 2,
                active_count: 2,
                completed_count: 0,
                total: 2,
                percent: 50.0
            };
        }

        if (viewType === 'completed') {
            responseData.value = {
                calls: [
                    {
                        id: 3,
                        call_id: "DEMO-MON-003",
                        role_code: "monitoring",
                        direction: "Входящий",
                        topic: "Вопрос по банковской карте",
                        operator_name: "Оператор Анна",
                        audio_file: "recordings/DEMO-MON-003.mp3",
                        status: "completed",
                        score: 6.8,
                        completed_at: "2026-10-09T12:31:54.548955+00:00",
                        duration_seconds: 55.562449,
                        comment: "Оператор Анна проверено и завершено маладец",
                        quality_points: 6.5,
                        quality_max_points: 95.0,
                        file_name: "DEMO-MON-003",
                        external_call_id: "DEMO-MON-003",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: 6.8,
                        listened_seconds: 55.49,
                        listened_percent: 100.0
                    }
                ],
                assigned_count: 1,
                active_count: 0,
                completed_count: 1,
                total: 1,
                percent: 100.0
            };
        }

        if (viewType === 'history') {
            responseData.value = {
                calls: [
                {
                        id: 1,
                        call_id: "DEMO-MON-001",
                        role_code: "monitoring",
                        direction: "Исходящий",
                        topic: "Уточнение по заявке",
                        operator_name: "Оператор Бекзод",
                        audio_file: "recordings/DEMO-MON-001.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 181.342041,
                        comment: "",
                        quality_points: null,
                        quality_max_points: null,
                        file_name: "DEMO-MON-001",
                        external_call_id: "DEMO-MON-001",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: null,
                        listened_seconds: 0,
                        listened_percent: 21.0
                    },
                    {
                        id: 2,
                        call_id: "DEMO-MON-002",
                        role_code: "monitoring",
                        direction: "Исходящий",
                        topic: "Уточнение по заявке",
                        operator_name: "Оператор Али",
                        audio_file: "recordings/DEMO-MON-002.mp3",
                        status: "pending",
                        score: null,
                        completed_at: null,
                        duration_seconds: 25.173587,
                        comment: "test comments",
                        quality_points: null,
                        quality_max_points: null,
                        file_name: "DEMO-MON-002",
                        external_call_id: "DEMO-MON-002",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: null,
                        listened_seconds: 0,
                        listened_percent: 63.0
                    },
                    {
                        id: 3,
                        call_id: "DEMO-MON-003",
                        role_code: "monitoring",
                        direction: "Входящий",
                        topic: "Вопрос по банковской карте",
                        operator_name: "Оператор Анна",
                        audio_file: "recordings/DEMO-MON-003.mp3",
                        status: "completed",
                        score: 6.8,
                        completed_at: "2026-10-09T12:31:54.548955+00:00",
                        duration_seconds: 55.562449,
                        comment: "Оператор Анна проверено и завершено маладец",
                        quality_points: 6.5,
                        quality_max_points: 95.0,
                        file_name: "DEMO-MON-003",
                        external_call_id: "DEMO-MON-003",
                        listening_source: "site",
                        assignment_source: "automatic",
                        quality_score: 6.8,
                        listened_seconds: 55.49,
                        listened_percent: 100.0
                    }
                ],
                assigned_count: 3,
                active_count: 2,
                completed_count: 1,
                total: 3,
                percent: 60.0
            };
        }

    } catch (error) {
        console.error('Ошибка при загрузке звонков:', error);
    }
};

onMounted(() => {
    if (!authStore.role.length) {
        router.push('/');
    } else {
        fetchCalls(activeTab.value);
    }
});

// Вспомогательная функция для округления секунд
const formatDuration = (seconds: number): string => {
    return seconds.toFixed(1);
};

// Метод промежуточного сохранения
const saveChecklist = (operator: Operator): void => {
    if (!operator.comment.length) {
        toast.add({ 
            severity: 'warn', 
            summary: 'Внимание!', 
            detail: 'Поле "Комментарий менеджера" не должен быть пустым', 
            life: 5000
        });

        return;
    }

    toast.add({ 
        severity: 'success', 
        summary: 'Ваша комментария успешно сохранено!', 
        life: 5000
    });
};

// Метод финального завершения проверки звонка
const completeChecklist = (operator: Operator): void => {
    operator.listened_percent = 100.0;
    operator.status = 'completed';

    toast.add({ 
        severity: 'success', 
        summary: 'Успешно завершено!',  
        life: 5000
    });
};

// Функция обновляет секунды и процент прогресса при прослушивании
const onTimeUpdate = (event: Event, call: Operator) => {
    const audio = event.target as HTMLAudioElement;
    if (!audio || !call.duration_seconds) return;

    // Обновляем прослушанные секунды
    call.listened_seconds = parseFloat(audio.currentTime.toFixed(1));

    // Высчитываем и округляем процент для ProgressBar
    const percent = (audio.currentTime / call.duration_seconds) * 100;
    call.listened_percent = parseFloat(percent.toFixed(1));
};

const handleLogout = (): void => {
    authStore.clearRole();
    router.push('/');
};

const pendingCalls = computed(() => {
    return responseData.value.calls;
});

watch(activeTab, (newTabValue) => {
    fetchCalls(newTabValue);
});

</script>

<style scoped>
@import "../assets/style/Monitoring.css";
</style>
