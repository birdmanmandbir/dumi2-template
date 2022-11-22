import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi2-template',
  },
  alias: {
    '@': 'src',
  },
});
