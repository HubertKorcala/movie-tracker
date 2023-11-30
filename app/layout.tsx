import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/context/SessionProvider';
import { Toaster } from 'sonner';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
