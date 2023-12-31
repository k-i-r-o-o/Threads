import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '../components/share/Topbar'
import Bottombar from '../components/share/Bottombar'
import LeftSidebar from '../components/share/LeftSidebar'
import RightSidebar from '../components/share/RightSidebar'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
         <main>
          <LeftSidebar />
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
            {children}
            </div>

          </section>
          <RightSidebar />
        </main>
        <Bottombar />  
        </body>
    </html>
    </ClerkProvider>
  ) 
}
