import { FC } from "react";

import Image from "next/image";

import { contactLandingSection4 } from "@/data/contactLandingSection4";
import { Map, Instagram, Telefono, Horario } from "@/data/svg";

export const ContactaConNosotros: FC = () => {
  const getImageBySrc = (src: string) => {
    switch (src) {
      case "Map":
        return Map;
      case "Instagram":
        return Instagram;
      case "Telefono":
        return Telefono;
      case "Horario":
        return Horario;
      default:
        return null;
    }
  };

  const renderParagraphs = (src: string, text: string): JSX.Element[] => {
    const lines: string[] = text.split("\n");
    return lines.map(
      (line: string, index: number): JSX.Element => (
        <p className="lg:pl-8" key={index}>
          {renderContent(src, line)}
        </p>
      )
    );
  };

  const renderContent = (src: string, content: string): JSX.Element => {
    if (src === "Instagram") {
      return (
        <a
          href="https://www.instagram.com/lapizzadehugo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return <>{content}</>;
  };

  return (
    <div className="lg:pl-16 md:px-5 sm:px-10 px-2">
      <h1
        className="
        text-center font-garamond 
        lg:text-5xl md:text-5xl sm:text-5xl text-3xl 
        lg:pt-1 md:pt-10 md:pb-8 sm:pt-10 sm:pb-8 pt-10 pb-8
        text-webC 
        underline decoration-2 underline-offset-8
        "
      >
        Contacta Con Nosotros
      </h1>
      <h2 className="lg:pb-6 md:pt-10 md:pb-6 sm:pt-7 sm:pb-7 pt-4 pb-5 underline font-bold text-xl md:hidden">
        La pizza de Hugo
      </h2>
      <div className=" lg:divide-y md:divide-x sm:divide-y xs:divide-y md:grid md:grid-cols-4 ">
        {contactLandingSection4.map(({ src, alt, p }) => (
          <div
            key={src}
            className="lg:py-4 md:px-2 sm:py-4 xs:py-4 flex place-items-center md:place-content-center md:flex md:flex-col md:items-center md:justify-center "
          >
            <Image
              className="sm:pr-2 md:pb-5 xs:pr-2"
              width={35}
              height={35}
              src={getImageBySrc(src)}
              alt={alt}
            />
            <div>{renderParagraphs(src, p)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
