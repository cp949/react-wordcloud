/**
 * Vitest setup file
 * Runs before all tests
 */

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ResizeObserver for jsdom environment
// ResizeObserver is not available in jsdom, causing tests to fail
global.ResizeObserver = class ResizeObserver {
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
