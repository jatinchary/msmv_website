import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MSVV Wealth Partners | Integrated Financial & Wealth Strategies',
  description: 'We help high-earning business owners and executives keep more of what they\'ve built through proactive tax strategy and coordinated wealth planning.',
  keywords: ['wealth management', 'tax strategy', 'financial planning', 'business owners', 'executives', 'tax planning'],
  authors: [{ name: 'MSVV Wealth Partners' }],
  creator: 'MSVV Wealth Partners',
  publisher: 'MSVV Wealth Partners',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://msvvwealthpartners.com',
    title: 'MSVV Wealth Partners | Integrated Financial & Wealth Strategies',
    description: 'We help high-earning business owners and executives keep more of what they\'ve built through proactive tax strategy and coordinated wealth planning.',
    siteName: 'MSVV Wealth Partners',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'MSVV Wealth Partners - Integrated Financial & Wealth Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSVV Wealth Partners | Integrated Financial & Wealth Strategies',
    description: 'We help high-earning business owners and executives keep more of what they\'ve built through proactive tax strategy and coordinated wealth planning.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/images/image.png',
    shortcut: '/images/image.png',
    apple: '/images/image.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}