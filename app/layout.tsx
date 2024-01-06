import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vgnshiyer\'s links.',
  description: 'A link tree for my social accounts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className="mb-9 flex flex-col items-center justify-center">
      <Link href="/">
        <span className="text-contrast-light dark:text-contrast-dark text-2xl font-poppins font-bold">vgnshiyer's links.</span>
      </Link>
      <p className="mt-4 relative max-w-full font-mono
before:absolute before:inset-0 before:animate-typewriter
text-white
before:bg-dark
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-white">Navigate through my digital world.</p>
    </header>
  );

  return (
    <html lang="en" className="h-full font-poppins bg-dark">
      <link rel='icon' href='favicon.ico' />
      <body className="mt-6 md:mt-12 lg:mt-24 mb-12">
        <div className="flex flex-col items-center justify-center mx-auto max-w-9/10 md:max-w-3/4 lg:max-w-2/3">
          {header}
          {children}
        </div>
      </body>
    </html>
  )
}
