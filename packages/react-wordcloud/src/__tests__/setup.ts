/**
 * Vitest setup file
 * Runs before all tests
 */

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ResizeObserver for jsdom environment
// ResizeObserver is not available in jsdom, causing tests to fail
// biome-ignore lint/suspicious/noExplicitAny: jsdom에 없는 전역 API를 주입하려면 globalThis 캐스팅이 필요하다
(globalThis as any).ResizeObserver = class ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
};

// Mock SVGElement methods that are not implemented in jsdom
if (typeof SVGElement !== 'undefined') {
  // @ts-expect-error - getBBox is not defined in jsdom
  SVGElement.prototype.getBBox = vi.fn().mockReturnValue({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
}
