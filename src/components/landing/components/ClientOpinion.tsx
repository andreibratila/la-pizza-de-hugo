import Image from 'next/image';
import { opinionCliente,  } from '@/data/opiniones';

export const ClientOpinion: React.FC<opinionCliente> = ({ img, opinion, nombre }) => {
    return (
        <div className="grid place-items-center lg:p-16 md:p-16 sm:p-12 p-9" >
             <div className="flex justify-center">
                <Image width={55} height={55} className="rounded-full " src={img} alt="Photo Review" />
             </div>
            <p className="text-center lg:pt-10  md:pt-7 sm:pt-6 pt-6 text-slate-400">
                {opinion}
            </p>
            <h1 className="text-center lg:pt-5 md:pt-5 sm:pt-5 pt-5 text-webC lg:text-2xl md:text-xl sm:text-xl text-lg">
                {nombre}
            </h1>
        </div>
    )
}
