import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
	server: {
		host: true
	}	,
	resolve: {
    alias: {
      '@theme': path.resolve(__dirname, './src/theme'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@theme/variables" as *;` // Injeção global opcional
      }
    }
  }

})