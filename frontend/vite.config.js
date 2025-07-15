import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio';

export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [react()],
  server: {
    open: true,
  }
})
