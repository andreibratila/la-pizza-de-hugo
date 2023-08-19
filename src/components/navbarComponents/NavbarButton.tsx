'use client'
import { FC } from 'react'
import Image from 'next/image'
import { Menu } from '@/data/svg'
import { useNavbar } from '@/context/UI/UIProvider'

export const NavbarButton:FC = () => {
    const { handleMenu } = useNavbar();
    return (
        <button className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" onClick={handleMenu} >
            <Image src={Menu} className="w-6 h-auto" alt='Expandir barra de navegacion'/>
        </button>
    )
}
