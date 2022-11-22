import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi2-template',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/dumi2-template/',
});
