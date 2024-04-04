import { defineConfig } from 'vite'
import { APP_BASE } from './src/config'
import react from '@vitejs/plugin-react'
import stylex from "vite-plugin-stylex"

export default defineConfig({
  plugins: [react(), stylex()],
  base: APP_BASE,
  resolve: {
    alias: {
      // Define your aliases here
      'styles': '/src/stylex/stylex.js',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        }
    }
  }
})