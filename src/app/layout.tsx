import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joseph Nevado',
  description: 'nevadoj website',
}

export default function Main({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <main className='flex flex-col gap-96 text-text-regular items-center px-20 py-20'>
        {children}
      </main>
    </html>
  )
}
