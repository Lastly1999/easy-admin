import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'

const readEnvConfig = (mode: any) => {
  return loadEnv(mode, __dirname)
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envConfig = readEnvConfig(mode)
  return defineConfig({
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style`
          }
        ]
      })
    ],
    server: {
      cors: true,
      port: Number(envConfig.VITE_APP_PORT),
      origin: 'http://localhost:3001',
      proxy: {
        [envConfig.VITE_APP_BASE_URL]: {
          target: envConfig.VITE_APP_API_URL,
          changeOrigin: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#0aa679' //设置antd主题色
          }
        }
      }
    }
  })
}
