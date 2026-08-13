import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Required for https://druvan20.github.io/druvan-portfolio/
  base: '/druvan-portfolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('@react-three')) return 'r3f'
          }
          return undefined
        },
      },
    },
  },
})
