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
  // base 只和路由有关，publicPath 影响资源文件的访问
  // base 和 publicPath 的配置只在 build 时有效，umi dev 写死为 /，不可配
  publicPath: '/dumi2-template/',
});
