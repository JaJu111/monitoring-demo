import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			name: 'Login',
			path: '/',
			component: LoginView,
			meta: { requiresAuth: false }
		},
		{
			name: 'Admin',
			path: '/admin',
			component: () => import('@/views/AdminView.vue'),
			meta: { requiresAuth: true, allowedRoles: ['admin'] }
		},
		{
			name: 'Operators',
			path: '/operators',
			component: () => import('@/views/OperatorsView.vue'),
			meta: { requiresAuth: true, allowedRoles: ['admin'] }
		},
		{
			name: 'Deputy',
			path: '/deputy',
			component: () => import('@/views/DeputyView.vue'),
			meta: { requiresAuth: true, allowedRoles: ['b2b', 'b2c'] }
		},
		{
			name: 'Monitoring',
			path: '/history',
			component: () => import('@/views/MonitoringView.vue'),
			meta: { requiresAuth: true, allowedRoles: ['monitoring'] }
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/'
		}
	],
});

router.beforeEach((to, from) => {
	const authStore = useAuthStore();
	const userRole = authStore.role;

	const defaultRoutes: Record<string, string> = {
		admin: '/admin',
		b2b: '/deputy',
		b2c: '/deputy',
		monitoring: '/history'
	};

	if (to.meta.requiresAuth) {
		if (!userRole) {
			return { name: 'Login' };
		}

		const allowedRoles = to.meta.allowedRoles as string[];
		
		if (allowedRoles && !allowedRoles.includes(userRole)) {
			if (from.path !== '/') {
				return false; 
			} else {
				const userHomeRoute = defaultRoutes[userRole];
				return userHomeRoute ? userHomeRoute : { name: 'Login' };
			}
		}
	}
});

export default router;
