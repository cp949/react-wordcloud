import type { Metadata } from 'next';
import './globals.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export const metadata: Metadata = {
  title: 'React Wordcloud Demo',
  description: 'Interactive demo for @cp949/react-wordcloud',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">React Wordcloud Demo</h1>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
