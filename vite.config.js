import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      // 在此处编写代理规则
      '/api': {
        target: 'https://static.storage.quanzhua.com/form/53da6912.json',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/\/api/, '')
        }
      }
    }
  }
})
