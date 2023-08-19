import Link from "next/link"

export const LandingSection1 = () => {
    return (
        <section className="pt-14 flex  ">
            <div className="bg-landing-section1 bg-no-repeat bg-center w-screen h-full mt-20 py-56 px-20">
                <div className="bg-bgClientes bg-opacity-70 lg:p-14  md:p-10  sm:p-8 xs:py-5  font-garamond text-bglogo tracking-widest text-center">

                    <h1 className=" lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold">
                        Calidad Experiencia Pasión Y Elegancia
                    </h1>

                    <h2 className="lg:py-10 md:py-7 sm:py-5 xs:py-4 lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">Trabajamos con productos <span className="font-bold underline">naturales</span> <span className="font-bold underline">artesanales</span> y <span className="font-bold underline">sin conservantes</span> <br/> Nos esmeramos en darle calidad.</h2>
                    
                    <Link className="lg:text-3xl md:text-2xl sm:text-xl text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"  href="/pizzas">
                        <span><span className="xs:hidden">Visualiza Nuestros</span> Productos</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
