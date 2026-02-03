import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // CRITICAL for GitHub Pages asset resolution
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});