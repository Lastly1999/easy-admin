import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

const readEnvConfig = (mode: string) => {
  return loadEnv(mode, __dirname)
}

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  const envConfig = readEnvConfig(mode)
  return defineConfig({
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      // mock server
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve'
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
          },
          charset: false,
          additionalData: '@import "./src/assets/style/global.less";'
        }
      }
    }
  })
}
