import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import ReduxProvider from '@/store/ReduxProvider'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HomeBite',
  description: 'E-Commerce website for electronic gadgets',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased min-h-screen w-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <div className='flex flex-col overflow-hidden h-screen w-screen'>
              {children}
            </div>

            <Toaster />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
