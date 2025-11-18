import React, { useEffect, useRef, useMemo } from 'react';
import debounce from 'lodash.debounce';
import type { Props, Callbacks, Options } from './types.js';
import { useResponsiveSvgSelection } from './hooks.js';
import { layout, type LayoutParams } from './layout.js';
import { defaultCallbacks, defaultOptions } from './defaults.js';

/**
 * ReactWordcloud component
 * Renders an interactive word cloud visualization using D3
 */
export function ReactWordcloud({
  callbacks = {},
  maxWords = 100,
  minSize = [300, 300],
  options = {},
  size,
  style,
  words,
}: Props): React.JSX.Element {
  // Merge user-provided callbacks and options with defaults
  const mergedCallbacks: Callbacks = useMemo(
    () => ({
      ...defaultCallbacks,
      ...callbacks,
    }),
    [callbacks]
  );

  const mergedOptions: Options = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    [options]
  );

  // Memoize svgAttributes separately to prevent unnecessary re-renders
  const svgAttributes = useMemo(
    () => mergedOptions.svgAttributes,
    [mergedOptions.svgAttributes]
  );

  // Get responsive SVG selection and size
  const [ref, selection, calculatedSize] = useResponsiveSvgSelection(
    minSize,
    size,
    svgAttributes
  );

  // Debounced layout function to prevent excessive re-renders
  const debouncedLayout = useRef(
    debounce((params: LayoutParams) => {
      layout(params);
    }, 100)
  ).current;

  // Trigger layout when dependencies change
  useEffect(() => {
    if (selection && words.length > 0) {
      debouncedLayout({
        callbacks: mergedCallbacks,
        maxWords,
        options: mergedOptions as Required<Options>,
        selection,
        size: calculatedSize,
        words,
      });
    }
  }, [selection, words, maxWords, calculatedSize, mergedCallbacks, mergedOptions, debouncedLayout]);

  return <div ref={ref} style={style} />;
}

export default ReactWordcloud;
