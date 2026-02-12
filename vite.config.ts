import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // only if you already installed it

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),  // keep this only if Tailwind is installed correctly
  ],
});
