import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Важная настройка:
  build: {
    rollupOptions: {
      input: {
        // Укажите ТОЧНЫЙ путь к вашему HTML-файлу
        // Обычно это './index.html'
        main: './index.html'
      }
    }
  }
})