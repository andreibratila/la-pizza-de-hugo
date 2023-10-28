import Image from "next/image";
import Link from "next/link";

import { Point } from "@/data/svg";
import { footerLinks } from "@/data/footerLinks";

export const Footer: React.FC = () => {
  return (
    <>
      <nav className="bg-webC py-14">
        <div className="lg:container sm:container xs:container xs:pb-5 flex lg:flex-wrap md: flex-wrap xs:flex-col items-center justify-between ">
          <Image
            width={1000}
            height={1000}
            className="lg:hidden md:hidden sm:hidden xs:py-5"
            src="/img/logo-pizza-hugo.png"
            alt="Logo"
          />
          <div className="text-white lg:text-base lg:flex lg:flex-grow md:flex md:flex-grow sm:grid sm:grid-cols-1 lg:place-content-center md:place-content-center  lg:[&>*]:px-7 md:[&>*]:px-2 lg:divide-x md:divide-x ">
            {footerLinks.map(({ name, link }, i) => (
              <Link className="hover:text-gray-400" href={link} key={i}>
                <p className="flex items-center ">
                  <Image
                    width={10}
                    height={10}
                    src={Point}
                    alt=""
                    className="mr-2 lg:hidden md:hidden fill-white"
                  />
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="bg-black p-5">
        <p className="text-white">
          La Pizza de Hugo S.L © Diseño y Desarrollo{" "}
          <a href="https://www.linkedin.com/in/andrei-florian-bratila/">
            <span className="text-yellow-200">Andrei Bratila</span>
          </a>
        </p>
      </div>
    </>
  );
};
