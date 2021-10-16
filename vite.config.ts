import { babel } from '@rollup/plugin-babel';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  plugins: [
    reactRefresh(),
    babel({
      include: ['./src/**'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    viteCompression(),
    VitePWA(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      contracts: path.resolve(__dirname, './src/contracts'),
      features: path.resolve(__dirname, './src/features'),
      lib: path.resolve(__dirname, './src/lib'),
      models: path.resolve(__dirname, './src/models'),
      pages: path.resolve(__dirname, './src/pages'),
      typings: path.resolve(__dirname, './src/typings'),
      ui: path.resolve(__dirname, './src/ui'),
    },
  },
});
