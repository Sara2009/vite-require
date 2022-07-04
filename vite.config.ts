import { builtinModules } from 'module'
import { defineConfig, build } from 'vite'
import path from 'path'

export default defineConfig({
  mode: 'development',
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      name: 'vite-lib', // 起个名字，安装、引入用
      fileName: (format) => `lib.${format}.js`,
    },
    sourcemap: false,
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
      output: {
        entryFileNames: '[name].cjs',
      },

    },

  },
  plugins: [],
})

