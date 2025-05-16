import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import nightwatchPlugin from 'vite-plugin-nightwatch'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/realbooks_index/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    nightwatchPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Real Book Viewer',
        short_name: 'RealBook',
        start_url: '/realbooks_index/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3f51b5',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
