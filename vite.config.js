import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Имя репозитория для Pages: https://<user>.github.io/hello-pages/
export default defineConfig({
  base: '/hello-pages/',
  plugins: [react()],
})
