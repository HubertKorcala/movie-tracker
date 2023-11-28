import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Movie Tracker',
  description: 'Track your favorite movies and TV shows.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
