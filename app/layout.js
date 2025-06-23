import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brian Karmo | Software Developer',
  description: 'Explore Brian Karmo\'s portfolio, showcasing full‑scale projects and modern software development using Shopify Liquid, React, and Next.js. Available for hire on Upwork.',
  keywords: 'Brian Karmo, software developer, full‑scale projects, web development, React, Next.js, Shopify Liquid, JavaScript, Tailwind CSS, Upwork freelancer',
  author: 'Brian Karmo',
  openGraph: {
    type: 'website',
    title: 'Brian Karmo | Software Developer',
    description: 'Explore Brian Karmo\'s portfolio, showcasing full‑scale projects and modern software development. Available for freelance work on Upwork.',
    url: 'https://www.briankarmo.com/',
    image: 'https://www.briankarmo.com/heroImage-1200x630.png',
    siteName: 'Brian Karmo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Karmo | Software Developer',
    description: 'Explore Brian Karmo\'s portfolio, showcasing full‑scale projects and modern software development.',
    images: ['https://www.briankarmo.com/heroImage-1200x630.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/heroImage.ico' },
      { url: '/heroImage-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/heroImage-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/heroImage-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport = {
  themeColor: '#0EA5E9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        <meta name="msapplication-navbutton-color" content="#0EA5E9" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0EA5E9" />
        <meta property="og:background" content="#0EA5E9" />
        <link rel="preload" as="image" href="/heroImage.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 