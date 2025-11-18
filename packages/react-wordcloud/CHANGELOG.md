# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-XX

### Added

- ✅ Full React 18 and React 19 support
- ✅ TypeScript 5.9 with strict mode
- ✅ Modern build system with tsup (ESM + CJS dual output)
- ✅ Comprehensive test suite with Vitest 4.0
- ✅ Turborepo monorepo structure
- ✅ Named export for better tree-shaking
- ✅ `style` prop for container styling
- ✅ Full type safety with TypeScript definitions
- ✅ Interactive demo application with Next.js 15

### Changed

- ⚡ Upgraded to D3.js v7+ (from v5)
- ⚡ Updated d3-color to 3.1.0+ (fixes ReDoS CVE-2021-39154)
- ⚡ Removed `defaultProps` for React 19 compatibility
- ⚡ Updated event handling to D3 v7 pattern
- ⚡ Package renamed to `@cp949/react-wordcloud`
- ⚡ Changed from default export to named export
- ⚡ ESM-first architecture

### Fixed

- 🔒 **SECURITY**: Fixed d3-color < 3.1.0 ReDoS vulnerability (CVE-2021-39154)
- 🐛 React 18/19 compatibility issues
- 🐛 TypeScript strict mode errors
- 🐛 D3 event handling deprecation warnings
- 🐛 ResizeObserver integration issues

### Removed

- ❌ CommonJS-only build (ESM is now primary)
- ❌ `defaultProps` (replaced with parameter defaults)
- ❌ D3 v5 dependency
- ❌ Security vulnerabilities

### Migration

See [MIGRATION.md](./MIGRATION.md) for detailed migration guide from `react-wordcloud` to `@cp949/react-wordcloud`.

**Quick Migration:**

```diff
- npm install react-wordcloud
+ npm install @cp949/react-wordcloud

- import ReactWordcloud from 'react-wordcloud';
+ import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### Dependencies

- React: 18.0.0+ or 19.0.0+
- D3.js: 7.0.0+
  - d3-array: ^3.2.4
  - d3-cloud: ^1.2.7
  - d3-scale: ^4.0.2
  - d3-selection: ^3.0.0
  - d3-transition: ^3.0.1
- Tippy.js: ^6.3.7
- seedrandom: ^3.0.5
- lodash.debounce: ^4.0.8

### Development

- TypeScript: 5.9.3
- Vitest: 4.0.10
- tsup: 8.3.5
- Turborepo: 2.3.3

### Breaking Changes

1. **Package name**: `react-wordcloud` → `@cp949/react-wordcloud`
2. **Import**: Default export → Named export
3. **Module system**: CommonJS deprecated, ESM recommended
4. **React version**: Requires React 18+ (React 16/17 not supported)
5. **D3 version**: Requires D3 v7+ (D3 v5/v6 not supported)

### Compatibility

| Version          | React 18 | React 19 | TypeScript 5 | D3 v7 | Security               |
| ---------------- | -------- | -------- | ------------ | ----- | ---------------------- |
| 1.0.0            | ✅       | ✅       | ✅           | ✅    | ✅ No vulnerabilities  |
| 2.7.3 (original) | ⚠️       | ❌       | ⚠️           | ❌    | ⚠️ Has vulnerabilities |

## [0.x.x] - react-wordcloud (original)

See https://github.com/chrisrzhou/react-wordcloud/releases for original package history.

---

## Credits

This is a modernized fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) by Chris Zhou.

**Original Author**: Chris Zhou (https://github.com/chrisrzhou)
**Original License**: MIT
**Fork Maintainer**: @cp949
**Fork Repository**: https://github.com/chrisrzhou/react-wordcloud

### What Changed in This Fork

1. **Security**: Fixed d3-color ReDoS vulnerability
2. **Modernization**: React 18/19, TypeScript 5.9, D3 v7
3. **Build**: Modern tooling (Vitest, tsup, Turborepo)
4. **Quality**: Comprehensive tests, strict TypeScript
5. **Documentation**: Enhanced README, migration guide, examples

### Why Fork?

- Original package had security vulnerabilities
- No React 19 support
- No active maintenance
- Needed modern tooling and testing

### Upstream Compatibility

This fork maintains 100% API compatibility with the original `react-wordcloud@2.7.3`. The only changes are:

- Package name (`@cp949/react-wordcloud`)
- Export style (named export)
- Dependency updates (security fixes)
- Modern tooling (internal)

All React component props and behavior remain identical.
