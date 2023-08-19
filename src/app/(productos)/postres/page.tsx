import { Metadata } from 'next';
import { Product, ProductDiv } from '@/components';
import { postresData } from '@/data/productos';

export const metadata: Metadata = {
    title: 'Postres | La Pizza de Hugo',
    description: `Endulza tu paladar con nuestros exquisitos postres en 'La Pizza de Hugo'. Desde las cremosas Tarrinas Häagen-Dazs y los refrescantes Helados de Cucurucho hasta las tradicionales delicias como el Flan con Nata y Dulce de Leche o los Alfajores Havanna. Cada postre es una invitación a un viaje de sabores inolvidables.`,
    category: 'Restauración y Gastronomía',
    classification: 'Pizzería y Comida Italiana',
    viewport: 'width=device-width, initial-scale=1',
    metadataBase: new URL('https://www.lapizzadehugo.es'),
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://www.lapizzadehugo.es/postres',
      title: 'Postres de La Pizza de Hugo',
      description: `Endulza tu paladar con nuestros exquisitos postres en 'La Pizza de Hugo'. Desde las cremosas Tarrinas Häagen-Dazs y los refrescantes Helados de Cucurucho hasta las tradicionales delicias como el Flan con Nata y Dulce de Leche o los Alfajores Havanna. Cada postre es una invitación a un viaje de sabores inolvidables.`,
      images: [
        {
          url: '/img/logo-pizza-hugo.png',
        },
      ],
    },
};

export default function Postres() {
    return (
        <ProductDiv>
            {
                postresData.map( ({path, name}) => (
                    <Product path={path} name={name} key={name}/>
                ))
            }
        </ProductDiv>
    )
}