import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom for browser APIs
    environment: 'jsdom',

    // Enable global test APIs (describe, it, expect)
    globals: true,

    // Disable watch mode by default
    watch: false,

    // Setup files to run before tests
    setupFiles: ['./src/__tests__/setup.ts'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/__tests__/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/index.ts', // Re-export file
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 55,
        statements: 80,
      },
    },
  },
});
