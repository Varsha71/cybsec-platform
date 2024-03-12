'use client'

import AudioPlayer from './components/AudioPlayer'
import './globals.css'

import { Inter, Poppins, Lato } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: '400' })

// can only do this if it's a server component
// export const metadata = {
//     title: 'AI Quiz Generator',
//     description: 'Generated by create next app',
// }

import Script from 'next/script'

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <title>Cybersecurity Quiz Game</title>
                <link rel="icon" href="my-favicon-32x32.png" type="image/x-icon"></link>
            </head>
            <body className={`${poppins.className} relative`}>
{/*                 <nav className='fixed top-0 left-0 w-full text-white z-30'> */}
{/*                                     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> */}
{/*                                         <div className='flex items-center justify-center h-16'> */}
{/*                                             <div className='flex items-center'> */}
{/*                                                 <Link href="/quiz"> */}
{/*                                                     <a className='px-3 py-2 rounded-md text-xl font-medium'>Start Quiz</a> */}
{/*                                                 </Link> */}
{/*                                                 <Link href="/leaderboard"> */}
{/*                                                     <a className='ml-4 px-3 py-2 rounded-md text-xl font-medium'>Leaderboard</a> */}
{/*                                                 </Link> */}
{/*                                                 <Link href="/user-progress"> */}
{/*                                                     <a className='ml-4 px-3 py-2 rounded-md text-xl font-medium'>User Progress</a> */}
{/*                                                 </Link> */}
{/*                                             </div> */}
{/*                                         </div> */}
{/*                                     </div> */}
{/*                 </nav> */}
                <div className='bg-grid'>
                    <div className='gradient' />
                </div>

                <div className='fixed top-0 right-0 m-1 z-20'>
                    <AudioPlayer />
                </div>

                <main className='relative z-10 max-w-7xl mx-auto sm:px-16 px-6'>
                    {children}
                </main>
            </body>

            {/* <!-- Google tag (gtag.js) --> */}

            {/* afterInteractive is the default strategy for Next's <Script> tag */}
            <Script
                async
                strategy='afterInteractive'
                src='https://www.googletagmanager.com/gtag/js?id=G-BKK7659J87'
            />
            <Script strategy='afterInteractive' src='/analytics.js' />
        </html>
    )
}
