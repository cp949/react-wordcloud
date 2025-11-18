# @cp949/react-wordcloud

Modern, secure React wordcloud component built with TypeScript, D3.js v7+, and zero security vulnerabilities.

This is a modernized fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) with security fixes and React 18/19 support.

## 🚀 Quick Links

- **Package**: [packages/react-wordcloud](./packages/react-wordcloud)
- **Demo**: [apps/demo](./apps/demo)
- **Documentation**: [README](./packages/react-wordcloud/README.md)
- **Migration Guide**: [MIGRATION.md](./packages/react-wordcloud/MIGRATION.md)
- **Changelog**: [CHANGELOG.md](./packages/react-wordcloud/CHANGELOG.md)

## 📦 Packages

This is a Turborepo monorepo containing:

### `@cp949/react-wordcloud`

The main React wordcloud component library.

- 🔒 Zero security vulnerabilities
- ⚡ React 18 & 19 support
- 💯 TypeScript 5.9 with strict mode
- 🎨 Fully customizable
- 📱 Responsive and accessible

[View Package →](./packages/react-wordcloud)

### Demo Application

Interactive demo built with Next.js 15 showcasing all features.

- Live examples with code snippets
- Interactive options panel
- Multiple configuration examples
- Responsive design

[View Demo →](./apps/demo)

## 🛠️ Development

This project uses:

- **Turborepo**: Monorepo management
- **pnpm**: Package management
- **TypeScript**: Type safety
- **Vitest**: Unit testing
- **Next.js**: Demo application
- **tsup**: Library bundling

### Getting Started

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

# Format
pnpm format

# Run demo app
cd apps/demo
pnpm dev
```

### Project Structure

```
.
├── packages/
│   └── react-wordcloud/     # Main library
│       ├── src/
│       │   ├── ReactWordcloud.tsx
│       │   ├── types.ts
│       │   ├── defaults.ts
│       │   ├── hooks/
│       │   ├── render/
│       │   └── utils/
│       ├── test/
│       ├── README.md
│       ├── MIGRATION.md
│       └── CHANGELOG.md
├── apps/
│   └── demo/                # Next.js demo app
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   └── lib/
│       └── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## 🔒 Security

This fork addresses critical security vulnerabilities:

- **CVE-2021-39154**: d3-color < 3.1.0 ReDoS vulnerability
- Updated all D3 dependencies to v7+
- Zero npm audit vulnerabilities

## 📝 Why This Fork?

The original `react-wordcloud` package:

- Had security vulnerabilities (d3-color ReDoS)
- Lacked React 19 support
- Used deprecated D3 v5 patterns
- Had no active maintenance

This fork provides:

- ✅ Security fixes
- ✅ React 18/19 compatibility
- ✅ Modern tooling (TypeScript 5.9, Vitest, tsup)
- ✅ Comprehensive documentation
- ✅ Active maintenance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

MIT © Chris Zhou

This project is a fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) and maintains the same MIT license.

## 🙏 Credits

- **Original Author**: Chris Zhou ([@chrisrzhou](https://github.com/chrisrzhou))
- **Original Project**: [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)
- **Fork Maintainer**: [@cp949](https://github.com/cp949)

## 📚 Resources

- [React Documentation](https://react.dev)
- [D3.js Documentation](https://d3js.org)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Turborepo Documentation](https://turbo.build)
- [Next.js Documentation](https://nextjs.org)
