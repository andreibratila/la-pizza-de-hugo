import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import { NavBar, Footer } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Pizza de Hugo',
  description: `Descubre 'La Pizza de Hugo', una experiencia culinaria que combina calidad, pasión y elegancia. Desde 1996, ofrecemos productos naturales y artesanales sin conservantes. Comenzando como 'La Cuina de Hugo', hemos evolucionado para brindarte lo mejor en pizzas, empanadillas y más. Visítanos en Tarragona o realiza tu pedido a domicilio`,
  category: 'Restauración y Gastronomía',
  classification: 'Pizzería y Comida Italiana',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://www.lapizzadehugo.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.lapizzadehugo.es',
    title: 'La Pizza de Hugo',
    description: `Descubre La Pizza de Hugo, una experiencia culinaria que combina calidad, pasión y elegancia. Desde 1996, ofrecemos productos naturales y artesanales sin conservantes. Comenzando como 'La Cuina de Hugo', hemos evolucionado para brindarte lo mejor en pizzas, empanadillas y más. Visítanos en Tarragona o realiza tu pedido a domicilio`,
    images: [
      {
        url: '/img/logo-pizza-hugo.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
