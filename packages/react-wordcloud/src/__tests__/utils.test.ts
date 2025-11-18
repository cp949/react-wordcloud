/**
 * Utility functions tests
 */

import { describe, it, expect } from 'vitest';
import {
  choose,
  getDefaultColors,
  getFontScale,
  getFontSize,
  getText,
  getTransform,
  rotate,
} from '../utils.js';
import type { Word } from '../types.js';

describe('utils', () => {
  describe('choose', () => {
    it('should return a random element from array', () => {
      const array = ['a', 'b', 'c'];
      const mockRandom = () => 0.5;
      const result = choose(array, mockRandom);
      expect(array).toContain(result);
    });
  });

  describe('getDefaultColors', () => {
    it('should return 20 color strings', () => {
      const colors = getDefaultColors();
      expect(colors).toHaveLength(20);
      colors.forEach((color) => {
        expect(typeof color).toBe('string');
      });
    });
  });

  describe('getFontScale', () => {
    const words: Word[] = [
      { text: 'small', value: 10 },
      { text: 'medium', value: 50 },
      { text: 'large', value: 100 },
    ];

    it('should create a linear scale by default', () => {
      const fontSizes: [number, number] = [10, 50];
      const scale = getFontScale(words, fontSizes, 'linear');
      expect(scale(10)).toBe(10);
      expect(scale(100)).toBe(50);
    });

    it('should create a sqrt scale', () => {
      const fontSizes: [number, number] = [10, 50];
      const scale = getFontScale(words, fontSizes, 'sqrt');
      const result = scale(50);
      expect(result).toBeGreaterThan(10);
      expect(result).toBeLessThan(50);
    });

    it('should create a log scale', () => {
      const fontSizes: [number, number] = [10, 50];
      const scale = getFontScale(words, fontSizes, 'log');
      const result = scale(50);
      expect(result).toBeGreaterThan(10);
      expect(result).toBeLessThan(50);
    });
  });

  describe('getFontSize', () => {
    it('should return font size string from word object', () => {
      const word = { text: 'test', value: 100, size: 24 };
      expect(getFontSize(word)).toBe('24px');
    });
  });

  describe('getText', () => {
    it('should return text from word object', () => {
      const word = { text: 'hello', value: 100 };
      expect(getText(word)).toBe('hello');
    });
  });

  describe('getTransform', () => {
    it('should return SVG transform string without spaces', () => {
      const word = {
        text: 'test',
        value: 100,
        x: 10,
        y: 20,
        rotate: 45,
      };
      const transform = getTransform(word);
      expect(transform).toBe('translate(10, 20)rotate(45)');
    });
  });

  describe('rotate', () => {
    it('should return angle from uniform distribution', () => {
      const rotations = 2;
      const rotationAngles: [number, number] = [-90, 90];
      const mockRandom = () => 0.5;
      const angle = rotate(rotations, rotationAngles, mockRandom);
      expect(angle).toBeGreaterThanOrEqual(-90);
      expect(angle).toBeLessThanOrEqual(90);
    });

    it('should handle single rotation', () => {
      const rotations = 1;
      const rotationAngles: [number, number] = [0, 0];
      const mockRandom = () => 0.5;
      const angle = rotate(rotations, rotationAngles, mockRandom);
      expect(angle).toBe(0);
    });
  });
});
