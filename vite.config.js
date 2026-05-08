import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mom/',
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 3000,
  },
})
