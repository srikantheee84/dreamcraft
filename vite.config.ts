import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative base path for flexible deployment on GitHub Pages
  build: {
    outDir: 'dist',
  },
});