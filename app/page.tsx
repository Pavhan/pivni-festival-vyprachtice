"use client"

import Image from "next/image"
import Script from "next/script"
import { useEffect, useState } from "react"
import { Beer, Calendar, Clock, MapPin, Music, FlameIcon as Fire, Award, Users, Share2, ThumbsUp } from "lucide-react"

export default function Home() {
  const [fbAttendees, setFbAttendees] = useState({ attending: 0, interested: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // This would normally be handled by the FB SDK
    // For demo purposes, we'll simulate some attendance data
    setTimeout(() => {
      setFbAttendees({ attending: 87, interested: 142 })
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <div
      className="min-h-screen bg-amber-100"
      style={{ backgroundImage: "url('/images/wood-texture.png')", backgroundAttachment: "fixed" }}
    >
      {/* Hero section with parallax effect */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/images/pub-background.png" alt="Pub atmosphere" fill className="object-cover" priority />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-amber-900/70 p-6 rounded-lg backdrop-blur-sm max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-amber-100 mb-4 drop-shadow-lg">
              Výprachtický festival piva
            </h1>
            <p className="text-xl text-amber-200 font-medium">z regionálních minipivovarů</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-5 py-8">
        <Script
          id="facebook-sdk"
          strategy="lazyOnload"
          src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v18.0"
          nonce="random123"
          crossOrigin="anonymous"
        />
        <Script
          id="plausible-analytics"
          strategy="afterInteractive"
          data-domain="vyprachticky-festival.cz"
          src="https://plausible.io/js/script.js"
        />

        {/* Event details card */}
        <div className="bg-white/90 rounded-lg p-6 my-8 shadow-lg border border-amber-200">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0">
              <Image
                src="/images/pulitry.png"
                alt="Festival piva"
                width={200}
                height={200}
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl text-amber-800 mb-6">Informace o akci</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-amber-700" />
                  <div>
                    <strong className="text-amber-900">Termín:</strong>
                    <p>7. června 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-amber-700" />
                  <div>
                    <strong className="text-amber-900">Čas:</strong>
                    <p>od 14:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-amber-700" />
                  <div>
                    <strong className="text-amber-900">Místo:</strong>
                    <p>Výprachtice, fotbalové hřiště u kostela</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Beer className="h-6 w-6 text-amber-700" />
                  <div>
                    <strong className="text-amber-900">Vstupné:</strong>
                    <p>zdarma</p>
                  </div>
                </div>
              </div>

              {/* Facebook attendance */}
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <h3 className="text-blue-800 text-lg font-semibold">Účast na akci</h3>
                </div>

                {isLoaded ? (
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-600 text-white p-1 rounded-full">
                        <ThumbsUp className="h-4 w-4" />
                      </div>
                      <span>
                        <strong>{fbAttendees.attending}</strong> lidí se zúčastní
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-400 text-white p-1 rounded-full">
                        <Users className="h-4 w-4" />
                      </div>
                      <span>
                        <strong>{fbAttendees.interested}</strong> lidí má zájem
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-6 w-40 bg-gray-200 animate-pulse rounded"></div>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1 text-sm">
                    <ThumbsUp className="h-4 w-4" />
                    Zúčastním se
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm">
                    <Share2 className="h-4 w-4" />
                    Sdílet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program section */}
        <div className="relative bg-amber-800/90 rounded-lg p-6 my-8 shadow-lg text-amber-50">
          <div className="absolute top-0 right-0 opacity-10">
            <Image src="/images/hops.png" alt="Chmel" width={200} height={200} className="max-w-full h-auto" />
          </div>

          <h2 className="text-2xl mb-6 text-amber-100">Program festivalu</h2>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Beer className="h-6 w-6 text-amber-300" />
                <h3 className="text-xl text-amber-200 font-semibold">Průběh festivalu:</h3>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-amber-100">
                <li>Účastník zakoupí degustační karty</li>
                <li>Piva budou rotovat na 3-5 výčepech dle dostupnosti</li>
                <li>Na čepu dále: nealko, malinovka, kombucha</li>
                <li>Občerstvení zajištěno</li>
                <li>Hudba různých žánrů v průběhu akce z komba</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Music className="h-6 w-6 text-amber-300" />
                <h3 className="text-xl text-amber-200 font-semibold">Doprovodný program:</h3>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-amber-100">
                <li>Výstava hasičské techniky</li>
                <li>Vodní mlha v případě návalů horka</li>
                <li>Hudební doprovod různých žánrů</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Competition section */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 my-8 shadow-lg border border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 relative">
              <div className="absolute -top-4 -left-4 bg-amber-600 text-white rounded-full p-2 shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <Image
                src="/images/kotlik.png"
                alt="Kotlíkový guláš"
                width={180}
                height={180}
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl text-amber-800 mb-4 flex items-center gap-2">
                <Fire className="h-6 w-6 text-amber-600" />
                Soutěž o nejlepší kotlíkový guláš
              </h2>
              <p className="mb-3 text-amber-900">
                V případě dostatečného zájmu bude zařazena soutěž o nejlepší kotlíkový guláš.
                <span className="italic">(Guláš bude tak jako tak :-)</span>
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="mb-2 font-medium">
                  Zájemci se hlaste na tel. č.: <strong className="text-amber-800">+420 774 114 421</strong>
                </p>
                <p className="text-sm">Uzávěrka přihlášek: 31. května 2025</p>
                <p className="text-sm">Propozice budou zaslány elektronicky.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beer gallery */}
        <div className="my-12">
          <h2 className="text-2xl text-amber-800 mb-6 text-center">Těšte se na skvělá piva</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/beer1.png"
                alt="Pivo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/beer2.png"
                alt="Pivo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/beer3.png"
                alt="Pivo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/beer4.png"
                alt="Pivo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8 rounded-r-lg">
          <p className="italic text-amber-800">
            V případě nepříznivého počasí (hromy, blesky) si pořadatel vyhrazuje právo akci zrušit.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 mt-8 text-amber-800 border-t border-amber-200">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-amber-700 hover:text-amber-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-amber-700 hover:text-amber-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <p>© 2025 Výprachtický festival piva | Všechna práva vyhrazena</p>
        </footer>
      </div>
    </div>
  )
}
