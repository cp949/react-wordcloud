import { select } from 'd3-selection';
import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import type { MinMaxPair, Selection } from './types.js';
import type { AttributeValue } from './types.js';

/**
 * Custom hook for creating a responsive SVG with D3 selection
 * Handles SVG creation, responsive resizing, and cleanup
 *
 * @param minSize - Minimum [width, height] for the SVG
 * @param initialSize - Optional fixed [width, height]. If undefined, SVG is responsive
 * @param svgAttributes - Optional SVG attributes to apply
 * @returns Tuple of [elementRef, d3Selection, currentSize]
 */
export function useResponsiveSvgSelection(
  minSize: MinMaxPair,
  initialSize: MinMaxPair | undefined,
  svgAttributes: Record<string, AttributeValue> | undefined
): [React.RefObject<HTMLDivElement>, Selection | null, MinMaxPair] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<MinMaxPair>(initialSize ?? [0, 0]);
  const [selection, setSelection] = useState<Selection | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    // Create SVG element with D3
    let svg = select(element).append('svg').style('display', 'block'); // Native inline svg leaves undesired white space

    // Apply custom SVG attributes if provided
    if (typeof svgAttributes === 'object' && svgAttributes !== null) {
      Object.keys(svgAttributes).forEach((key) => {
        const value = svgAttributes[key];
        if (typeof value === 'string') {
          svg = svg.attr(key, value);
        } else if (typeof value === 'function') {
          // AttributeValue can be a callback, but for SVG attributes we expect strings
          // This maintains compatibility with the original API
          svg = svg.attr(key, value as unknown as string);
        }
      });
    }

    // Create group element for word cloud content
    const selectionGroup = svg.append('g');
    setSelection(selectionGroup as unknown as Selection);

    /**
     * Update SVG and group dimensions
     */
    function updateSize(width: number, height: number): void {
      svg.attr('height', height).attr('width', width);
      selectionGroup.attr('transform', `translate(${width / 2}, ${height / 2})`);
      setSize([width, height]);
    }

    // Calculate initial size
    let width = 0;
    let height = 0;

    if (initialSize === undefined) {
      // Use parent element size for responsive mode
      const parent = element.parentElement;
      if (parent) {
        width = parent.offsetWidth;
        height = parent.offsetHeight;
      }
    } else {
      // Use fixed size if provided
      [width, height] = initialSize;
    }

    // Apply minimum size constraints
    width = Math.max(width, minSize[0]);
    height = Math.max(height, minSize[1]);
    updateSize(width, height);

    // Set up ResizeObserver for responsive sizing
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!entries || entries.length === 0) {
        return;
      }

      // Only update size if in responsive mode (no initialSize provided)
      if (initialSize === undefined) {
        const { width: newWidth, height: newHeight } = entries[0].contentRect;
        const constrainedWidth = Math.max(newWidth, minSize[0]);
        const constrainedHeight = Math.max(newHeight, minSize[1]);
        updateSize(constrainedWidth, constrainedHeight);
      }
    });

    resizeObserver.observe(element);

    // Cleanup function
    return () => {
      resizeObserver.unobserve(element);
      select(element).selectAll('*').remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [elementRef, selection, size];
}
