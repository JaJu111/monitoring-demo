export interface RoleOption {
    label: string;
    value: 'admin' | 'b2b' | 'b2c' | 'monitoring';
    icon: string;
}

export interface UserRow {
    id: number;
    name: string;
    role: 'admin' | 'b2b' | 'b2c' | 'monitoring';
    status: 'active' | 'offline';
    onReview: number;
    completed: number;
    quality: number;
    totalDone: number;
    listenedProgress?: number;
    email?: string;
}

export interface ChecklistItem {
    question: string;
    answer: string | null;
    comment: string;
}

export interface Operator {
    id: number;
    call_id: string;
    role_code: string;
    direction: string;
    topic: string;
    operator_name: string;
    audio_file: string;
    status: string;
    score: number | null;
    completed_at: string | null;
    duration_seconds: number;
    comment: string;
    quality_points: number | null;
    quality_max_points: number | null;
    file_name: string;
    external_call_id: string;
    listening_source: string;
    assignment_source: string;
    quality_score: number | null;
    listened_seconds: number;
    listened_percent: number;
}