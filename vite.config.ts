import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
    svgr(),
    viteCompression({
      algorithm: 'gzip', // 압축 알고리즘 지정
      ext: '.gz', // 압축된 파일 확장자
      threshold: 10240, // 최소 파일 크기 (10KB 이상인 파일만 압축)
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
