# @cp949/react-wordcloud

TypeScript, D3.js v7+로 구축된 모던하고 안전한 React 워드클라우드 컴포넌트

[![NPM](https://img.shields.io/npm/v/@cp949/react-wordcloud.svg)](https://www.npmjs.com/package/@cp949/react-wordcloud)
[![License](https://img.shields.io/github/license/cp949/react-wordcloud)](./LICENSE)

한국어 | **[English](./README.md)**

## 🚀 설치

```bash
npm install @cp949/react-wordcloud
```

📖 **문서**: [packages/react-wordcloud](./packages/react-wordcloud)
📦 **NPM 패키지**: https://www.npmjs.com/package/@cp949/react-wordcloud

---

## 프로젝트 개요

본 프로젝트는 [chrisrzhou/react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)의 포크 버전이다.

### 포크 배경

원본 프로젝트에서 사용 중인 d3-color 라이브러리의 보안 취약점을 해결하기 위해 포크를 진행하였다.

## 보안 취약점 정보

- **CVE/GHSA**: GHSA-36jr-mh4h-2g58
- **취약점 유형**: ReDoS (Regular Expression Denial of Service)
- **심각도**: High
- **CWE**: CWE-400 (Uncontrolled Resource Consumption)
- **영향받는 버전**: d3-color < 3.1.0
- **해결 버전**: d3-color >= 3.1.0

### 취약점 설명

d3-color 3.1.0 미만 버전의 정규표현식 처리 로직에서 ReDoS 취약점이 발견되었다. 악의적으로 조작된 입력값을 통해 정규표현식 매칭 시간이 기하급수적으로 증가하며, 이로 인해 시스템 리소스가 고갈될 수 있다.

### 해결 방안

본 포크에서는 모든 D3 의존성을 v7+ 버전으로 업그레이드하여 취약점을 해결하였다:

- ✅ d3-color 3.1.0 이상 버전 사용
- ✅ 모든 D3 관련 패키지를 최신 안전 버전으로 업데이트
- ✅ npm audit 검증 완료: 0 vulnerabilities

---

## 📦 모노레포 구조

본 프로젝트는 Turborepo를 활용한 모노레포 구조로 구성되어 있다:

```
cp949-wordcloud/
├── packages/
│   └── react-wordcloud/    # 메인 라이브러리 (NPM 배포)
├── apps/
│   └── demo/               # Next.js 데모 애플리케이션
└── README.md              # ← 현재 문서
```

### `@cp949/react-wordcloud`

NPM에 배포되는 React 워드클라우드 컴포넌트 라이브러리

주요 특징:
- 🔒 보안 취약점 제로
- ⚡ React 18 & 19 지원
- 💯 TypeScript 5.9 strict mode
- 🎨 완전한 커스터마이징 지원
- 📱 반응형 및 접근성 지원

[패키지 문서 →](./packages/react-wordcloud)

### 데모 애플리케이션

Next.js 15 기반 인터랙티브 데모 애플리케이션

[데모 →](./apps/demo)

---

## 🛠️ 개발 환경 구성

### 시스템 요구사항

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### 설치 및 빌드

```bash
# 의존성 설치
pnpm install

# 전체 패키지 빌드
pnpm build

# 테스트 실행
pnpm test

# 타입 검사
pnpm typecheck

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format
```

### 개발 명령어

```bash
# 라이브러리 watch 모드 실행
pnpm --filter @cp949/react-wordcloud dev

# 데모 애플리케이션 실행
pnpm --filter @cp949/demo dev

# 테스트 watch 모드 실행
pnpm --filter @cp949/react-wordcloud test:watch

# 테스트 커버리지 측정
pnpm --filter @cp949/react-wordcloud test:coverage
```

### 기술 스택

- **Turborepo**: 모노레포 관리 도구
- **pnpm**: 패키지 관리 도구
- **TypeScript**: 정적 타입 검사
- **React**: UI 라이브러리
- **D3.js v7+**: 데이터 시각화
- **Vitest**: 유닛 테스트 프레임워크
- **Next.js 15**: 데모 애플리케이션 프레임워크
- **tsup**: 라이브러리 번들러
- **Tailwind CSS v4**: 스타일링 프레임워크 (데모)

---

## 🤝 기여 가이드

Pull Request를 통한 기여를 환영한다.

### 개발 프로세스

1. 저장소 포크
2. 피처 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 작성
4. 테스트 실행 (`pnpm test`)
5. 타입 검사 실행 (`pnpm typecheck`)
6. 코드 포맷팅 적용 (`pnpm format`)
7. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
8. 브랜치 푸시 (`git push origin feature/amazing-feature`)
9. Pull Request 생성

---

## 📄 라이선스

MIT © Chris Zhou

본 프로젝트는 [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)의 포크이며 동일한 MIT 라이선스를 따른다.

---

## 🙏 크레딧

- **원작자**: Chris Zhou ([@chrisrzhou](https://github.com/chrisrzhou))
- **원본 프로젝트**: [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)
- **포크 관리자**: jjfive ([@cp949](https://github.com/cp949))

---

## 📚 참고 문서

- [NPM 패키지](https://www.npmjs.com/package/@cp949/react-wordcloud)
- [패키지 문서](./packages/react-wordcloud)
- [보안 권고](https://github.com/advisories/GHSA-36jr-mh4h-2g58)
- [React 문서](https://react.dev)
- [D3.js 문서](https://d3js.org)
- [Turborepo 문서](https://turbo.build)
