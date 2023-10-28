import { FC } from "react";

import {
  NavbarButton,
  NavbarCompact,
  NavbarFull,
  NavbarLogo,
} from "@/components/navbarComponents";
import { NavbarProvider } from "@/context/UI/UIProvider";

export const NavBar: FC = () => {
  return (
    <nav className="z-10 fixed w-full flex justify-between lg:px-20 md:px-20 sm:px-7 px-4 py-5 bg-webC">
      <NavbarProvider>
        <div className="flex flex-col w-full">
          <div className="flex xs:justify-center space-x-20 justify-between">
            <NavbarLogo />
            <NavbarButton />
          </div>
          <NavbarCompact />
        </div>
      </NavbarProvider>
      <NavbarFull />
    </nav>
  );
};
