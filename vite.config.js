import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: "/Sathyam-Tech/",
  server: {
    allowedHosts: ['sathyam-tech.onrender.com']
  },
  plugins: [
    react(),
  ],
})
