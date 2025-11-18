import type { Metadata } from 'next';
import Link from 'next/link';
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
      <body className="antialiased min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition-colors">
                React Wordcloud
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link
                  href="/examples"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Examples
                </Link>
                <a
                  href="https://github.com/chrisrzhou/react-wordcloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            Built with Next.js and @cp949/react-wordcloud
          </div>
        </footer>
      </body>
    </html>
  );
}
