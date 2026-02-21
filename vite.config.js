import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['sathyamtechsolutions.com']
  },
  plugins: [
    react(),
  ],
  build: {
    // Target modern browsers to reduce transpilation overhead
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks(id) {
          if (id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-ga4') ||
            id.includes('node_modules/react-router-dom')) {
            return 'react-vendor'
          }
        },
        // Asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            extType = 'images';
          } else if (/woff|woff2|ttf|eot/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Use terser for better minification and dead-code elimination
    minify: 'esbuild',
  },
})

