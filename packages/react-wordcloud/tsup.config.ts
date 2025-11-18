import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'd3-array',
    'd3-cloud',
    'd3-scale',
    'd3-selection',
    'd3-transition',
    'tippy.js',
    'seedrandom',
    'lodash.debounce',
  ],
  treeshake: true,
  splitting: false,
  minify: false,
});
