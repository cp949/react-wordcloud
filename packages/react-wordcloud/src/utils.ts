import { max, min, range } from 'd3-array';
import { scaleLinear, scaleLog, scaleOrdinal, scaleSqrt, ScaleLinear } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import type { Word, MinMaxPair, Scale } from './types.js';

/**
 * Extended Word interface with layout properties
 * These properties are added by d3-cloud during layout calculation
 */
export interface LayoutWord extends Word {
  size?: number;
  x?: number;
  y?: number;
  rotate?: number;
}

/**
 * Random number generator function type
 */
type RandomFunction = () => number;

/**
 * Choose a random element from an array
 * @param array - Array to choose from
 * @param random - Random number generator function
 * @returns Randomly selected element
 */
export function choose<T>(array: T[], random: RandomFunction): T {
  return array[Math.floor(random() * array.length)];
}

/**
 * Get default color scheme (D3 Category10 with 20 colors)
 * @returns Array of 20 colors
 */
export function getDefaultColors(): string[] {
  return range(20)
    .map((number) => number.toString())
    .map(scaleOrdinal(schemeCategory10));
}

/**
 * Create a D3 scale function for font sizes based on word values
 * @param words - Array of words
 * @param fontSizes - Min and max font sizes [min, max]
 * @param scale - Scale type ('linear', 'log', or 'sqrt')
 * @returns D3 scale function
 */
export function getFontScale(
  words: Word[],
  fontSizes: MinMaxPair,
  scale: Scale
): ScaleLinear<number, number> {
  const minSize = min(words, (word) => Number(word.value)) ?? 0;
  const maxSize = max(words, (word) => Number(word.value)) ?? 0;

  let fontScale: ScaleLinear<number, number>;

  switch (scale) {
    case 'log':
      fontScale = scaleLog().domain([minSize, maxSize]).range(fontSizes);
      break;
    case 'sqrt':
      fontScale = scaleSqrt().domain([minSize, maxSize]).range(fontSizes);
      break;
    case 'linear':
    default:
      fontScale = scaleLinear().domain([minSize, maxSize]).range(fontSizes);
      break;
  }

  return fontScale;
}

/**
 * Get font size CSS string from word
 * @param word - Word with size property set by layout
 * @returns Font size string (e.g., "24px")
 */
export function getFontSize(word: LayoutWord): string {
  return `${word.size ?? 0}px`;
}

/**
 * Get text content from word
 * @param word - Word object
 * @returns Text content
 */
export function getText(word: Word): string {
  return word.text;
}

/**
 * Get SVG transform attribute value for word positioning
 * @param word - Word with x, y, and rotate properties set by layout
 * @returns Transform string (e.g., "translate(100, 50)rotate(45)")
 */
export function getTransform(word: LayoutWord): string {
  const translate = `translate(${word.x ?? 0}, ${word.y ?? 0})`;
  const rotate = typeof word.rotate === 'number' ? `rotate(${word.rotate})` : '';
  return translate + rotate;
}

/**
 * Calculate rotation angle for a word
 * @param rotations - Number of rotation angles to generate
 * @param rotationAngles - Min and max rotation angles [min, max]
 * @param random - Random number generator function
 * @returns Rotation angle in degrees
 */
export function rotate(
  rotations: number,
  rotationAngles: MinMaxPair,
  random: RandomFunction
): number {
  if (rotations < 1) {
    return 0;
  }

  let angles: number[] = [];

  if (rotations === 1) {
    angles = [rotationAngles[0]];
  } else {
    angles = [...rotationAngles];
    const increment = (rotationAngles[1] - rotationAngles[0]) / (rotations - 1);
    let angle = rotationAngles[0] + increment;
    while (angle < rotationAngles[1]) {
      angles.push(angle);
      angle += increment;
    }
  }

  return choose(angles, random);
}
