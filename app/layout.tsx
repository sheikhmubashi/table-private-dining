import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: 'Table | Ivan Holmes · Cotswolds Private Dining',
  description: 'Private dining experiences by Chef Ivan Holmes. Bespoke menus, exceptional ingredients and unforgettable occasions, created exclusively for you and your guests.',
  keywords: 'private dining, chef Ivan Holmes, Cotswolds, bespoke catering, luxury dining, private chef, event catering, fine dining at home',
  openGraph: {
    title: 'Table | Ivan Holmes · Cotswolds Private Dining',
    description: 'Private dining experiences by Chef Ivan Holmes. Bespoke menus, exceptional ingredients and unforgettable occasions.',
    url: 'https://tableprivatedining.com',
    siteName: 'Table Private Dining',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Table Private Dining - Chef Ivan Holmes',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Table | Ivan Holmes · Cotswolds Private Dining',
    description: 'Private dining experiences by Chef Ivan Holmes. Bespoke menus, exceptional ingredients and unforgettable occasions.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tableprivatedining.com',
  },
  authors: [{ name: 'Ivan Holmes' }],
  creator: 'Ivan Holmes',
  publisher: 'Table Private Dining',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}