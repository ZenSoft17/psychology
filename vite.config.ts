import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'

export default defineConfig({
	plugins: [react(), million.vite({ auto: true })],
	server: {
		host: true,
		port: 8080,
	},
})
