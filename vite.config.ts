import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite configuration. 
// Vite automatically loads any environment variable starting with VITE_ 
// and exposes it on import.meta.env.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});