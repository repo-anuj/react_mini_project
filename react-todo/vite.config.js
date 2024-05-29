import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react_mini_project/react-todo/', // Adjust this to reflect your repository structure
});
