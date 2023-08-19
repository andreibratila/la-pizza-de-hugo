import { Metadata } from 'next';
import { Product, ProductDiv } from '@/components';
import { pizzaData } from '@/data/productos';

export const metadata: Metadata = {
    title: 'Pizzas | La Pizza de Hugo',
    description: `Explora nuestra amplia variedad de pizzas en 'La Pizza de Hugo'. Desde las clásicas como la Básica y la Tropical hasta nuestras exclusivas Pizzas Gourmet como la Cocktail y la Bomba. Cada pizza está elaborada con ingredientes frescos y de calidad, garantizando un sabor inigualable. Ya sea que prefieras una mediana o una familiar, tenemos una pizza perfecta para ti.`,
    category: 'Restauración y Gastronomía',
    classification: 'Pizzería y Comida Italiana',
    viewport: 'width=device-width, initial-scale=1',
    metadataBase: new URL('https://www.lapizzadehugo.es'),
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://www.lapizzadehugo.es/pizzas',
      title: 'Pizzas de La Pizza de Hugo',
      description: `Explora nuestra amplia variedad de pizzas en 'La Pizza de Hugo'. Desde las clásicas como la Básica y la Tropical hasta nuestras exclusivas Pizzas Gourmet como la Cocktail y la Bomba. Cada pizza está elaborada con ingredientes frescos y de calidad, garantizando un sabor inigualable. Ya sea que prefieras una mediana o una familiar, tenemos una pizza perfecta para ti.`,
      images: [
        {
          url: '/img/productos/pizzas/premium/Pizza-provenzal.jpg',
        },
      ],
    },
};

export default function Pizzas() {
    return (
        <>  
           {
                pizzaData.map(({ title, pizzas }) => (
                    <div key={title}>
                        <h2 className="pt-16 text-center lg:text-3xl md:text-3xl sm:text-2xl xs:text-xl font-bold -mb-10">{title}</h2>
                        <ProductDiv>
    
                            {
                                pizzas.map(({ name, path, desc, price }) => (
                                    <Product path={path} name={name} key={name} desc={desc} price={price} lgheigth="h-36"/>
                                ))
                            }
                        </ProductDiv>  

                    </div>
                ))
            }
        </>
    )
}