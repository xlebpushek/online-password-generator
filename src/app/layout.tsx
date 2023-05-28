export { metadata } from '@/shared/config'
import { HeaderWidget } from '@/widgets/header'
import classNames from 'classnames'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

const madeEvolveSansEvo = localFont({
  src: [
    { path: '../../public/fonts/MADE-Evolve-Sans/MADE-Evolve-Sans-Thin-EVO.woff2', weight: '250', style: 'normal' },
    { path: '../../public/fonts/MADE-Evolve-Sans/MADE-Evolve-Sans-Light-EVO.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/MADE-Evolve-Sans/MADE-Evolve-Sans-Regular-EVO.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/MADE-Evolve-Sans/MADE-Evolve-Sans-Medium-EVO.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/MADE-Evolve-Sans/MADE-Evolve-Sans-Bold-EVO.woff2', weight: '700', style: 'normal' },
  ],
  preload: true,
  variable: '--font-made_evolve_sans_evo',
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="dark" className="hide-scrollbar min-h-full w-full">
      <head />
      <body
        className={classNames(
          madeEvolveSansEvo.variable,
          'flex min-h-full w-full flex-col bg-light font-sans text-dark transition-colors duration-500 dark:bg-dark dark:text-light',
        )}
      >
        <HeaderWidget />
        <main className="flex min-h-screen w-full flex-col items-center justify-center">{children}</main>
      </body>
    </html>
  )
}
