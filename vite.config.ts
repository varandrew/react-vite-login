import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    // 设置打包路径
    base: '/',
    plugins: [react(), tsconfigPaths()],
    server: {
      host: '0.0.0.0',
      port: parseInt(process.env.VITE_PORT!, 10), // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      hmr: true, // 开启热更新
      // 设置代理，根据我们项目实际情况配置
      proxy: {
        '/api': {
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    },

    // 生产环境打包配置
    build: {
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true // 生产环境去除 debugger
        }
      },
      chunkSizeWarningLimit: 700 // chunk 大小警告的限制（以 kbs 为单位）
    }
  })
}
