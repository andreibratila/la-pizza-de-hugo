import { Metadata } from 'next';

import { ContactaConNosotros, ReactForm } from '@/components';
import { IframeMaps } from '@/components/landing/components';

export const metadata: Metadata = {
    title: 'Contactanos | La Pizza de Hugo',
    description: `Conéctate con 'La Pizza de Hugo' y déjanos saber tus inquietudes, sugerencias o comentarios. Estamos ubicados en Sant Pere i Sant Pau, Tarragona, y te esperamos con los brazos abiertos para ofrecerte la mejor experiencia culinaria. Ya sea que desees visitarnos en nuestro horario de atención o prefieras contactarnos por correo o teléfono, estamos aquí para atenderte.`,
    category: 'Restauración y Gastronomía',
    classification: 'Pizzería y Comida Italiana',
    viewport: 'width=device-width, initial-scale=1',
    metadataBase: new URL('https://www.lapizzadehugo.es'),
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://www.lapizzadehugo.es/contactanos',
      title: 'Contacta con La Pizza de Hugo',
      description: `Conéctate con 'La Pizza de Hugo' y déjanos saber tus inquietudes, sugerencias o comentarios. Estamos ubicados en Sant Pere i Sant Pau, Tarragona, y te esperamos con los brazos abiertos para ofrecerte la mejor experiencia culinaria. Ya sea que desees visitarnos en nuestro horario de atención o prefieras contactarnos por correo o teléfono, estamos aquí para atenderte.`,
      images: [
        {
          url: '/img/logo-pizza-hugo.png',
        },
      ],
    },
};
  
export default function Contactanos() {
    return (
        <>
            <div className="pt-36">
                <IframeMaps />
            </div>
            <section className="bg-bgcontact  lg:p-16  md:pt-10 sm:py-10 py-10">
                <div className="container bg-white lg:pt-16 lg:pb-16 ">
                    <div className="grid lg:grid-cols-2 ">

                        <ContactaConNosotros />

                        <div className="lg:pl-20 lg:pr-10 md:pr-10 sm:px-10">
                            <h1 className="
                            text-center font-garamond 
                            lg:text-5xl md:text-5xl sm:text-5xl text-3xl 
                            lg:pt-1 md:pt-20 md:pb-8 sm:pt-10 sm:pb-8 pt-10 pb-8
                            text-webC 
                            underline decoration-2 underline-offset-8
                            ">
                                Formulario de contacto
                            </h1>
                            <ReactForm/>
                        </div>
                    </div> 
                </div>
            </section>
        </> 
    )
}
    