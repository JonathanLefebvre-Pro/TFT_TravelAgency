import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: { chunkSizeWarningLimit: 650 },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@data": "/src/data",
      "@interfaces": "/src/interfaces",
      // "@icons": "/src/icons",
      // "@hooks": "/src/hooks",
      // "@fb": "/src/firebase",
    },
  },
})
