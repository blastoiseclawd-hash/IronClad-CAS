import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      // This injects the API_KEY from Vercel settings into the React app
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});