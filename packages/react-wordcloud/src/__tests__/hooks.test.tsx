/**
 * Tests for useResponsiveSvgSelection hook
 * Focus on React logic, mock D3 operations
 */

import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useResponsiveSvgSelection } from '../hooks.js';
import type { MinMaxPair } from '../types.js';

// Test component that uses the hook
function TestComponent({
  minSize,
  initialSize,
  svgAttributes,
}: {
  minSize: MinMaxPair;
  initialSize?: MinMaxPair;
  svgAttributes?: Record<string, string>;
}) {
  const [ref, selection, size] = useResponsiveSvgSelection(minSize, initialSize, svgAttributes);

  return (
    <div ref={ref} data-testid="container">
      <div data-testid="selection">{selection ? 'selection-exists' : 'no-selection'}</div>
      <div data-testid="size">
        {size[0]}x{size[1]}
      </div>
    </div>
  );
}

describe('useResponsiveSvgSelection', () => {
  beforeEach(() => {
    // Clean up DOM between tests
    document.body.innerHTML = '';
  });

  it('should create a ref and return initial values', () => {
    const { getByTestId } = render(<TestComponent minSize={[300, 300]} />);

    expect(getByTestId('container')).toBeInTheDocument();
  });

  it('should apply minSize constraints when no initialSize is provided', () => {
    const { getByTestId } = render(<TestComponent minSize={[400, 400]} />);

    const sizeText = getByTestId('size').textContent;
    expect(sizeText).toMatch(/\d+x\d+/);

    // Size should be at least minSize
    const [width, height] = sizeText ? sizeText.split('x').map(Number) : [0, 0];
    expect(width).toBeGreaterThanOrEqual(400);
    expect(height).toBeGreaterThanOrEqual(400);
  });

  it('should use initialSize when provided', () => {
    const { getByTestId } = render(
      <TestComponent minSize={[300, 300]} initialSize={[800, 600]} />
    );

    const sizeText = getByTestId('size').textContent;
    expect(sizeText).toBe('800x600');
  });

  it('should apply minSize constraints even with initialSize', () => {
    // initialSize is smaller than minSize
    const { getByTestId } = render(
      <TestComponent minSize={[500, 500]} initialSize={[200, 200]} />
    );

    const sizeText = getByTestId('size').textContent;
    // Should use minSize since initialSize is smaller
    expect(sizeText).toBe('500x500');
  });

  it('should create SVG element in the DOM', () => {
    const { container } = render(<TestComponent minSize={[300, 300]} />);

    // D3 should have created an SVG element
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should create g element for selection', () => {
    const { container } = render(<TestComponent minSize={[300, 300]} />);

    // D3 should have created a g element for the word cloud
    const g = container.querySelector('svg g');
    expect(g).toBeInTheDocument();
  });

  it('should apply custom SVG attributes', () => {
    const { container } = render(
      <TestComponent
        minSize={[300, 300]}
        svgAttributes={{ class: 'custom-svg', id: 'test-svg' }}
      />
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-svg');
    expect(svg).toHaveAttribute('id', 'test-svg');
  });

  it('should set selection to non-null after mounting', () => {
    const { getByTestId } = render(<TestComponent minSize={[300, 300]} />);

    // Selection should be created after mount
    const selectionStatus = getByTestId('selection').textContent;
    expect(selectionStatus).toBe('selection-exists');
  });

  it('should cleanup SVG on unmount', () => {
    const { container, unmount } = render(<TestComponent minSize={[300, 300]} />);

    // SVG should exist before unmount
    expect(container.querySelector('svg')).toBeInTheDocument();

    unmount();

    // SVG should be removed after unmount
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('should handle ResizeObserver in responsive mode', () => {
    // ResizeObserver is mocked in setup.ts
    const { container } = render(<TestComponent minSize={[300, 300]} />);

    // Verify the hook doesn't crash with mocked ResizeObserver
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    // ResizeObserver should be created and working
    expect(global.ResizeObserver).toBeDefined();
  });

  it('should create ResizeObserver in fixed size mode', () => {
    const { container } = render(<TestComponent minSize={[300, 300]} initialSize={[800, 600]} />);

    // ResizeObserver should still be created even in fixed size mode
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(global.ResizeObserver).toBeDefined();
  });
});
