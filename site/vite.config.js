import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Manrio_SPA_Site/', // substitua aqui pelo nome real do repositório
  plugins: [react()],
})

