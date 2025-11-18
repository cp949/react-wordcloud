'use client';

import { ReactWordcloud } from '@cp949/react-wordcloud';
import { sampleWords } from '@/lib/sampleWords';
import { CodeSnippet } from '@/components/CodeSnippet';

export default function ExamplesPage() {
  const customColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Examples</h1>
        <p className="text-gray-600 text-lg">
          Explore different configurations and use cases for React Wordcloud.
        </p>
      </section>

      {/* Example 1: Minimal */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Minimal Example</h2>
        <p className="text-gray-600 mb-4">The simplest possible configuration with just words.</p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud words={sampleWords.slice(0, 15)} />
        </div>
        <CodeSnippet
          code={`import { ReactWordcloud } from '@cp949/react-wordcloud';

const words = [
  { text: 'React', value: 100 },
  { text: 'TypeScript', value: 90 },
  { text: 'JavaScript', value: 85 },
];

export function MinimalExample() {
  return <ReactWordcloud words={words} />;
}`}
        />
      </section>

      {/* Example 2: Custom Colors */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Custom Colors</h2>
        <p className="text-gray-600 mb-4">
          Customize the color palette to match your brand or theme.
        </p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 20)}
            options={{
              colors: customColors,
              fontFamily: 'arial',
            }}
          />
        </div>
        <CodeSnippet
          code={`const customColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

<ReactWordcloud
  words={words}
  options={{
    colors: customColors,
    fontFamily: 'arial',
  }}
/>`}
        />
      </section>

      {/* Example 3: No Rotation */}
      <section>
        <h2 className="text-3xl font-bold mb-4">No Rotation</h2>
        <p className="text-gray-600 mb-4">Keep all words horizontal for better readability.</p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 20)}
            options={{
              rotationAngles: [0, 0],
              fontFamily: 'georgia',
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    rotationAngles: [0, 0],
    fontFamily: 'georgia',
  }}
/>`}
        />
      </section>

      {/* Example 4: Large Font Sizes */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Large Font Sizes</h2>
        <p className="text-gray-600 mb-4">
          Emphasize words with larger font sizes for dramatic effect.
        </p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '500px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 15)}
            options={{
              fontSizes: [20, 80],
              padding: 5,
              fontWeight: 'bold',
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    fontSizes: [20, 80],
    padding: 5,
    fontWeight: 'bold',
  }}
/>`}
        />
      </section>

      {/* Example 5: Archimedean Spiral */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Archimedean Spiral</h2>
        <p className="text-gray-600 mb-4">
          Use archimedean spiral for a more circular layout pattern.
        </p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 25)}
            options={{
              spiral: 'archimedean',
              fontFamily: 'verdana',
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    spiral: 'archimedean',
    fontFamily: 'verdana',
  }}
/>`}
        />
      </section>

      {/* Example 6: Deterministic Layout */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Deterministic Layout</h2>
        <p className="text-gray-600 mb-4">
          Enable deterministic layout for consistent rendering across page refreshes.
        </p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 20)}
            options={{
              deterministic: true,
              fontFamily: 'courier new',
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    deterministic: true,
    fontFamily: 'courier new',
  }}
/>`}
        />
      </section>

      {/* Example 7: Fast Transitions */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Fast Transitions</h2>
        <p className="text-gray-600 mb-4">Reduce transition duration for snappier updates.</p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords}
            options={{
              transitionDuration: 200,
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    transitionDuration: 200,
  }}
/>`}
        />
      </section>

      {/* Example 8: Linear Scale */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Linear Scale</h2>
        <p className="text-gray-600 mb-4">
          Use linear scale instead of square root for more dramatic size differences.
        </p>
        <div className="border rounded-lg p-4 bg-white mb-4" style={{ height: '400px' }}>
          <ReactWordcloud
            words={sampleWords.slice(0, 20)}
            options={{
              scale: 'linear',
              fontSizes: [10, 60],
            }}
          />
        </div>
        <CodeSnippet
          code={`<ReactWordcloud
  words={words}
  options={{
    scale: 'linear',
    fontSizes: [10, 60],
  }}
/>`}
        />
      </section>
    </div>
  );
}
