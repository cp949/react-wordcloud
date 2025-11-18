'use client';

import { ReactWordcloud } from '@cp949/react-wordcloud';
import { sampleWords } from '@/lib/sampleWords';

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Basic Example</h2>
        <div className="border rounded-lg p-4 bg-white" style={{ height: '500px' }}>
          <ReactWordcloud words={sampleWords} />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg">
          This is a demo application for <code>@cp949/react-wordcloud</code>, a modern React
          word cloud component built with TypeScript, D3.js, and security fixes.
        </p>
      </section>
    </div>
  );
}
