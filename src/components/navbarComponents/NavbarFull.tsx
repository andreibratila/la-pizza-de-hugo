import { FC } from "react";

import Link from "next/link";

import { navbarLinks } from "@/data/navbarLinks";

export const NavbarFull:FC = () => {
    return (
        <div className="sm:hidden xs:hidden md:hidden flex items-center space-x-6">
            {navbarLinks.map( ({ link, name }, i) => (
            <Link key={i} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white underline hover:opacity-50 " href={link} >
                <span className="ml-2">{name}</span>
            </Link>
            ))}
      </div>
    )
}
