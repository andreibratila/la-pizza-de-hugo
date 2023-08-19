import { FC } from "react"

import Image from "next/image"
import Link from "next/link"

export const NavbarLogo:FC = () => {
    return (
        <Link className="flex" href="/" >
            <Image src="/img/logo-pizza-hugo.png" width={97} height={97} alt="Logo" style={{width:'auto', height:'auto'}}/>
            <span className="uppercase self-center xs:hidden lg:text-3xl md:text-3xl sm:text-2xl text-white underline underline-offset-4 indent-8 font-garamond font-semibold tracking-widest">La Pizza de Hugo</span>
        </Link>
    )
}
