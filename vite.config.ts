import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command }) => {
	return {
		plugins: [
			vue(),
			vueDevTools()
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
			dedupe: ['vue']
		},
		base: command === 'build' ? '/monitoring-demo/' : '/',
		server: {
			port: 8080
		},
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: 'js/[name]-[hash].js',
					entryFileNames: 'js/[name]-[hash].js',
	
					assetFileNames: (assetInfo) => {
						const name = assetInfo.name || '';
	
						if (/\.(woff|woff2|eot|ttf|otf)$/.test(name)) {
							return 'fonts/[name]-[hash][extname]';
						}
	
						if (/\.(png|jpe?g|gif|svg|webp|ico|avif)$/.test(name)) {
							return 'img/[name]-[hash][extname]';
						}
	
						if (/\.css$/.test(name)) {
							return 'css/[name]-[hash][extname]';
						}
	
						return '[name]-[hash][extname]';
					},
				},
			},
		},
	}
});
