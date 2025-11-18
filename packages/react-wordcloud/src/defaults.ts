import type { Callbacks, Options, Word } from './types.js';
import { getDefaultColors } from './utils.js';

/**
 * Default callback functions
 */
export const defaultCallbacks: Callbacks = {
  getWordTooltip: (word: Word) => `${word.text} (${word.value})`,
};

/**
 * Default options for wordcloud
 */
export const defaultOptions: Options = {
  colors: getDefaultColors(),
  deterministic: false,
  enableOptimizations: false,
  enableTooltip: true,
  fontFamily: 'times new roman',
  fontSizes: [4, 32],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotationAngles: [-90, 90],
  scale: 'sqrt',
  spiral: 'rectangular',
  svgAttributes: {},
  textAttributes: {},
  tooltipOptions: {},
  transitionDuration: 600,
};
