import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const mainFontFamily = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-main'
})


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
    <html lang="pt-br" className={`${mainFontFamily.variable} scroll-smooth`}>

      {/* erro no canto inferior direito, verificar posteriormente */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <body className='bg-slate-100'>{children}</body>
    </html>
  )
}
