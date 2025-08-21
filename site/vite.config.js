import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base dinâmica: usa BASE_URL em deploys (como GH Pages) e '/' localmente
  base: process.env.BASE_URL || '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Desabilitar sourcemaps em produção
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['bootstrap', '@fortawesome/fontawesome-free']
        }
      }
    }
  }
})

