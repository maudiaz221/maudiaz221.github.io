import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'Mauricio Diaz - Portfolio',
  description:
    'Full-Stack Developer & ML Engineer specializing in TypeScript, Python, and Financial Technology',
  keywords: ['portfolio', 'developer', 'machine learning', 'full-stack', 'TypeScript', 'Python'],
  authors: [{ name: 'Mauricio Diaz' }],
  openGraph: {
    title: 'Mauricio Diaz - Portfolio',
    description: 'Full-Stack Developer & ML Engineer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-cyber-darker)] text-white antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
