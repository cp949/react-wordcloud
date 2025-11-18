# TODO: Future Improvements

## Testing (High Priority)

### React/D3 Integration Tests
- [ ] **Fix hooks.test.tsx**
  - Issue: Tests hang in jsdom environment with React/D3 integration
  - Need to mock ResizeObserver properly
  - Need to handle D3 selection lifecycle in tests
  - Consider using happy-dom instead of jsdom

- [ ] **Fix ReactWordcloud.test.tsx**
  - Issue: Component tests hang waiting for SVG rendering
  - D3-cloud layout may not complete in test environment
  - waitFor timeouts not preventing hangs

### Recommended Testing Approach
1. Mock d3-cloud layout function to return synchronously
2. Test component logic separately from D3 rendering
3. Use visual regression tests (Playwright/Chromatic) for actual rendering
4. Focus unit tests on pure functions and React lifecycle only

### Additional Testing
- [ ] Add integration tests with actual browser (Playwright)
- [ ] Add visual regression tests for word cloud rendering
- [ ] Add performance benchmarks for large word sets (>1000 words)
- [ ] Add accessibility tests (ARIA labels, keyboard navigation)
- [ ] Increase code coverage to 80%+

## Documentation
- [ ] Write comprehensive API documentation
- [ ] Add usage examples for common scenarios
- [ ] Create migration guide from original react-wordcloud
- [ ] Document performance optimization tips
- [ ] Add troubleshooting guide

## Demo Application (Steps 16-19)
- [ ] Create Next.js demo app
- [ ] Add interactive examples with live code editor
- [ ] Add customization playground
- [ ] Show all available options and callbacks

## Deployment (Steps 21-22)
- [ ] NPM publish setup and configuration
- [ ] GitHub Pages deployment for demo
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Automated testing and building

## Performance Optimization
- [ ] Benchmark with large datasets
- [ ] Optimize re-rendering with memoization
- [ ] Consider implementing optimized-d3-cloud from original library
- [ ] Add lazy loading for large word sets

## Features (Future)
- [ ] Add export as PNG/SVG functionality
- [ ] Add animation options for word transitions
- [ ] Support for custom word shapes/masks
- [ ] Real-time word cloud updates
