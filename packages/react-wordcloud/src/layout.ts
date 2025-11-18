import 'd3-transition';
import { descending } from 'd3-array';
import d3Cloud from 'd3-cloud';
import seedrandom from 'seedrandom';
import tippy, { Instance as TippyInstance } from 'tippy.js';
import type { Word, MinMaxPair, Options, CallbacksProp, Selection } from './types.js';
import type { LayoutWord } from './utils.js';
import { choose, getFontScale, getFontSize, getText, getTransform, rotate } from './utils.js';

/**
 * Layout function parameters
 */
export interface LayoutParams {
  callbacks: CallbacksProp;
  maxWords: number;
  options: Required<Options>;
  selection: Selection;
  size: MinMaxPair;
  words: Word[];
}

/**
 * Layout function - configures and executes d3-cloud word layout
 * Implements recursive font scaling to fit all words
 *
 * @param params - Layout parameters
 */
export function layout(params: LayoutParams): void {
  const MAX_LAYOUT_ATTEMPTS = 10;
  const SHRINK_FACTOR = 0.95;

  const { callbacks, maxWords, options, selection, size, words } = params;
  const {
    deterministic,
    fontFamily,
    fontStyle,
    fontSizes,
    fontWeight,
    padding,
    randomSeed,
    rotations,
    rotationAngles,
    spiral,
    scale,
  } = options;

  // Sort words by value (descending) and limit to maxWords
  const sortedWords = words
    .concat()
    .sort((x, y) => descending(x.value, y.value))
    .slice(0, maxWords);

  // Initialize random number generator
  const random = seedrandom(deterministic ? randomSeed || 'deterministic' : undefined);

  // Create d3-cloud instance
  const cloud = d3Cloud<Word>();

  // Configure cloud layout
  cloud
    .size(size)
    .padding(padding)
    .words(sortedWords.map((word) => ({ ...word }))) // Clone words to avoid mutation
    .rotate(() => {
      if (rotations === undefined) {
        // Default rotation algorithm: -90, -60, -30, 0, 30, 60, 90 degrees
        return (~~(random() * 6) - 3) * 30;
      }
      return rotate(rotations, rotationAngles, random);
    })
    .spiral(spiral)
    .random(random)
    .text(getText)
    .font(fontFamily)
    .fontStyle(fontStyle)
    .fontWeight(fontWeight);

  /**
   * Recursive draw function with font size adjustment
   * If not all words fit, shrink font sizes and retry
   */
  function draw(currentFontSizes: MinMaxPair, attempts = 1): void {
    cloud
      .fontSize((word) => {
        const fontScale = getFontScale(sortedWords, currentFontSizes, scale);
        return fontScale(word.value);
      })
      .on('end', (computedWords: LayoutWord[]) => {
        /**
         * KNOWN ISSUE: https://github.com/jasondavies/d3-cloud/issues/36
         * d3-cloud may fail to layout all words due to space constraints
         * Recursively layout and decrease font-sizes by SHRINK_FACTOR
         * Bail out with warning after MAX_LAYOUT_ATTEMPTS
         */
        const missingWords = sortedWords.length - computedWords.length;

        if (missingWords > 0 && attempts <= MAX_LAYOUT_ATTEMPTS) {
          if (attempts === MAX_LAYOUT_ATTEMPTS) {
            console.warn(
              `Unable to layout ${missingWords} word(s) after ${attempts} attempts. ` +
                `Consider: (1) Increasing container size, ` +
                `(2) Lowering max font size, ` +
                `(3) Limiting rotation angles.`
            );
          }

          // Shrink font sizes and retry
          const minFontSize = Math.max(currentFontSizes[0] * SHRINK_FACTOR, 1);
          const maxFontSize = Math.max(currentFontSizes[1] * SHRINK_FACTOR, minFontSize);

          draw([minFontSize, maxFontSize], attempts + 1);
        } else {
          // Layout successful or max attempts reached - render words
          render({
            callbacks,
            options,
            random,
            selection,
            words: computedWords,
          });
        }
      })
      .start();
  }

  // Start layout with initial font sizes
  draw(fontSizes);
}

/**
 * Render function parameters
 */
export interface RenderParams {
  callbacks: CallbacksProp;
  options: Required<Options>;
  random: seedrandom.PRNG;
  selection: Selection;
  words: LayoutWord[];
}

/**
 * Render function - renders words using D3 selection with enter-update-exit pattern
 * Handles SVG text elements, transitions, tooltips, and event handlers
 *
 * @param params - Render parameters
 */
export function render(params: RenderParams): void {
  const { callbacks, options, random, selection, words } = params;
  const { getWordColor, getWordTooltip, onWordClick, onWordMouseOver, onWordMouseOut } = callbacks;
  const { colors, enableTooltip, fontStyle, fontWeight, textAttributes, tooltipOptions } = options;
  const { fontFamily, transitionDuration } = options;

  /**
   * Get fill color for a word
   */
  function getFill(word: LayoutWord): string {
    return getWordColor ? getWordColor(word) : choose(colors, random);
  }

  // Tooltip instance tracking
  let tooltipInstance: TippyInstance | null = null;

  // Select all text elements and bind data
  const vizWords = selection.selectAll<SVGTextElement, LayoutWord>('text').data(words);

  // Enter-update-exit pattern
  vizWords.join(
    // Enter: create new text elements
    (enter) => {
      let text = enter
        .append('text')
        .on('click', function (event: MouseEvent, word: LayoutWord) {
          if (onWordClick) {
            onWordClick(word, event);
          }
        })
        .on('mouseover', function (event: MouseEvent, word: LayoutWord) {
          if (enableTooltip && (!tooltipInstance || tooltipInstance.state.isDestroyed)) {
            tooltipInstance = tippy(event.target as Element, {
              animation: 'scale',
              arrow: true,
              content: () => (getWordTooltip ? getWordTooltip(word) : word.text),
              onHidden: (instance) => {
                instance.destroy();
                tooltipInstance = null;
              },
              ...tooltipOptions,
            });
          }

          if (onWordMouseOver) {
            onWordMouseOver(word, event);
          }
        })
        .on('mouseout', function (event: MouseEvent, word: LayoutWord) {
          if (tooltipInstance && !tooltipInstance.state.isVisible) {
            tooltipInstance.destroy();
            tooltipInstance = null;
          }

          if (onWordMouseOut) {
            onWordMouseOut(word, event);
          }
        })
        .attr('cursor', onWordClick ? 'pointer' : 'default')
        .attr('fill', getFill)
        .attr('font-family', fontFamily)
        .attr('font-style', fontStyle)
        .attr('font-weight', fontWeight)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(0, 0) rotate(0)');

      // Apply custom text attributes if provided
      if (typeof textAttributes === 'object' && textAttributes !== null) {
        Object.keys(textAttributes).forEach((key) => {
          const value = textAttributes[key];
          if (typeof value === 'string') {
            text = text.attr(key, value);
          } else if (typeof value === 'function') {
            // AttributeValue can be a callback
            text = text.attr(key, value as (word: LayoutWord) => string);
          }
        });
      }

      // Transition to final state
      text.call((enter) =>
        enter
          .transition()
          .duration(transitionDuration)
          .attr('font-size', getFontSize)
          .attr('transform', getTransform)
          .text(getText)
      );

      return text;
    },
    // Update: update existing text elements
    (update) => {
      update
        .transition()
        .duration(transitionDuration)
        .attr('fill', getFill)
        .attr('font-family', fontFamily)
        .attr('font-size', getFontSize)
        .attr('transform', getTransform)
        .text(getText);

      return update;
    },
    // Exit: remove text elements with fade out
    (exit) => {
      exit.transition().duration(transitionDuration).attr('fill-opacity', 0).remove();

      return exit;
    }
  );
}
