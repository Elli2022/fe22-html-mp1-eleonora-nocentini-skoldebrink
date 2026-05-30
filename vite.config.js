import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fe22-html-mp1-eleonora-nocentini-skoldebrink/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        inspirational: resolve(__dirname, 'inspirational.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
