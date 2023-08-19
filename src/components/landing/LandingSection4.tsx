import { FC } from 'react';

import { ContactaConNosotros } from "@/components"

import { IframeMaps } from "@/components/landing/components"


export const LandingSection4:FC = () => {
    return (
        <section className="bg-bgcontact  lg:p-16  md:pt-10 sm:py-10 py-10">
            <div className="container bg-white lg:pt-16 lg:pb-16 ">
                <div className="grid lg:grid-cols-2 ">

                    <ContactaConNosotros />

                    <div className="grid place-items-center lg:pr-14 md:px-10 md:pb-14 md:pt-7 sm:pt-5 xs:pt-3 ">
                        <IframeMaps />
                    </div>

                </div> 
            </div>
        </section>
    )
}
