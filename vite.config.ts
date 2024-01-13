import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import * as path from 'path'

const resolve = (src: string) => path.resolve(__dirname, src)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {find:"@components", replacement: resolve("src/components")},
      {find: "@api", replacement: resolve("src/api") },
      {find: "@pages", replacement: resolve("src/pages")},
      {find: "@assets", replacement: resolve("src/assets")},
      {find: "@styles", replacement: resolve("src/styles")},
    ]
  },
  server: {
    proxy: {
      '/security/v1': {
        target:"http://192.168.155.95:8081",
        changeOrigin:true,
      },
    }, 
  }
})
