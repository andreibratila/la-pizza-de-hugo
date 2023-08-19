import { Metadata } from 'next';

import { Product, ProductDiv } from '@/components'
import { empanadillasData } from '@/data/productos'

export const metadata: Metadata = {
    title: 'Empanadillas | La Pizza de Hugo',
    description: `Descubre nuestras deliciosas empanadillas en 'La Pizza de Hugo'. Ofrecemos una variedad de sabores, desde la tradicional de Carne y Pollo hasta combinaciones únicas como Bechamel, Bacon y Maíz o Sobrasada y Queso. Cada empanadilla está hecha con amor y ingredientes de la más alta calidad, asegurando una experiencia culinaria inolvidable.`,
    category: 'Restauración y Gastronomía',
    classification: 'Pizzería y Comida Italiana',
    viewport: 'width=device-width, initial-scale=1',
    metadataBase: new URL('https://www.lapizzadehugo.es'),
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://www.lapizzadehugo.es/empanadillas',
      title: 'La Pizza de Hugo',
      description: `Descubre nuestras deliciosas empanadillas en 'La Pizza de Hugo'. Ofrecemos una variedad de sabores, desde la tradicional de Carne y Pollo hasta combinaciones únicas como Bechamel, Bacon y Maíz o Sobrasada y Queso. Cada empanadilla está hecha con amor y ingredientes de la más alta calidad, asegurando una experiencia culinaria inolvidable.`,
      images: [
        {
          url: '/img/productos/empanadillas/Empanadilla-jamon-y-queso.jpg',
        },
      ],
    },
};

export default function Empanadillas() {
    return (
        <ProductDiv>
            {
                empanadillasData.map( ({path, name, price}) => (
                    <Product path={path} price={price} name={name} key={name} />
                ))
            }
        </ProductDiv>
    )
}