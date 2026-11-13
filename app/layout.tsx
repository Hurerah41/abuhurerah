import type { Metadata, Viewport } from 'next';
import { Inter, Archivo } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'only light',
};

export const metadata: Metadata = {
  title: 'Abu Hurerah – Full-Stack Web Developer',
  description:
    'Abu Hurerah, full-stack web developer in Karachi. Laravel, React, Node.js, WordPress and Tailwind.',
  keywords: [
    'Abu Hurerah',
    'Full-Stack Developer',
    'Web Developer Karachi',
    'Next.js Portfolio',
    'React',
    'Laravel',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Abu Hurerah' }],
  creator: 'Abu Hurerah',
  openGraph: {
    title: 'Abu Hurerah – Full-Stack Web Developer',
    description:
      'Full-stack developer building fast, responsive, and robust web applications with Next.js, Laravel, and Tailwind.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Abu Hurerah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abu Hurerah – Full-Stack Web Developer',
    description:
      'Full-stack developer building fast, responsive, and robust web applications.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.svg',
  },
  other: {
    'color-scheme': 'only light',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="only light" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
