'use client';

import { Options } from '@cp949/react-wordcloud';
import { useState } from 'react';

interface OptionsPanelProps {
  options: Partial<Options>;
  onChange: (options: Partial<Options>) => void;
}

export function OptionsPanel({ options, onChange }: OptionsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (key: keyof Options, value: unknown) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left font-semibold hover:bg-gray-50"
      >
        <span>Options</span>
        <span className="text-gray-500">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="p-4 space-y-4 border-t">
          {/* Font Family */}
          <div>
            <label className="block text-sm font-medium mb-1">Font Family</label>
            <select
              value={options.fontFamily}
              onChange={(e) => handleChange('fontFamily', e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="times new roman">Times New Roman</option>
              <option value="arial">Arial</option>
              <option value="courier new">Courier New</option>
              <option value="georgia">Georgia</option>
              <option value="verdana">Verdana</option>
            </select>
          </div>

          {/* Font Style */}
          <div>
            <label className="block text-sm font-medium mb-1">Font Style</label>
            <select
              value={options.fontStyle}
              onChange={(e) => handleChange('fontStyle', e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
            </select>
          </div>

          {/* Font Weight */}
          <div>
            <label className="block text-sm font-medium mb-1">Font Weight</label>
            <select
              value={options.fontWeight}
              onChange={(e) => handleChange('fontWeight', e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
            </select>
          </div>

          {/* Font Sizes */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Font Size Range: {options.fontSizes?.[0]} - {options.fontSizes?.[1]}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                max="100"
                value={options.fontSizes?.[0]}
                onChange={(e) =>
                  handleChange('fontSizes', [Number(e.target.value), options.fontSizes?.[1] ?? 32])
                }
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Min"
              />
              <input
                type="number"
                min="1"
                max="200"
                value={options.fontSizes?.[1]}
                onChange={(e) =>
                  handleChange('fontSizes', [options.fontSizes?.[0] ?? 4, Number(e.target.value)])
                }
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Padding */}
          <div>
            <label className="block text-sm font-medium mb-1">Padding: {options.padding}</label>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={options.padding}
              onChange={(e) => handleChange('padding', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Rotation Angles */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Rotation Range: {options.rotationAngles?.[0]}° - {options.rotationAngles?.[1]}°
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="-90"
                max="90"
                value={options.rotationAngles?.[0]}
                onChange={(e) =>
                  handleChange('rotationAngles', [
                    Number(e.target.value),
                    options.rotationAngles?.[1] ?? 90,
                  ])
                }
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Min"
              />
              <input
                type="number"
                min="-90"
                max="90"
                value={options.rotationAngles?.[1]}
                onChange={(e) =>
                  handleChange('rotationAngles', [
                    options.rotationAngles?.[0] ?? -90,
                    Number(e.target.value),
                  ])
                }
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Scale */}
          <div>
            <label className="block text-sm font-medium mb-1">Scale</label>
            <select
              value={options.scale}
              onChange={(e) => handleChange('scale', e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="linear">Linear</option>
              <option value="sqrt">Square Root</option>
              <option value="log">Logarithmic</option>
            </select>
          </div>

          {/* Spiral */}
          <div>
            <label className="block text-sm font-medium mb-1">Spiral</label>
            <select
              value={options.spiral}
              onChange={(e) => handleChange('spiral', e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="archimedean">Archimedean</option>
              <option value="rectangular">Rectangular</option>
            </select>
          </div>

          {/* Transition Duration */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Transition Duration: {options.transitionDuration}ms
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={options.transitionDuration}
              onChange={(e) => handleChange('transitionDuration', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Tooltip */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.enableTooltip}
                onChange={(e) => handleChange('enableTooltip', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm font-medium">Enable Tooltip</span>
            </label>
          </div>

          {/* Deterministic */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.deterministic}
                onChange={(e) => handleChange('deterministic', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm font-medium">Deterministic Layout</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
