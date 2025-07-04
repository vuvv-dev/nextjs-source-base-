import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import AppProvider from '@/providers/AppProvider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artverse',
  description: 'Artverse - Your Digital Art Gallery',
  // icons: '/icons/logo.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
