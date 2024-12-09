import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path'; // Импортируем resolve из path

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Настройка алиаса для папки src
    },
  },
  base: './',
  build: {
    sourcemap: true,
    assetsDir: './assets'
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'] // или "modern"
      }
    }
  },
});

