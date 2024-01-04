'use client';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.title,
//     template: `%s | ${siteConfig.title}`,
//   },
//   description: siteConfig.description,
//   robots: { index: true, follow: true },
//   // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
//   // ! copy to /favicon folder
//   icons: {
//     icon: '/favicon/favicon.ico',
//     shortcut: '/favicon/favicon-16x16.png',
//     apple: '/favicon/apple-touch-icon.png',
//   },
//   manifest: `/favicon/site.webmanifest`,
//   openGraph: {
//     url: siteConfig.url,
//     title: siteConfig.title,
//     description: siteConfig.description,
//     siteName: siteConfig.title,
//     images: [`${siteConfig.url}/images/og.jpg`],
//     type: 'website',
//     locale: 'en_US',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: siteConfig.title,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/images/og.jpg`],
//     // creator: '@th_clarence',
//   },
//   // authors: [
//   //   {
//   //     name: 'Theodorus Clarence',
//   //     url: 'https://theodorusclarence.com',
//   //   },
//   // ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let requestId: any;

    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 4) {
          const r = Math.floor(Math.random() * 50);
          ctx.fillStyle = `rgb(${r},${r},${r})`;
          ctx.fillRect(x, y, 4, 4);
        }
      }
      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);


  return (
    <html>
      <body className='bg-[#0B090C]'>
        {children}
        <div className="bg md:block hidden"></div>
      </body>
    </html>
  );
}
