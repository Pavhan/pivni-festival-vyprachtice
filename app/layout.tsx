import type React from "react"

import './globals.css';
import { Alfa_Slab_One, Roboto_Slab } from 'next/font/google';
import type { Metadata } from 'next';

const alfaSlabOne = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alfa-slab-one',
});

const robotoSlab = Roboto_Slab({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

export const metadata: Metadata = {
  title: "Výprachtický festival piva z regionálních minipivovarů",
  description: "Festival piva ve Výprachticích, 7. června 2025",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body  className={`${alfaSlabOne.variable} ${robotoSlab.variable}`}>
        <div id="fb-root"></div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId: 'your-app-id',
                xfbml: true,
                version: 'v18.0'
              });
            };
          `,
          }}
        />
      </body>
    </html>
  )
}
