// import '../../../slick-slider/slick.min.css'
// import '../../../slick-slider/slick-theme.min.css'
import '@/slick-slider/slick.min.css'
import '@/slick-slider/slick-theme.min.css'


import { opinionesClientes } from "@/data/opiniones"
import { SliderCSR } from '../';
import { ClientOpinion } from './components';

export const LandingSection3 = () => {
    return (
        <section className="pt-20 bg-webC mt-14 pb-24">
          
            <h1 className={`text-center font-garamond text-white decoration-white lg:pb-14 md:pb-14 sm:pb-10 pb-7 lg:text-6xl md:text-5xl sm:text-4xl text-xl  underline decoration-2 underline-offset-8 `}>
                RESEÑAS SOBRE NOSOTROS
            </h1>
            
            <div className="container rounded-3xl outline-dashed -outline-offset-8 bg-white">
                <SliderCSR >
                    {
                        opinionesClientes.map( (opinionesClientes, i) => (
                           <ClientOpinion key={i} {...opinionesClientes}/>
                        ))
                    }
                </SliderCSR>
            </div>
        </section>
    )
}
