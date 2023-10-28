"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarProductosLink } from "@/data/navbarProductosLink";

export const NavProductos: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="pt-52 text-center container">
      <ul className="xs:py-2 xs:rounded-3xl flex flex-wrap justify-center text-lg font-semibold rounded-full outline-dorado outline-offset-4 outline max-w-2xl items-center mx-auto">
        {navbarProductosLink.map(({ link, name }, i) => (
          <li key={i} className="p-0">
            <Link href={link}>
              <span
                className={`block px-2 py-1 text-webC ${
                  pathname === link
                    ? "decoration-double underline underline-offset-4"
                    : "hover:opacity-50 "
                }`}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
