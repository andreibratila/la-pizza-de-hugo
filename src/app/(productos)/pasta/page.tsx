import { Metadata } from 'next';
import { Product, ProductDiv } from '@/components';
import { pastaData } from '@/data/productos';

export const metadata: Metadata = {
    title: 'Pastas | La Pizza de Hugo',
    description: `Sumérgete en el auténtico sabor italiano con nuestras pastas en 'La Pizza de Hugo'. Desde los clásicos Macarrones Boloñesa hasta nuestras deliciosas Lasañas de Carne, cada plato está preparado con ingredientes frescos y recetas tradicionales, garantizando una experiencia gastronómica auténtica y deliciosa.`,
    category: 'Restauración y Gastronomía',
    classification: 'Pizzería y Comida Italiana',
    viewport: 'width=device-width, initial-scale=1',
    metadataBase: new URL('https://www.lapizzadehugo.es'),
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://www.lapizzadehugo.es/pasta',
      title: 'Pastas de La Pizza de Hugo',
      description: `Sumérgete en el auténtico sabor italiano con nuestras pastas en 'La Pizza de Hugo'. Desde los clásicos Macarrones Boloñesa hasta nuestras deliciosas Lasañas de Carne, cada plato está preparado con ingredientes frescos y recetas tradicionales, garantizando una experiencia gastronómica auténtica y deliciosa.`,
      images: [
        {
          url: '/img/productos/pasta/Pasta-lasana.jpg',
        },
      ],
    },
};

export default function Pasta() {
    return (
        <ProductDiv>
            {
                pastaData.map( ({path, name, price}) => (
                    <Product path={path} price={price} name={name} key={name}/>
                ))
            }
        </ProductDiv>
    )
}