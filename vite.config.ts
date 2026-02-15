import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Использование чистого объекта исключает ошибку "Unexpected return"
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})