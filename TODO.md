# TODO: Future Improvements

## Testing - ✅ COMPLETED

### React/D3 Integration Tests

**Strategy** (Based on 2025 Best Practices):

1. **Separation of Concerns**: Test React logic separately from D3 rendering
2. **Focus on Testable Units**: utils and hooks tested in isolation
3. **Visual Regression**: Use Playwright for actual rendering validation (future)
4. **Unit Tests**: Focus on data transformations and React lifecycle

**Completed**:

- ✅ utils.test.ts (10 tests passing)
- ✅ hooks.test.tsx (11 tests passing)
- ✅ ResizeObserver mock setup for jsdom
- ✅ SVGElement.getBBox mock for jsdom
- ✅ Test coverage: 82.89% statements, 93.75% functions, 82.43% lines, 57.14% branches
- ✅ Scripts created: security-test.sh, verify-all.sh

### ReactWordcloud Component Testing Challenges

**Why jsdom tests failed:**

- d3-cloud uses asynchronous layout computation with callbacks
- Memory leaks occur when mocking complex async D3 workflows in jsdom
- D3 timer behavior differs from native timeouts, making mocking difficult
- jsdom doesn't fully support SVG layout calculations needed for word positioning

**Recommended approach (2025 best practices):**

1. **Vitest Browser Mode** (Stable in Vitest 4.0+)
   - Run tests in real browser with Playwright/WebdriverIO
   - Accurate D3 rendering and layout calculations
   - No need to mock d3-cloud async behavior
   - Better performance than jsdom for complex visualizations
   - Example:
     ```typescript
     // vitest.config.ts
     export default defineConfig({
       test: {
         browser: {
           enabled: true,
           name: 'chromium',
           provider: 'playwright',
         },
       },
     });
     ```

2. **Test What Matters**
   - Props validation (words, callbacks, options)
   - SVG creation and cleanup
   - Event handlers (onWordClick, onWordMouseOver)
   - Responsive behavior
   - Don't test d3-cloud internals (word positioning algorithm)

3. **Alternative: Visual Regression Testing**
   - Use Playwright for E2E visual tests
   - Capture screenshots of rendered word clouds
   - Compare against baseline images
   - Better for catching visual regressions than unit tests

**Current coverage is sufficient:**

- utils.test.ts: Data transformation logic
- hooks.test.tsx: React lifecycle and D3 integration
- Missing ReactWordcloud.test.tsx is acceptable since:
  - Core logic is tested in utils and hooks
  - Visual correctness requires browser testing
  - Full integration testing should use Browser Mode or E2E

### Additional Testing (Future - Optional)

- [ ] Add ReactWordcloud.test.tsx using Vitest Browser Mode
- [ ] Add visual regression tests with Playwright
- [ ] Add performance benchmarks for large word sets (>1000 words)
- [ ] Add accessibility tests (ARIA labels, keyboard navigation)

## Documentation - ✅ COMPLETED (Step 20)

- ✅ Comprehensive API documentation (README.md)
- ✅ Usage examples for common scenarios
- ✅ Migration guide (MIGRATION.md)
- ✅ Performance optimization tips
- ✅ Troubleshooting guide

## Demo Application - ✅ COMPLETED (Steps 18-19)

- ✅ Next.js demo app
- ✅ Interactive examples with OptionsPanel
- ✅ 8 different example configurations

## Deployment - ✅ COMPLETED (Step 21)

- ✅ NPM publish setup and configuration

## Performance Optimization (Future)

- [ ] Benchmark with large datasets (1000+ words)
- [ ] Consider implementing optimized-d3-cloud
- [ ] Measure and optimize bundle size

## Features (Future - Low Priority)

- [ ] Export as PNG/SVG functionality
- [ ] Animation options for word transitions
- [ ] Support for custom word shapes/masks
