import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000, // Specify the port you want to use
    // Remove 'open: true' as it's not needed for production deployment
  },
});
