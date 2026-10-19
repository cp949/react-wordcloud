import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  // package.json exports가 index.js / index.cjs를 가리키므로 .mjs 확장자를 쓰지 않는다.
  fixedExtension: false,
  dts: true,
  sourcemap: true,
  clean: true,
  // 런타임 의존성은 번들하지 않는다.
  deps: {
    neverBundle: [
      'react',
      'react-dom',
      'd3-array',
      'd3-cloud',
      'd3-scale',
      'd3-scale-chromatic',
      'd3-selection',
      'd3-transition',
      'tippy.js',
      'seedrandom',
      'lodash.debounce',
      'resize-observer-polyfill',
    ],
  },
  outputOptions: { exports: 'named' },
  treeshake: true,
  minify: false,
});
