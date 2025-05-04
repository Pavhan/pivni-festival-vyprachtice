import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body>
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
