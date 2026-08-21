# @cp949/react-wordcloud

TypeScript, D3.js v7+로 구축된 모던하고 안전한 React 워드클라우드 컴포넌트

[![NPM Version](https://img.shields.io/npm/v/@cp949/react-wordcloud.svg)](https://www.npmjs.com/package/@cp949/react-wordcloud)
[![License](https://img.shields.io/npm/l/@cp949/react-wordcloud.svg)](https://github.com/cp949/react-wordcloud/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

한국어 | **[English](./README.md)**

## 주요 특징

- 🔒 **보안**: d3-color ReDoS 취약점 수정, 제로 보안 취약점
- ⚡ **모던**: TypeScript 6.0, React 18/19, D3.js v7+로 구축
- 🎨 **커스터마이징**: 폰트, 색상, 회전, 스케일 등 완전한 제어
- 📱 **반응형**: ResizeObserver를 통한 컨테이너 크기 자동 조정
- 💯 **타입 안전**: 포괄적인 타입 정의를 갖춘 TypeScript 작성
- 🧪 **테스트**: Vitest와 Testing Library를 활용한 포괄적인 테스트 스위트

## 설치

```bash
npm install @cp949/react-wordcloud
# 또는
yarn add @cp949/react-wordcloud
# 또는
pnpm add @cp949/react-wordcloud
```

## 빠른 시작

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

## API 레퍼런스

### `words` (필수)

워드클라우드에 표시할 단어 객체 배열

```tsx
type Word = {
  text: string;
  value: number;
};
```

### `callbacks` (선택)

단어 상호작용을 위한 콜백 함수

```tsx
type Callbacks = {
  getWordTooltip?: (word: Word) => string;
  onWordClick?: (word: Word, event?: MouseEvent) => void;
  onWordMouseOut?: (word: Word, event?: MouseEvent) => void;
  onWordMouseOver?: (word: Word, event?: MouseEvent) => void;
};
```

**예제:**

```tsx
<ReactWordcloud
  words={words}
  callbacks={{
    onWordClick: (word) => console.log('클릭됨:', word.text),
    getWordTooltip: (word) => `${word.text}: ${word.value}`,
  }}
/>
```

### `options` (선택)

워드클라우드 외관 및 동작 커스터마이징 옵션

```tsx
type Options = {
  colors?: string[]; // 색상 팔레트 (기본값: d3 schemeCategory10)
  deterministic?: boolean; // 결정적 레이아웃 (기본값: false)
  enableOptimizations?: boolean; // 최적화 활성화 (기본값: false)
  enableTooltip?: boolean; // 툴팁 표시 (기본값: true)
  fontFamily?: string; // 폰트 패밀리 (기본값: 'times new roman')
  fontSizes?: [number, number]; // 폰트 크기 범위 (기본값: [4, 32])
  fontStyle?: string; // 폰트 스타일 (기본값: 'normal')
  fontWeight?: string; // 폰트 굵기 (기본값: 'normal')
  padding?: number; // 단어 간 패딩 (기본값: 1)
  rotationAngles?: [number, number]; // 회전 범위 (도) (기본값: [-90, 90])
  scale?: 'linear' | 'log' | 'sqrt'; // 스케일 타입 (기본값: 'sqrt')
  spiral?: 'archimedean' | 'rectangular'; // 나선 타입 (기본값: 'rectangular')
  svgAttributes?: Record<string, string>; // SVG 속성
  textAttributes?: Record<string, string>; // 텍스트 요소 속성
  tooltipOptions?: Partial<TippyProps>; // Tippy.js 툴팁 옵션
  transitionDuration?: number; // 전환 시간 (ms) (기본값: 600)
};
```

**예제:**

```tsx
<ReactWordcloud
  words={words}
  options={{
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
    fontFamily: 'arial',
    fontSizes: [10, 60],
    rotationAngles: [0, 0], // 회전 없음
    scale: 'linear',
    enableTooltip: true,
  }}
/>
```

### `maxWords` (선택)

표시할 최대 단어 수. 기본값: `100`

```tsx
<ReactWordcloud words={words} maxWords={50} />
```

### `minSize` (선택)

최소 크기 `[width, height]` (픽셀). 기본값: `[300, 300]`

```tsx
<ReactWordcloud words={words} minSize={[400, 400]} />
```

### `size` (선택)

고정 크기 `[width, height]` (픽셀). 제공하지 않으면 컨테이너 크기를 사용한다.

```tsx
<ReactWordcloud words={words} size={[800, 600]} />
```

### `style` (선택)

컨테이너 div의 CSS 스타일

```tsx
<ReactWordcloud words={words} style={{ backgroundColor: '#f0f0f0' }} />
```

## 예제

### 커스텀 색상

```tsx
const customColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

<ReactWordcloud words={words} options={{ colors: customColors }} />;
```

### 회전 없음

```tsx
<ReactWordcloud words={words} options={{ rotationAngles: [0, 0] }} />
```

### 큰 폰트 크기

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

### 결정적 레이아웃

```tsx
<ReactWordcloud words={words} options={{ deterministic: true }} />
```

### 단어 클릭 핸들러

```tsx
<ReactWordcloud
  words={words}
  callbacks={{
    onWordClick: (word) => {
      alert(`클릭: ${word.text}`);
    },
  }}
/>
```

## react-wordcloud에서 마이그레이션

본 라이브러리는 보안 수정 및 React 18/19 지원이 추가된 [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)의 모던화된 포크이다.

### 주요 변경사항

1. **Import 경로**: 패키지명이 `@cp949/react-wordcloud`로 변경
2. **defaultProps 제거**: React 19 호환성 - 파라미터 기본값 사용
3. **D3 이벤트 처리**: 전역 `d3.event` 대신 이벤트 파라미터 사용
4. **ESM 전용**: CommonJS 지원 제거

### 마이그레이션 단계

```diff
- import ReactWordcloud from 'react-wordcloud';
+ import { ReactWordcloud } from '@cp949/react-wordcloud';

  <ReactWordcloud words={words} />
```

자세한 마이그레이션 가이드는 [MIGRATION.md](./MIGRATION.md)를 참조한다.

## 브라우저 지원

- ES6+ 지원 모던 브라우저
- React 18.0.0 이상
- React 19.0.0 지원

## 의존성

- React 18+ 또는 19+
- D3.js v7+ (d3-array, d3-cloud, d3-scale, d3-selection, d3-transition)
- Tippy.js 6+ (툴팁)
- seedrandom (결정적 레이아웃)
- lodash.debounce (리사이즈 처리)

## 개발

```bash
# 의존성 설치
pnpm install

# 빌드
pnpm build

# 테스트
pnpm test

# 타입 검사
pnpm typecheck

# 린트
pnpm lint
```

## 라이선스

MIT © Chris Zhou

## 크레딧

본 라이브러리는 Chris Zhou의 [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)를 모던화한 포크이며, 다음 사항이 업데이트되었다:

- 보안 수정 (d3-color ReDoS 취약점)
- React 18/19 호환성
- TypeScript 6.0
- 모던 도구 (Vitest, tsup)
- 의존성 취약점 제로

원본 라이브러리: https://github.com/chrisrzhou/react-wordcloud
