import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joseph Nevado',
  description: 'nevadoj website',
}

export default function Main({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <main className='flex flex-col gap-36 lg:gap-52 text-text-regular px-20 py-20'>
            <div className="flex justify-center lg:justify-start w-full">
              <Link href="/">
                <img src="/assets/images/icon.png" alt="website icon" width={60} height={60} className="mx-12 hover:cursor-pointer"/>
              </Link>
            </div>
            {children}
        </main>
      </body>
    </html>
  )
}
