import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system'>
            <Header/>
            <div className=' mt-[155px]'>{children}</div>
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
