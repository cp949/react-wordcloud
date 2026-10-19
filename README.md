# @cp949/react-wordcloud

Modern, secure React wordcloud component built with TypeScript and D3.js v7+

[![NPM](https://img.shields.io/npm/v/@cp949/react-wordcloud.svg)](https://www.npmjs.com/package/@cp949/react-wordcloud)
[![License](https://img.shields.io/github/license/cp949/react-wordcloud)](./LICENSE)

**[한국어 문서](./README.ko.md)** | English

## 🚀 Installation

```bash
npm install @cp949/react-wordcloud
```

📖 **Documentation**: [packages/react-wordcloud](./packages/react-wordcloud)
📦 **NPM Package**: https://www.npmjs.com/package/@cp949/react-wordcloud

---

## Project Overview

This project is a fork of [chrisrzhou/react-wordcloud](https://github.com/chrisrzhou/react-wordcloud).

### Why Fork?

This fork was created to address a critical security vulnerability found in the d3-color library used by the original project.

## Security Vulnerability Details

- **CVE/GHSA**: GHSA-36jr-mh4h-2g58
- **Type**: ReDoS (Regular Expression Denial of Service)
- **Severity**: High
- **CWE**: CWE-400 (Uncontrolled Resource Consumption)
- **Affected Versions**: d3-color < 3.1.0
- **Fixed Version**: d3-color >= 3.1.0

### Vulnerability Description

A ReDoS vulnerability was discovered in the regular expression processing logic of d3-color versions prior to 3.1.0. Maliciously crafted input can cause exponential growth in regex matching time, leading to resource exhaustion.

### Resolution

This fork resolves the vulnerability by upgrading all D3 dependencies to v7+:

- ✅ Using d3-color 3.1.0 or higher
- ✅ All D3-related packages updated to latest safe versions
- ✅ npm audit verified: 0 vulnerabilities

---

## 📦 Monorepo Structure

This project uses Turborepo for monorepo management:

```
cp949-wordcloud/
├── packages/
│   └── react-wordcloud/    # Main library (published to NPM)
├── apps/
│   └── demo/               # Next.js demo application
└── README.md              # ← You are here
```

### `@cp949/react-wordcloud`

React wordcloud component library published to NPM

Key Features:

- 🔒 Zero security vulnerabilities
- ⚡ React 18 & 19 support
- 💯 TypeScript 6.0 strict mode
- 🎨 Fully customizable
- 📱 Responsive and accessible

[View Package Documentation →](./packages/react-wordcloud)

### Demo Application

Interactive demo application built with Next.js 16

[View Demo →](./apps/demo)

---

## 🛠️ Development Setup

### System Requirements

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Installation & Build

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format code
pnpm format
```

### Development Commands

```bash
# Run library in watch mode
pnpm --filter @cp949/react-wordcloud dev

# Run demo application
pnpm --filter @cp949/demo dev

# Run tests in watch mode
pnpm --filter @cp949/react-wordcloud test:watch

# Run tests with coverage
pnpm --filter @cp949/react-wordcloud test:coverage
```

### Tech Stack

- **Turborepo**: Monorepo management
- **pnpm**: Package manager
- **TypeScript**: Static type checking
- **React**: UI library
- **D3.js v7+**: Data visualization
- **Vitest**: Unit testing framework
- **Next.js 16**: Demo application framework
- **tsdown**: Library bundler
- **Tailwind CSS v4**: Styling framework (demo)

---

## 🤝 Contributing

Contributions are welcome via Pull Requests.

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Run type checking (`pnpm typecheck`)
6. Format code (`pnpm format`)
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to branch (`git push origin feature/amazing-feature`)
9. Create a Pull Request

---

## 📄 License

MIT © Chris Zhou

This project is a fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) and maintains the same MIT license.

---

## 🙏 Credits

- **Original Author**: Chris Zhou ([@chrisrzhou](https://github.com/chrisrzhou))
- **Original Project**: [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)
- **Fork Maintainer**: jjfive ([@cp949](https://github.com/cp949))

---

## 📚 Resources

- [NPM Package](https://www.npmjs.com/package/@cp949/react-wordcloud)
- [Package Documentation](./packages/react-wordcloud)
- [Security Advisory](https://github.com/advisories/GHSA-36jr-mh4h-2g58)
- [React Documentation](https://react.dev)
- [D3.js Documentation](https://d3js.org)
- [Turborepo Documentation](https://turbo.build)
