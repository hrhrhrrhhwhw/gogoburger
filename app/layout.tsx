import { Onest  } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const onest = Onest({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={cn('antialiased', 'font-sans', onest.variable)}>
      <body className="bg-background md:mx-auto md:max-w-6xl">{children}</body>
    </html>
  )
}
