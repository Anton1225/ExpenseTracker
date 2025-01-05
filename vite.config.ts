import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/https://github.com/Anton1225/ExpenseTracker/' : '/',
  plugins: [react()],
  root: __dirname,
})
