/**
 * @cp949/react-wordcloud
 * React + D3 wordcloud component with security fixes and modern tooling
 */

// Export all types
export type {
  Word,
  Callbacks,
  CallbacksProp,
  Options,
  OptionsProp,
  Props,
  MinMaxPair,
  Scale,
  Spiral,
  Optional,
  AttributeValue,
  WordToStringCallback,
  WordEventCallback,
  Selection,
  Enter,
} from './types.js';

// Export utility functions
export {
  choose,
  getDefaultColors,
  getFontScale,
  getFontSize,
  getText,
  getTransform,
  rotate,
} from './utils.js';

// Export utility types
export type { LayoutWord } from './utils.js';

// Export React hooks
export { useResponsiveSvgSelection } from './hooks.js';

// Export main component
export { ReactWordcloud, default } from './ReactWordcloud.js';

// Export defaults
export { defaultCallbacks, defaultOptions } from './defaults.js';
