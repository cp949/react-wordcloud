# Migration Guide

Guide for migrating from `react-wordcloud` to `@cp949/react-wordcloud`.

## Why Migrate?

- **Security**: Fixes d3-color < 3.1.0 ReDoS vulnerability (CVE-2021-39154)
- **Modern React**: Full React 18 and React 19 support
- **Type Safety**: Enhanced TypeScript 5.9 definitions
- **Maintenance**: Active development with modern tooling

## Breaking Changes

### 1. Package Name

The package has been renamed and scoped.

```diff
- npm install react-wordcloud
+ npm install @cp949/react-wordcloud
```

```diff
- import ReactWordcloud from 'react-wordcloud';
+ import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### 2. Named Export

The component is now a named export instead of default export.

**Before:**

```tsx
import ReactWordcloud from 'react-wordcloud';
```

**After:**

```tsx
import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### 3. No Default Props

React 19 compatibility requires removing `defaultProps`. The component now uses parameter defaults.

**Impact**: None for most users. The default values remain the same.

**Before (internal):**

```tsx
ReactWordcloud.defaultProps = {
  maxWords: 100,
  minSize: [300, 300],
};
```

**After (internal):**

```tsx
function ReactWordcloud({
  maxWords = 100,
  minSize = [300, 300],
  // ...
}) {
  // ...
}
```

### 4. D3 Event Handling

Updated to D3 v7+ event handling pattern.

**Impact**: None for users. Internal implementation change only.

**Before (D3 v5):**

```tsx
// Internal code
d3.event.stopPropagation();
```

**After (D3 v7):**

```tsx
// Internal code
function handler(event) {
  event.stopPropagation();
}
```

### 5. Module System

ESM only, no CommonJS support.

**Before:**

```js
const ReactWordcloud = require('react-wordcloud');
```

**After:**

```js
import { ReactWordcloud } from '@cp949/react-wordcloud';
```

## Step-by-Step Migration

### Step 1: Update Dependencies

```bash
# Remove old package
npm uninstall react-wordcloud

# Install new package
npm install @cp949/react-wordcloud

# Or with yarn
yarn remove react-wordcloud
yarn add @cp949/react-wordcloud

# Or with pnpm
pnpm remove react-wordcloud
pnpm add @cp949/react-wordcloud
```

### Step 2: Update Imports

Find all imports of `react-wordcloud` in your codebase:

```bash
# Find all files importing react-wordcloud
grep -r "from 'react-wordcloud'" src/
grep -r 'from "react-wordcloud"' src/
```

Update each import:

```diff
- import ReactWordcloud from 'react-wordcloud';
+ import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### Step 3: Update Types (TypeScript)

If you're importing types:

```diff
- import ReactWordcloud, { Word, Options, Callbacks } from 'react-wordcloud';
+ import { ReactWordcloud, Word, Options, Callbacks } from '@cp949/react-wordcloud';
```

### Step 4: Verify Your Usage

The API remains 100% compatible. No changes needed to your component usage:

```tsx
// This code works the same in both versions
<ReactWordcloud
  words={words}
  options={{
    fontFamily: 'arial',
    fontSizes: [10, 60],
    rotationAngles: [0, 90],
  }}
  callbacks={{
    onWordClick: handleWordClick,
  }}
/>
```

### Step 5: Test Your Application

```bash
npm test
npm run build
```

## Common Migration Patterns

### Pattern 1: Simple Usage

**Before:**

```tsx
import ReactWordcloud from 'react-wordcloud';

function MyComponent() {
  return <ReactWordcloud words={words} />;
}
```

**After:**

```tsx
import { ReactWordcloud } from '@cp949/react-wordcloud';

function MyComponent() {
  return <ReactWordcloud words={words} />;
}
```

### Pattern 2: With Options

**Before:**

```tsx
import ReactWordcloud from 'react-wordcloud';

function MyComponent() {
  const options = {
    colors: ['#1f77b4', '#ff7f0e'],
    fontFamily: 'arial',
    fontSizes: [10, 60],
  };

  return <ReactWordcloud words={words} options={options} />;
}
```

**After:**

```tsx
import { ReactWordcloud } from '@cp949/react-wordcloud';

function MyComponent() {
  const options = {
    colors: ['#1f77b4', '#ff7f0e'],
    fontFamily: 'arial',
    fontSizes: [10, 60],
  };

  return <ReactWordcloud words={words} options={options} />;
}
```

### Pattern 3: With Callbacks

**Before:**

```tsx
import ReactWordcloud from 'react-wordcloud';

function MyComponent() {
  const callbacks = {
    onWordClick: (word) => console.log(word),
    getWordTooltip: (word) => `${word.text}: ${word.value}`,
  };

  return <ReactWordcloud words={words} callbacks={callbacks} />;
}
```

**After:**

```tsx
import { ReactWordcloud } from '@cp949/react-wordcloud';

function MyComponent() {
  const callbacks = {
    onWordClick: (word) => console.log(word),
    getWordTooltip: (word) => `${word.text}: ${word.value}`,
  };

  return <ReactWordcloud words={words} callbacks={callbacks} />;
}
```

### Pattern 4: TypeScript with Types

**Before:**

```tsx
import ReactWordcloud, { Word, Options } from 'react-wordcloud';
import { useState } from 'react';

function MyComponent() {
  const [words] = useState<Word[]>([{ text: 'React', value: 100 }]);

  const options: Options = {
    fontFamily: 'arial',
  };

  return <ReactWordcloud words={words} options={options} />;
}
```

**After:**

```tsx
import { ReactWordcloud, Word, Options } from '@cp949/react-wordcloud';
import { useState } from 'react';

function MyComponent() {
  const [words] = useState<Word[]>([{ text: 'React', value: 100 }]);

  const options: Partial<Options> = {
    fontFamily: 'arial',
  };

  return <ReactWordcloud words={words} options={options} />;
}
```

## Compatibility Matrix

| Feature                  | react-wordcloud | @cp949/react-wordcloud |
| ------------------------ | --------------- | ---------------------- |
| React 16                 | ✅              | ❌                     |
| React 17                 | ✅              | ❌                     |
| React 18                 | ⚠️              | ✅                     |
| React 19                 | ❌              | ✅                     |
| TypeScript 4.x           | ✅              | ✅                     |
| TypeScript 5.x           | ⚠️              | ✅                     |
| D3 v5                    | ✅              | ❌                     |
| D3 v6                    | ⚠️              | ❌                     |
| D3 v7+                   | ❌              | ✅                     |
| CommonJS                 | ✅              | ❌                     |
| ESM                      | ✅              | ✅                     |
| Security Vulnerabilities | ⚠️              | ✅                     |

## Troubleshooting

### Issue: "Cannot find module '@cp949/react-wordcloud'"

**Solution**: Make sure you've installed the package:

```bash
npm install @cp949/react-wordcloud
```

### Issue: "ReactWordcloud is not a function"

**Solution**: Update your import to use named export:

```tsx
// Wrong
import ReactWordcloud from '@cp949/react-wordcloud';

// Correct
import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### Issue: "require() of ES Module not supported"

**Solution**: This package is ESM only. Update your code to use ES6 imports:

```tsx
// Wrong
const { ReactWordcloud } = require('@cp949/react-wordcloud');

// Correct
import { ReactWordcloud } from '@cp949/react-wordcloud';
```

### Issue: TypeScript errors with Options

**Solution**: Use `Partial<Options>` if you're only setting some options:

```tsx
// Wrong
const options: Options = {
  fontFamily: 'arial',
};

// Correct
const options: Partial<Options> = {
  fontFamily: 'arial',
};
```

## Need Help?

- Check the [README.md](./README.md) for API documentation
- View examples in the [demo app](../../apps/demo)
- Report issues on [GitHub](https://github.com/chrisrzhou/react-wordcloud/issues)

## Rollback

If you need to rollback to the original package:

```bash
npm uninstall @cp949/react-wordcloud
npm install react-wordcloud@2.7.3
```

Note: The original package has known security vulnerabilities and lacks React 19 support.
