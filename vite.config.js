import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	server: { open: true },
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
		},
	},
});
