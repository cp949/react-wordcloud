// ESLint 9 flat config
// eslint-config-next 16부터 .eslintrc 형식과 `next lint` 명령이 제거되어 flat config로 전환
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default config;
