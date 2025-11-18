# @cp949/react-wordcloud

Modern, secure React wordcloud component built with TypeScript, D3.js v7+, and zero security vulnerabilities.

[![NPM Version](https://img.shields.io/npm/v/@cp949/react-wordcloud.svg)](https://www.npmjs.com/package/@cp949/react-wordcloud)
[![License](https://img.shields.io/npm/l/@cp949/react-wordcloud.svg)](https://github.com/chrisrzhou/react-wordcloud/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

## Features

- 🔒 **Secure**: Zero security vulnerabilities, fixed d3-color ReDoS issue
- ⚡ **Modern**: Built with TypeScript 5.9, React 18/19, and D3.js v7+
- 🎨 **Customizable**: Full control over fonts, colors, rotation, scale, and more
- 📱 **Responsive**: Automatically adjusts to container size with ResizeObserver
- 💯 **Type-Safe**: Written in TypeScript with comprehensive type definitions
- 🧪 **Tested**: Comprehensive test suite with Vitest and Testing Library

## Installation

```bash
npm install @cp949/react-wordcloud
# or
yarn add @cp949/react-wordcloud
# or
pnpm add @cp949/react-wordcloud
```

## Quick Start

```tsx
import { ReactWordcloud } from '@cp949/react-wordcloud';

const words = [
  { text: 'React', value: 100 },
  { text: 'TypeScript', value: 90 },
  { text: 'JavaScript', value: 85 },
  { text: 'D3.js', value: 75 },
];

function App() {
  return (
    <div style={{ height: '400px' }}>
      <ReactWordcloud words={words} />
    </div>
  );
}
```

## Props

### `words` (required)

An array of word objects to display in the wordcloud.

```tsx
type Word = {
  text: string;
  value: number;
};
```

### `callbacks` (optional)

Callback functions for word interactions.

```tsx
type Callbacks = {
  getWordTooltip?: (word: Word) => string;
  onWordClick?: (word: Word, event?: MouseEvent) => void;
  onWordMouseOut?: (word: Word, event?: MouseEvent) => void;
  onWordMouseOver?: (word: Word, event?: MouseEvent) => void;
};
```

**Example:**

```tsx
<ReactWordcloud
  words={words}
  callbacks={{
    onWordClick: (word) => console.log('Clicked:', word.text),
    getWordTooltip: (word) => `${word.text}: ${word.value}`,
  }}
/>
```

### `options` (optional)

Customization options for the wordcloud appearance and behavior.

```tsx
type Options = {
  colors?: string[]; // Color palette (default: d3 schemeCategory10)
  deterministic?: boolean; // Deterministic layout (default: false)
  enableOptimizations?: boolean; // Enable optimizations (default: false)
  enableTooltip?: boolean; // Show tooltips (default: true)
  fontFamily?: string; // Font family (default: 'times new roman')
  fontSizes?: [number, number]; // Font size range (default: [4, 32])
  fontStyle?: string; // Font style (default: 'normal')
  fontWeight?: string; // Font weight (default: 'normal')
  padding?: number; // Padding between words (default: 1)
  rotationAngles?: [number, number]; // Rotation range in degrees (default: [-90, 90])
  scale?: 'linear' | 'log' | 'sqrt'; // Scale type (default: 'sqrt')
  spiral?: 'archimedean' | 'rectangular'; // Spiral type (default: 'rectangular')
  svgAttributes?: Record<string, string>; // SVG attributes
  textAttributes?: Record<string, string>; // Text element attributes
  tooltipOptions?: Partial<TippyProps>; // Tippy.js tooltip options
  transitionDuration?: number; // Transition duration in ms (default: 600)
};
```

**Example:**

```tsx
<ReactWordcloud
  words={words}
  options={{
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
    fontFamily: 'arial',
    fontSizes: [10, 60],
    rotationAngles: [0, 0], // No rotation
    scale: 'linear',
    enableTooltip: true,
  }}
/>
```

### `maxWords` (optional)

Maximum number of words to display. Default: `100`.

```tsx
<ReactWordcloud words={words} maxWords={50} />
```

### `minSize` (optional)

Minimum size `[width, height]` in pixels. Default: `[300, 300]`.

```tsx
<ReactWordcloud words={words} minSize={[400, 400]} />
```

### `size` (optional)

Fixed size `[width, height]` in pixels. When not provided, the component will use the container size.

```tsx
<ReactWordcloud words={words} size={[800, 600]} />
```

### `style` (optional)

CSS styles for the container div.

```tsx
<ReactWordcloud words={words} style={{ backgroundColor: '#f0f0f0' }} />
```

## Examples

### Custom Colors

```tsx
const customColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

<ReactWordcloud words={words} options={{ colors: customColors }} />;
```

### No Rotation

```tsx
<ReactWordcloud words={words} options={{ rotationAngles: [0, 0] }} />
```

### Large Font Sizes

```tsx
<ReactWordcloud
  words={words}
  options={{
    fontSizes: [20, 80],
    padding: 5,
    fontWeight: 'bold',
  }}
/>
```

### Deterministic Layout

```tsx
<ReactWordcloud words={words} options={{ deterministic: true }} />
```

### Word Click Handler

```tsx
<ReactWordcloud
  words={words}
  callbacks={{
    onWordClick: (word) => {
      alert(`You clicked: ${word.text}`);
    },
  }}
/>
```

## Migration from react-wordcloud

This library is a modernized fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) with security fixes and React 18/19 support.

### Breaking Changes

1. **Import path**: Package name changed to `@cp949/react-wordcloud`
2. **No defaultProps**: React 19 compatibility - use parameter defaults instead
3. **D3 event handling**: Uses event parameter instead of global `d3.event`
4. **ESM only**: No CommonJS support

### Migration Steps

```diff
- import ReactWordcloud from 'react-wordcloud';
+ import { ReactWordcloud } from '@cp949/react-wordcloud';

- <ReactWordcloud words={words} />
+ <ReactWordcloud words={words} />
```

See [MIGRATION.md](./MIGRATION.md) for detailed migration guide.

## Browser Support

- Modern browsers with ES6+ support
- React 18.0.0 or higher
- React 19.0.0 supported

## Dependencies

- React 18+ or 19+
- D3.js v7+ (d3-array, d3-cloud, d3-scale, d3-selection, d3-transition)
- Tippy.js 6+ (for tooltips)
- seedrandom (for deterministic layouts)
- lodash.debounce (for resize handling)

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Test
pnpm test

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## License

MIT © Chris Zhou

## Credits

This is a modernized fork of [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud) by Chris Zhou, updated with:

- Security fixes (d3-color ReDoS vulnerability)
- React 18/19 compatibility
- TypeScript 5.9
- Modern tooling (Vitest, tsup)
- Zero dependencies vulnerabilities

Original library: https://github.com/chrisrzhou/react-wordcloud
