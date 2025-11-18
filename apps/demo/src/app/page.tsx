'use client';

import { ReactWordcloud, Options } from '@cp949/react-wordcloud';
import { sampleWords } from '@/lib/sampleWords';
import { OptionsPanel } from '@/components/OptionsPanel';
import { CodeSnippet } from '@/components/CodeSnippet';
import { useState } from 'react';

export default function Home() {
  const [options, setOptions] = useState<Partial<Options>>({
    fontFamily: 'times new roman',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSizes: [4, 32],
    padding: 1,
    rotationAngles: [-90, 90],
    scale: 'sqrt',
    spiral: 'rectangular',
    transitionDuration: 600,
    enableTooltip: true,
    deterministic: false,
  });

  const codeExample = `import { ReactWordcloud } from '@cp949/react-wordcloud';

const words = [
  { text: 'React', value: 100 },
  { text: 'TypeScript', value: 90 },
  { text: 'JavaScript', value: 85 },
  // ... more words
];

export function MyWordcloud() {
  return (
    <ReactWordcloud
      words={words}
      options={{
        fontFamily: '${options.fontFamily}',
        fontStyle: '${options.fontStyle}',
        fontWeight: '${options.fontWeight}',
        fontSizes: [${options.fontSizes?.[0]}, ${options.fontSizes?.[1]}],
        padding: ${options.padding},
        rotationAngles: [${options.rotationAngles?.[0]}, ${options.rotationAngles?.[1]}],
        scale: '${options.scale}',
        spiral: '${options.spiral}',
        transitionDuration: ${options.transitionDuration},
        enableTooltip: ${options.enableTooltip},
        deterministic: ${options.deterministic},
      }}
    />
  );
}`;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">React Wordcloud</h1>
        <p className="text-xl text-gray-600 mb-2">
          Modern, secure wordcloud component for React 18 & 19
        </p>
        <p className="text-sm text-gray-500">
          Built with TypeScript, D3.js, and zero security vulnerabilities
        </p>
      </section>

      {/* Interactive Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
        <p className="text-gray-600 mb-6">
          Try adjusting the options below to see how they affect the wordcloud in real-time.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wordcloud */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-4 bg-white" style={{ height: '600px' }}>
              <ReactWordcloud words={sampleWords} options={options} />
            </div>
          </div>

          {/* Options Panel */}
          <div className="lg:col-span-1">
            <OptionsPanel options={options} onChange={setOptions} />
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Code Example</h2>
        <p className="text-gray-600 mb-4">Here&apos;s the code for the current configuration:</p>
        <CodeSnippet code={codeExample} />
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">🔒 Secure</h3>
            <p className="text-gray-600">
              Zero security vulnerabilities. Fixed d3-color ReDoS issue.
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">⚡ Modern</h3>
            <p className="text-gray-600">
              Built with TypeScript, React 18/19, and latest D3.js v7+.
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">🎨 Customizable</h3>
            <p className="text-gray-600">
              Full control over fonts, colors, rotation, scale, and more.
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">📱 Responsive</h3>
            <p className="text-gray-600">
              Automatically adjusts to container size with ResizeObserver.
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">💯 Type-Safe</h3>
            <p className="text-gray-600">
              Written in TypeScript with full type definitions included.
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">🧪 Tested</h3>
            <p className="text-gray-600">
              Comprehensive test suite with Vitest and Testing Library.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
