"use client";
import { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useNavbar } from "@/context/UI/UIProvider";
import { navbarLinks } from "@/data/navbarLinks";

export const NavbarCompact: FC = () => {
  const { isOpen, handleMenu } = useNavbar();
  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <div className="lg:hidden   pt-10 xs:h-72 sm: h-72 md:h-40 container ">
          <div className="font-medium  p-4 md:py-5 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white flex flex-col items-center place-content-center ">
            {navbarLinks.map(({ link, name }, i) => (
              <div
                key={i}
                className={
                  pathname === link ? "bg-slate-300 px-16 rounded" : ""
                }
              >
                <Link
                  className="px-3 py-2 flex items-center text-xl  uppercase font-bold leading-snug text-webC underline hover:opacity-50 "
                  href={link}
                  onClick={handleMenu}
                >
                  <span className="ml-2">{name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
