import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

const SPA_FALLBACK_MIDDLEWARE = () => ({
  name: 'spa-fallback',
  configResolved(config) {
    return config;
  },
  apply: 'serve',
  enforce: 'post',
  handle(ctx) {
    if (ctx.url.startsWith('/') && !ctx.url.includes('.') && ctx.url !== '/') {
      ctx.url = '/';
    }
  },
});

export default defineConfig({
  plugins: [react(), SPA_FALLBACK_MIDDLEWARE()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
